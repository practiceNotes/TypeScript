/**
 * Created by CJLEU on 2017/1/24.
 *
 * 类的继承
 * extends 用来声明类的继承关系
 * super   用来调用父类的构造函数和父类的方法
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log("haha");
    }
    ;
    Person.prototype.eat = function () {
        console.log(this.name);
        console.log("im eatim");
    };
    return Person;
}());
var p1 = new Person("中国深圳");
p1.eat();
var p2 = new Person("中国贵州");
p2.eat();
// extends 用来声明一种继承关系
/*class Employee extends Person{
    code:string;
    work(){

    }

}
var e1 = new Employee("name");
e1.eat();
e1.work();*/
// super 用来调用父类的构造函数和父类的方法
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        _super.call(this, name);
        console.log("xixi");
        this.code = code;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        console.log("im working");
    };
    return Employee;
}(Person));
var e1 = new Employee("name", "1");
e1.work();
