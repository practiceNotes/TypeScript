/**
 * Created by CJLEU on 2017/1/24.
 *  面向对象特性
 *
 *  接口(interface)
 *
 *      interface 接口是用来建立某种代码约定，使用其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
 */
// 声明一个类
var Person = (function () {
    function Person(config) {
        this.config = config;
    }
    return Person;
}());
// new 一个对象
var p1 = new Person({
    name: "小明",
    age: 8
});
console.log(p1.config.name);
console.log(p1.config.age);
