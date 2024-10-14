//promise (pending, fulfilled(success), rejected(fail)) 비동기통신을 도와주는 객체

var promise=new Promise((resolve,rejected) => {
    var flg=true;
    setTimeout(() => {
        if(flg){
            resolve("success");
        }else{
            rejected("fail");
        }
    },1000);
});

promise
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        
    })