/**
 * Created by CJLEU on 2017/1/24.
 *
 * 面向对象性
 *
 * 泛型(generic)
 *      参数化的类型，一般用来限制集合的内容
 *
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

    // 泛型(generic)
    /**
     *
     * @type {Array}
     *
     * 泛型 只能用来指定一个数组
     */
    let workers: Array <Person> = [];
        workers[0] = new Person("小明");
        workers[1] = new Employee("list", "2");
        // workers[2] = 2; // 这种就是错误的

    var e1 = new Employee("name", "1");
        e1.work();
