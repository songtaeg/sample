function delay(callback,time){
    setTimeout(callback,time);
}

//callback
delay(()=>{
    console.log(1);
    delay(()=>{
        console.log(2);
    },1000);
},1000);