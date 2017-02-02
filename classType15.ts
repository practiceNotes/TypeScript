/**
 * Created by CJLEU on 2017/1/23.
 * 面向对象特性
 *
 * 1. 3类(Class)
 *
 * 类是TypeScrpt的核心，使用TypeScript开发时，大部分代码都是写在类里面的。
 *
 * 这里会介绍类的定义，构造函数，以及类的继承
 */


//类的定义
/**
    class Person {

        name;

        eat(){
            console.log("im eating = " + this.name);
        }
    }

// 实例化，
    let p1 = new Person();
    p1.name = "batman";
    p1.eat();

    let p2 = new Person();
    p2.name = "superman";
    p2.eat();
*/

// public 访问控制符 默认都有的  这里都是公有的


/**
    class Person {

        public name;

        public eat(){
            console.log("im eating = " + this.name);
        }
    }

// 实例化，
    let p1 = new Person();
    p1.name = "batman";
    p1.eat();

    let p2 = new Person();
    p2.name = "superman";
    p2.eat();*/



// private 私有的 外部是不能被访问的
    /**class Person {

        private name;

        private eat(){
            console.log("im eating = " + name);
        }
    }

// 实例化，
    let p1 = new Person();
    p1.name = "batman";
    p1.eat();

    let p2 = new Person();
    p2.name = "superman";
    p2.eat();*/


// protected 受保护的 这只能类的内部进行访问，外部是不能被访问的
class Person{
    protected name;
    protected eat(){
        console.log(name);
    }
}

var p1 = new Person();
    /*
    p1.name = "batman";
    p1.eat();
    */

let p2 = new Person();
    /*
    p2.name = "supername";
    p2.eat();

    */
