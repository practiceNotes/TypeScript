
/**
 * Created by CJLEU on 2017/1/24.
 *
 * interface 接口
 */

interface Anima{
    // 动物都用一个方法 就是 吃
    eat();
};

class Sheep implements Anima{
    eat() {
        console.log("i eat grass");
    }
}

// 实现一个 eat 方法
class Tige implements Anima{
    eat(){
        console.log("i eat meat");
    }
}
