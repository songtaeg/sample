function test(){
    console.log("테스트 함수");
}

setTimeout(test,2000);

//화살표 함수
setTimeout(() => {
    console.log("테스트 함수");
}, 2000);

//익명 함수
setTimeout(function(){
    console.log("테스트 함수");
},2000);

