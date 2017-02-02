// 表达式和循环
// 箭头表达式
/**
 * 用来声明匿名函数，消除传统匿名函数的this指针问题
 */
// 一行就这样写
var sum = function (arg1, arg2) { return arg1 + arg2; };
// 多行就这样写
var sum1 = function (arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
};
// 一个参数的情况
var sum2 = function (agra) {
    console.log(agra);
};
var myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray.filter(function (value) { return value % 2 == 0; }));
function getStock(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log("name is :" + _this.name);
    }, 1000);
}
;
var stock = new getStock("IBM");
