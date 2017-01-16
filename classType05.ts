// 03.自动拆分字符：当你使用一个字符串模板去调用一个方法的时候，字符串模板里面的表达式的值，会自动赋给这个自动调用方法中的参数

function test(template, name, age){
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "深 圳";
var getAge = function(){
    return 18;
};

test `hello my name is ${myname}, i'm ${getAge()}`;