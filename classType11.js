// Rest and Spread 操作符
/**
 *  用来声明任意数量的方法参数
 */
function getStock() {
    return {
        code: "IBM",
        price: 100
    };
}
// ES5
/* var stock = getStock();
 var code = stock.code;
 var price = stock.price;*/
// ES6
var _a = getStock(), code = _a.code, price = _a.price;
var _b = getStock(), codex = _b.code, pricex = _b.price;
console.log(code, price);
console.log(codex, pricex);
/* 结果：
 IBM 100
 */
function getStock1() {
    return {
        code: "IBM",
        price: {
            price1: 200,
            price2: 400
        }
    };
}
var _c = getStock1(), codes = _c.code, _d = _c.price, price1 = _d.price1, price2 = _d.price2;
console.log(codes);
console.log(price1);
console.log(price2);
function getStock2() {
    return {
        code: "IBM",
        price: {
            pricea: 200,
            priceb: 400
        },
        aaa: "xixi",
        bbb: "haha"
    };
}
var _e = getStock2(), codea = _e.code, _f = _e.price, pricea = _f.pricea, priceb = _f.priceb;
console.log(codea);
console.log(pricea);
console.log(priceb);
// 通过数组表达式去取值
var array1 = [1, 2, 3, 4, 5, 6];
var number1 = array1[0], number2 = array1[3];
console.log(number1);
console.log(number2);
/*
    1
    4
 */
function doSomething(_a) {
    var number1 = _a[0], number2 = _a[1], others = _a.slice(2);
    console.log(number1);
    console.log(number2);
    console.log(others);
}
;
doSomething(array1);
var num1 = array1[0], num2 = array1[1], others = array1.slice(2);
console.log(num1);
console.log(num2);
console.log(others);
/*
 1
 2
 [ 3, 4, 5, 6 ]
 */
// generator 函数
/**
 *  控制函数的执行过程， 手工暂停和恢复代码执行
 */
// destructuring 析构表达式
/**
 * 通过表达式将对象或数组拆解成任意数量的变量
 */
