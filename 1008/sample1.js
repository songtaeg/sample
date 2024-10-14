function sum(x,y){
    console.log(x+y); 
}
function mul(x,y){
    console.log(x*y); 
}
function print(param){
    console.log(param);
}
function printFunc(param){
   param(1,6);
}
//print("안녕"); print(1243); print(true);

printFunc(sum); printFunc(mul);