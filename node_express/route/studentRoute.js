const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route("/")
        .get((req,res)=>{
            const query='select * from tbl_student';
            connection.query(query, (err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.render('student',{ list:results });
            });
        })

        //insert
        .post((req,res)=>{
            var student=req.body;
            const query='insert into tbl_student values (?,?,?,?)';
            connection.query(query, [student.stuNo, student.stuName, student.stuDept, student.stuGrade], (err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.render('student',{ list:results });
            });
        })
         
router.route("/insert").get( (req,res)=>res.render("student-add") );

router.route("/:stuNo")
        //데이터 가져오겠다
        .get((req,res)=>{
            var stuNo=req.params.stuNo;
            //console.log(id);
            const query=`select * from tbl_student where stuNo = '${stuNo}' `;
            connection.query(query,[stuNo],(err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    res.status(500).send('서버 오류');
                    return;
                }
                res.render('student-update',{student: results[0] });
            }); 
        })

        //수정
        .put((req,res)=>{
            var student=req.body;
            const query='update tbl_student set stuDept=?, stuName=?, stuGrade=? where stuNo=?';
            connection.query(query,  [student.stuDept, student.stuName, student.stuGrade, student.stuNo],(err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/student");
            });   
        })

        //삭제
        .delete((req,res)=>{
            var stuNo=req.params.stuNo;
            const query=`DELETE FROM tbl_student where stuNo ='${stuNo}' `;
            connection.query(query,[stuNo],(err,results)=>{
                if(err){
                    console.error('실행 실패: ',err);
                    res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/student");
            }); 
        })



module.exports = router;