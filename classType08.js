// 02. 默认参数：
/**
 *
 * 在参数声明后面用等号指定参数的默认值
 */
// 01. 给参数默认值
var myname = "shanzheng";
// 02. 给方法默认值
function test(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
// 调用这这个方法进行传参数
test("xxx", "yyy", "zzz");
test("xxx", "yyy");
