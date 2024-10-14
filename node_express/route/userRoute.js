const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route("/")
        .get((req,res)=>{
            const query='select * from tbl_user';
            connection.query(query, (err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.render('user',{ list:results });
            });
        })
         

router.route("/add")
        .get( (req,res)=>res.render("user-add") );

router.route("/:id")
        //데이터 가져오겠다
        .get((req,res)=>{
            var id=req.params.id;
            //console.log(id);
            const query=`select * from tbl_user where id = '${id}' `;
            connection.query(query,(err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.render('user-update',{ user: results[0] });
            }); 
        })
        //수정
        .put((req,res)=>{
            var user=req.body;
            const query='update  from tbl_user set pwd=?, name=?, gender=? where id=?';
            connection.query(query,  [user.pwd, user.name, user.gender],(err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/user");
            });
            
        })

        .post((req,res)=>{
            //insert 
            //insert 끝나면 목록으로
            var user=req.body;
            const query='insert into tbl_user values (?,?,?,?)';
            connection.query(query, [user.id, user.pwd, user.name, user.gender], (err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.render('user',{ list:results });
            });
        });


module.exports = router;