const sum = function(x,y){
    return x+y;
};

console.log(sum(10,20));

//sum 화살표 함수 (x,y)=>{return x+y;} ()=>{}
const sum2=(x,y)=>{
    return x+y;
}

const sum2_1=(x,y)=>x+y;

console.log(sum2(30,54));

const print =function(){
    console.log("hi");
}

//()=>{}
const print2=()=>{
    console.log("hi");
};

const print2_1 = name => console.log(`${name}님 안녕하세요`);
console.log(print2_1("sally"));

const mul1=function(x,y){
    console.log(x*y);
}

const mul2=(x,y)=>{
    console.log(x*y);
};
console.log(mul2(4,6));