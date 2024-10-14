function fun1(callback){
    setTimeout(()=>{
        console.log(1);
        callback();
    }, 1000);
}

function fun2(callback){
    setTimeout(()=>{
        console.log(2);
        callback();
    }, 1000);
}

function fun3(callback){
    setTimeout(()=>{
        console.log(3);
        callback();
    }, 1000);
}

function fun4(callback){
    setTimeout(()=>{
        console.log(4);
        callback();
    }, 1000);
}

fun1(()=>{
    fun2(()=>{
        fun3(()=>{
            fun4(()=>{
                setTimeout(() => {
                    console.log("end");
                }, 1000);
            });
        });
    });
})