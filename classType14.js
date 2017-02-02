// 表达式和循环
// 箭头表达式
/**
 * 用来声明匿名函数，消除传统匿名函数的this指针问题
 */
// forEach();  for in 和 for of
var myArray = [1, 2, 3, 4];
/*myArray.desc = "four number";*/
myArray.forEach(function (value) { return console.log(value); });
for (var n in myArray) {
    console.log(myArray[n]);
}
for (var _i = 0, _a = "four number"; _i < _a.length; _i++) {
    var n = _a[_i];
    console.log(n);
}
