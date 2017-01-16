// Rest and Spread操作符
/**
 * 用来声明任意数量的方法参数
 *
 */
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
func1(1, 2, 3);
func1(7, 8, 9, 10);
/*
 1
 2
 3
 7
 8
 9
 10
 */
function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
/*var args = [1, 2];
func2(...args);

var args2 = [7, 8, 9, 10, 11];
func2(...args2);*/
