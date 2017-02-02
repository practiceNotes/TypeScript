/**
 * Created by CJLEU on 2017/1/24.
 *
 * interface 接口
 */
;
var Sheep = (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log("i eat grass");
    };
    return Sheep;
}());
// 实现一个 eat 方法
var Tige = (function () {
    function Tige() {
    }
    Tige.prototype.eat = function () {
        console.log("i eat meat");
    };
    return Tige;
}());
