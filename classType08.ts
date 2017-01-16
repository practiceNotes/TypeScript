// 02. 默认参数：
/**
 *
 * 在参数声明后面用等号指定参数的默认值
 */

// 01. 给参数默认值
var myname:string="shanzheng";

// 02. 给方法默认值
function test(a:string, b:string, c:string="jojo"){
    console.log(a);
    console.log(b);
    console.log(c);
}
// 调用这这个方法进行传参数
test("xxx", "yyy", "zzz");
test("xxx", "yyy");