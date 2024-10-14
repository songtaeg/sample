const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route("/")
        .get((req,res)=>{
            const query='select * from tbl_board';
            connection.query(query, (err,results)=>{
                if(err){
                    console.error('실행 실패',err);
                    //res.status(500).send('서버 오류');
                    return;
                }
                res.render('board',{ list:results });
            });
        })
        
        .post((req,res)=>{
            var {boardNo,title,contents}=req.body;
            res.send(`번호: ${boardNo}, 제목: ${title}, 내용: ${contents}`);
        });    

// router.route("/")
//         .get((req,res)=>{
//             var data={
//                 list:[
//                     {"boardNo": 1,"title":"java","userId":"test1"},
//                     {"boardNo": 2,"title":"node","userId":"test2"},
//                     {"boardNo": 3,"title":"spring","userId":"test3"}
//                 ],
//                 message:"success"
//             }
//             res.render("board",data);

//         })
//         .post((req,res)=>{
//             var {boardNo,title,contents}=req.body;
//             res.send(`번호: ${boardNo}, 제목: ${title}, 내용: ${contents}`);
//         });

// app.get('/test',(req,res)=>{
//     res.send("test page(get)");
// })

// app.post('/test',(req,res)=>{
//     res.send("test page(post)");
// })
router.route("/insert")
        .get( (req,res)=>res.render("board-insert") );

router.route("/:boardNo")
        //데이터 가져오겠다
        .get((req,res)=>{
            //req.params.boardNo 값을 통해 db조회 후 화면에 출력
            res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
        })
        
        //수정
        .put((req,res)=>{
            //req.params.boardNo 값을 통해 db에서 수정
            res.send(`${req.params.boardNo}번 게시글 업데이트`);
        })

        //삭제
        .delete((req,res)=>{
            //req.params.boardNo 값을 통해 db에서 삭제
            res.send(`${req.params.boardNo}번 게시글 삭제`);
        });

module.exports = router;