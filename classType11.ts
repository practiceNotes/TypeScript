// Rest and Spread 操作符
    /**
     *  用来声明任意数量的方法参数
     */

    function getStock(){
        return {
            code:"IBM",
            price:100
        }
    }

    // ES5
   /* var stock = getStock();
    var code = stock.code;
    var price = stock.price;*/

    // ES6
    let {code, price} = getStock();
    let {code:codex, price:pricex} = getStock();
    console.log(code, price);
    console.log(codex, pricex);

    /* 结果：
     IBM 100
     */


    function getStock1(){
        return {
            code:"IBM",
            price:{
                price1:200,
                price2:400
            }
        }
    }

    let {code: codes, price: {price1, price2}} = getStock1();
    console.log(codes);

    console.log(price1);
    console.log(price2);


    function getStock2(){
        return {
            code:"IBM",
            price:{
                pricea:200,
                priceb:400
            },
            aaa:"xixi",
            bbb:"haha"
        }
    }

    let {code: codea, price: {pricea, priceb}} = getStock2();
    console.log(codea);

    console.log(pricea);
    console.log(priceb);

    // 通过数组表达式去取值
    let array1 = [1,2,3,4,5,6];
    let [number1, , , number2] = array1;
    console.log(number1);
    console.log(number2);
    /*
        1
        4
     */

    function doSomething([number1, number2, ...others]){
        console.log(number1);
        console.log(number2);
        console.log(others);
    };
    doSomething(array1);



    let [num1, num2, ...others] = array1;
    console.log(num1);
    console.log(num2);
    console.log(others);
    /*
     1
     2
     [ 3, 4, 5, 6 ]
     */




// generator 函数
    /**
     *  控制函数的执行过程， 手工暂停和恢复代码执行
     */


// destructuring 析构表达式
    /**
     * 通过表达式将对象或数组拆解成任意数量的变量
     */
