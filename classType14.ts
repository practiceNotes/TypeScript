// 表达式和循环


// 箭头表达式
    /**
     * 用来声明匿名函数，消除传统匿名函数的this指针问题
     */


 // forEach();  for in 和 for of

    let myArray = [1,2,3,4];
    /*myArray.desc = "four number";*/

    myArray.forEach(value => console.log(value));


    for(let n in myArray){
        console.log(myArray[n]);
    }

    for(let n of "four number"){
        console.log(n);
    }