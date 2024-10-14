const express = require('express');
const methodOverride = require('method-override');

const app = express()
app.set("view engine","ejs");
app.set("views","./template");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method'));

app.use("/board" ,require("./route/boardRoute"));
app.use("/user" ,require("./route/userRoute"));
app.use("/student" ,require("./route/studentRoute"));

app.listen(3000, ()=>{
    console.log("server start!");
});

// app.get('/test',(req,res)=>{
//     res.send("test page(get)");
// })

// app.post('/test',(req,res)=>{
//     res.send("test page(post)");
// })



//데이터 가져오겠다
// app.get('/board/:boardNo', (req,res)=>{
//     //req.params.boardNo 값을 통해 db조회 후 화면에 출력
//     res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
// })

//수정
// app.put('/board/:boardNo', (req,res)=>{
//     //req.params.boardNo 값을 통해 db에서 수정
//     res.send(`${req.params.boardNo}번 게시글 업데이트`);
// })

//삭제
// app.delete('/board/:boardNo', (req,res)=>{
//     //req.params.boardNo 값을 통해 db에서 삭제
//     res.send(`${req.params.boardNo}번 게시글 삭제`);
// })

