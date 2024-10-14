function delay(time){
    return new Promise( (resolve)=> setTimeout(resolve,time) );   
}

async function run(){
    await delay(1000); //await 독립적으로 사용 x
    console.log(1);
    await delay(1000);
    console.log(2);
    await delay(1000);
    console.log(3);
}

run();