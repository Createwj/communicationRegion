## 字符串的扩展
[字符串的扩展](http://es6.ruanyifeng.com/#docs/number)
## ES6对函数的拓展
1.函数参数的默认值
ES6之前
```
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
```
参数设置默认值的话需要 手动在函数判断

ES6允许参数设置默认值
```
function log(x, y = 'World') {
  console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
```
**注意**
1. 参数不能再次在函数内部重新声明
2. 当参数有默认数值的话 不能有同名函数

#### 与解构赋值默认值结合使用
```
function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method);
}
fetch('http://example.com', {})
// "GET"
fetch('http://example.com')
// 报错
```

#### 2.rest参数
ES6 引入 rest 参数（形式为...变量名）
```
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}

add(2, 5, 3) // 10
```
#### 3.严格模式
```
// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // 报错
  doSomething({a, b}) {
    'use strict';
    // code
  }
};
```
#### 4.name属性
函数的name属性默认返回函数名称

#### 5.箭头函数
```
var f = v => v;
//等价于
var f = function (v){
    return v
}
```
如果函数不需要参数
```
var f = () => 5
//等价于
var f = function () { return 5 }

var a = (num1, numm2) => num1 + num2
//等价于
var a = function(num1, num2) => { return num1 + num2 }
```
箭头函数表达式

```
const isEven = n => n % 2 == 0
const square = n => n * n;
```
**箭头函数简化回调函数**
```
[1, 2, 3].map(function(x){
   console.log(x * x)
})
[1, 2, 3].map((x) => x * x)
```

**箭头函数注意事项**
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。






