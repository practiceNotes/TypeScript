/**
 * Created by CJLEU on 2017/1/24.
 * 类的构造函数
 * 类的构造函数。就是一个类的构造方法，只有类被实例化的时候会被调用，而且只被调用这么一次，这个方问的叫做 "constructor"
 */
var Person = (function () {
    // 这个方在外部是不能访问的，
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eat = function () {
        console.log("haha");
        console.log(this.name);
    };
    return Person;
}());
var p1 = new Person("中国深圳");
p1.eat();
var p2 = new Person("中国贵州");
p2.eat();
