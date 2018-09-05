
/**
 * 块级作用域
 */
var name = '陈二狗不是东西'
{
    let name = '福斯集'
}

/**
 * 字符串模板
 */
console.log(`字符串模板${name}`);

/**
 * 函数 默认参数 ，箭头函数 ，展开函数
 */
{
    let fn = (x = '陈二狗忘恩负义') => {
        console.log(x);
    }
    fn();
    fn('陈二狗')
    let fn2 = (x, y) => {
        console.log(x * y);
    }
    let arr = [1, 2]
    fn2(...arr)
}
/**
 * 对象扩展 Object.keys ,values ,entries  
 * 对象简写
 * 计算属性
 * 展开运算符
 */

{
    let people = { name: '陈二狗', age: 40, sex: '女', describe: '忘恩负义' }
    console.log(Object.keys(people));
    console.log(Object.values(people));
    console.log(Object.entries(people));
    const name = 'hah'
    let ergou = {
        fn() {
            console.log('我陈二狗最牛b');
        },
        name,
        [name]: name
    }
    console.log(ergou);
    let ergou1 = { name: '陈二狗' }
    let ergou2 = { age: 40 }
    console.log({ ...ergou1, ...ergou2 });
}

/**
 * 数组解构
 * 对象解构
 */
{
    let [arr1, arr2] = [2, 4]
    console.log(arr2);
    let { name, age } = { name: '陈二狗', age: 40 }
    console.log(name);

}

/**
 * 类 
 * 语法糖prototy
 * extends
 * constructor
 */

{
    class ergou {
        constructor() {
            this.name = '陈二狗'
        }
        fn() {
            console.log(this.name);
        }
    }
    let app = new ergou()
    app.fn()

}

/**
 * 数组
 * 循环
 * 去重
 */
{
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 4]
    arr.map((x) => console.log(x))
    console.log([... new Set(arr)]);
}