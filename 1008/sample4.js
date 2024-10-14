//2초 후에 숫자 '1' 콘솔로 출력(settimeout,화살표)
// console.log(0);
// setTimeout(() => console.log(1), 2000);
// console.log(2);

//자바스크립트: 비동기 기반 (순서 x)

//1초 후 순서대로 how?
setTimeout(() => {
    console.log(1);

    setTimeout(() => {
        console.log(2);

        setTimeout(() => {
            console.log(3);  
        }, 1000);

    }, 1000);

}, 1000);