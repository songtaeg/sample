function test(name, age){
    console.log(`${name}님의 나이는 ${age} 입니다`);
};

const test2= function(name,age){
    console.log(name+"님의 나이는 "+age+" 입니다");
};

(function (name,age){
    console.log(`${name}님의 나이는 ${age} 입니다`);
}("박영희",34))

test('song',29);
test2('김철수',25);