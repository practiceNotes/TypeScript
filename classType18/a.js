/**
 * Created by CJLEU on 2017/1/24.
 *
 * 模块 module
 *   一个文件就是一个模块
 *  模块有两个关键字
 *  export 导出
 *  import 导入
 *
 *
 *
 */
"use strict";
var porp2;
// export 对外暴露一个方法
function func1() {
}
exports.func1 = func1;
function func2() {
}
// export 对外暴露一个类
var Clazz1 = (function () {
    function Clazz1() {
    }
    return Clazz1;
}());
exports.Clazz1 = Clazz1;
var Clazz2 = (function () {
    function Clazz2() {
    }
    return Clazz2;
}());
