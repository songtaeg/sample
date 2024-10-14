// fs, http, express
const fs = require("fs");

fs.readFile("test.txt", "utf8",(err, data)=>{
    if(err){
        console.log("오류",err);
        return;
    }
    //console.log(data.toString());
    console.log(data);
});

fs.readFile("test.txt", "utf8",(err, data)=>{
    if(err){
        console.log("오류",err);
        return;
    }
    //console.log(data.toString());
    fs.writeFile("text2.txt",data,(err)=>{
        if(err){
            console.log("오류",err);
            return;
        }
        console.log("저장 성공");
    })
});