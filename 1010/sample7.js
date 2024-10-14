// fs, http, express
const fs = require("fs");

fs.readdir("./", (err, files)=>{
    if(err){
        console.log("오류",err);
        return;
    }
    console.log(files);
});