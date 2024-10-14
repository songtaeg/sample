function test(callback,time){
    setTimeout(callback,time);
}

//테스트함수 > 1초뒤 콜백함수가 실행되도록
test( ()=>{console.log("1번째 함수")}, 1000);