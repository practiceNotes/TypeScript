/**
 * Created by CJLEU on 2017/1/24.
 *
 * 类的继承
 * extends 用来声明类的继承关系
 * super   用来调用父类的构造函数和父类的方法
 */

class Person{
    constructor(public name:string){
        console.log("haha");

    };

    eat(){
        console.log(this.name);
        console.log("im eatim");
    }
}

let p1 = new Person("中国深圳");
p1.eat();

let p2 = new Person("中国贵州");
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
    class Employee extends Person{
        constructor(name:string, code:string){
            super(name);
            console.log("xixi");
            this.code = code;
        }

        code:string;
        work(){
            super.eat();
            this.doWork();
        }

        private  doWork(){
            console.log("im working");
        }


    }
    var e1 = new Employee("name", "1");
    e1.work();
