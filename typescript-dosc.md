
#### 1. 安装TypeScript开发环境
```javascript
     // 01.TypeScript概念、语法和特性和介绍  
```
#### 2.学习TypeScript的好处


#### 3.安装TypeScript开发环境


#### 4. 前置知识
```javascript
     // 01. 理解ES5, ES6, JavaScript, TypeScript的概念和关系
    
    
     // 02. 有基础的JavaScript开发经验

```

#### 5. TypeScript的优势
```javascript

     // 01. 支持ES6规范
    
    
     // 02. 强大的IDE支持
    
     // 03. AngularJS2开发语言　
```


#### 6. 抢建TypeScript开发环境
```javascript

     // 01. 什么是compiler？ 为什么需要compiler?
        /**
         * compilerr 就是编译器，也就是把TypeScript转换成JavaScript代码      
         */
    
    
     // 02.使用在线compilerr开发
        /**
         * 网址：www.typescriptlang.org/play/index.html   
         *    
         *    
         *    
         */
    
     // 03. 案例
         // TypeScript
            class Greeter {
                greeting: string;
                constructor(message: string) {
                    this.greeting = message;
                }
                greet() {
                    return "Hello, " + this.greeting;
                }
            }
    
            let greeter = new Greeter("world");
    
            let button = document.createElement('button');
            button.textContent = "Say Hello";
            button.onclick = function() {
                alert(greeter.greet());
            }
    
            document.body.appendChild(button);
    
    
        // ES5
            var Greeter = (function () {
            function Greeter(message) {
                this.greeting = message;
            }
            Greeter.prototype.greet = function () {
                return "Hello, " + this.greeting;
            };
            return Greeter;
            }());
            var greeter = new Greeter("world");
            var button = document.createElement('button');
            button.textContent = "Say Hello";
            button.onclick = function () {
            alert(greeter.greet());
            };
            document.body.appendChild(button);
```


#### 7. 搭建TypeScript开发环境
```javascript

         // 01. 什么是compiler?
        
        
         // 02. 使用在线compiler开发
        
        
         // 03. 使用本地compiler开发
    
        /*
            // 查看 npm 版本
            $ npm --version
    
            // 全局安装typescript
            $ npm install -g typescript
    
            // 查看 typescript 版本
            $ tsc --version        
              Version 2.1.5
    
    
            // 创建一个 hello.ts
                export class hello{
    
                }
    
            // 编译 hello.ts文件
            $ tsc hello.ts
    
            // 编译出的结果
            "use strict";
            var Hello = (function () {
                function Hello() {
                }
                return Hello;
            }());
            exports.Hello = Hello;
```


#### 8. 字符串新特性
```javascript

     // 01. 多行字符串
         export class Hello{
    
         }
    
         结果
            
    
    
     // 02. 字符串模板, 就是在一个字符串里插入变量及方法
        // classType03
        let myname = "cheng jin";
        let getName = function(){
            return `呈琛 ${myname}ccd`;
        }
        console.log(`Hello ${myname}`);
        console.log(`Hello ${getName()}`);
        
        
        
        // div元素
        let oDiv = `<div>
            <span>${myname}</span>
            <span>${getName}</span>
            <div>xxx</div>
        </div>`
        
     // 03.自动拆分字符：当你使用一个字符串模板去调用一个方法的时候，字符串模板里面的表达式的值，会自动赋给这个自动调用方法中的参数
         function test(template, name, age){
             console.log(template);
             console.log(name);
             console.log(age);
         }
         var myname = "深 圳";
         var getAge = function(){
             return 18;
         };
         
         test `hello my name is ${myname}, i'm ${getAge()}`;
```


#### 9. 参数新特性
```javascript
        // 一. 参数类型：
        /*
            在参数名称后面使用的冒号来指定参数的类型        
        */  
        
          // 01. string 字符串类型，只能是字符串
              var myname:string = "呈琛";
              //myname = 13;
          
          // 02. any  可以赋值任意类型如：字符串也可以，数字也可以
              var alias:any = "xixi";
              alias = "13";
          
          // 03. number 数字类型，只能是数字，不能是字符串的
            var num:number = 123;
          
          // 04. boolean 判断类型
            var man:boolean = true;
          
          // 05. void 空类型，函数返回的类型，
              function test(name:string):string{
                  return "";
              };
              test("cc");
          
          
          // 06.
              class Person{
                  name:string;
                  age:number;
              };
              var sz:Person = new Person();
              sz.name = "张三";
              sz.age = 18;
              
              
        // 二. 默认参数：
            /**
             *
             * 在参数声明后面用等号指定参数的默认值
             */      
         
            
            // 01. 给参数默认值
                var myname:string="shanzheng";
           
            // 02. 给方法默认值
               function test(a:string, b:string, c:string="jojo"){
                   console.log(a);
                   console.log(b);
                   console.log(c);
               }
            // 调用这这个方法进行传参数
               test("xxx", "yyy", "zzz");
               test("xxx", "yyy");
               
              
        // 三. 可行参数：
            /**
             * 在方法的参数声明后面用问号来标明此参数为可选参数
             *
             */
            
            function test(a:string, b?:string, c:string = "jojo"){
                console.log(a);
                //console.log(b);
                console.log(b.length);
                console.log(c);
            };
            test("xxx");
            /*
             xxx
             undefined
             jojo
             */
            
```



#### 10. 函数新特性
```javascript
    // Rest and Spread操作符
    /**
     * 用来声明任意数量的方法参数
     *
     */ 
```

