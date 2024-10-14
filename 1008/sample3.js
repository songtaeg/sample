

 function print1(){
    console.log("출력1");
 }

//setTimeout()
setTimeout(print1,3000); //3초 후 

setTimeout(function(){
    console.log("출력2");
}, 3000);

setTimeout(()=>{ 
    console.log("출력3");
}, 3000);