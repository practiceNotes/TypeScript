// 01. string 字符串类型，只能是字符串
var myname:string = "呈琛";
//myname = 13;



// 02. any  可以赋值任意类型如：字符串也可以，数字也可以
var alias:any = "xixi";
alias = "13";

// 03. number 数字类型，只能是数字，不能是字符串的
var num:number = 123;

// 04. boolean 判断类型
var man:boolean = true;

// 05. void 空类型，函数返回的类型，
function test(name:string):string{
    return "";
};
test("cc");
