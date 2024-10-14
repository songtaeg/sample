const http = require("http");

const server = http.createServer((req,res)=>{
    const {method,url} = req;
    console.log(method,"==>",url);
    console.log("서버 호출 성공");
    res.setHeader("Content-Type","text/plain");
    if(url=="/main"){
        res.end("main");
    }else if(url=="/board"){
        res.end("board");
    }else{
        res.end("404 error");
    }
    //res.write("success!!");
    //res.end();
});

server.listen(3000,()=>{
    console.log("서버 실행 성공");
});

//netstat -nao |findstr portnum
//taskkill -f /pid pid