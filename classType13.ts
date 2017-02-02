// 表达式和循环


// 箭头表达式
/**
 * 用来声明匿名函数，消除传统匿名函数的this指针问题
 */

// 一行就这样写
var sum = (arg1, arg2) => arg1 + arg2;


// 多行就这样写
var sum1 = (arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
}


// 一个参数的情况
var sum2 = agra => {
    console.log(agra);
}

var myArray = [1,2,3,4,5,6];
console.log(myArray.filter(value => value%2 == 0));


function getStock(name:string){
    this.name = name;

    setInterval(() => {
        console.log("name is :" + this.name);
    }, 1000);
};

var stock = new getStock("IBM");