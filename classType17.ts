/**
 * Created by CJLEU on 2017/1/24.
 *  面向对象特性
 *
 *  接口(interface)
 *
 *      interface 接口是用来建立某种代码约定，使用其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
 */


// interface 用来声明一个接口
    interface IPerson{
        name:string;
        age:number;

    }

    // 声明一个类
        class Person{
            constructor(public config:IPerson){

            }
        }

    // new 一个对象
        let p1 = new Person({
            name:"小明",
            age:8
        });

        console.log(p1.config.name);
        console.log(p1.config.age);