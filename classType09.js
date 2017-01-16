// 三. 可行参数：
/**
 * 在方法的参数声明后面用问号来标明此参数为可选参数
 * 只要是可选的，就在参数的属性里加一个?号
 * 如：b?:string
 *
 */
function test(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    //console.log(b);
    console.log(b.length);
    console.log(c);
}
;
test("xxx");
/*
 xxx
 undefined
 jojo
 */ 
