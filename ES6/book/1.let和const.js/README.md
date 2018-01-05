## let基本用法
ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，
**只在let命令所在的代码块内有效。**

```
{
  let a = 10;
  var b = 1;
}
console.log(a)
console.log(b)
```
a输出  ReferenceError: a is not defined.
b正常输出  1

#### 应用
```
for (let i = 0; i < 10; i++) {
  // ...
}
console.log(i); //ReferenceError: i is not defined
```
上面代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。
**如果是var声明 输出10**

### 注意
```
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
上面代码中，**变量i是var命令声明的，在全局范围内都有效，
所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，
而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。**
也就是说，**所有数组a的成员里面的i，指向的都是同一个i，**导致运行时输出的是最后一轮的i的值，也就是10。
```
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```
上面代码中，变量i是let声明的，**当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量**，所以最后输出的是6。
你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？
这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

### 注意
for循环还有一个特别之处，就是**设置循环变量的那部分是一个父作用域**，而循环体内部是一个单独的子作用域。

for循环批量绑定事件就不会报错
```
  var arr = getId('a')

    for (let i = 0; i <= arr.length; i++) { // 使用let声明不需要闭包
      arr[i].onclick=function(){
          console.log(arr[i])
        }
//      arr[i].addEventListener('click', function(){
//          console.log(arr[i])
//        })
    }

//    for (var i = 0; i <= arr.length; i++) {  // 使用var声明需要使用闭包功能才正常
//      arr[i].onclick=(function(i){
//          return function(){console.log(arr[i])}
//        })(i)
//    }

function getId(name){
    return document.getElementsByTagName(name)
}
```

#### let不存在变量提升
```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
#### 暂时性死区
ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
ES6 规定暂时性死区和let、const语句不出现变量提升

#### 不允许重复声明
let不允许在相同作用域内，重复声明同一个变量。

#### ES6 的块级作用域
```
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
上面的函数有两个代码块，都声明了变量n，运行后输出5。
这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是10。

## const基本用法
const声明一个只读的常量。一旦声明，常量的值就不能改变。
- 对于const来说，只声明不赋值，就会报错
- const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
- const的作用域与let命令相同：只在声明所在的块级作用域内有效。

**const本质**
const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
