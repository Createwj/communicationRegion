### Symbol
#####产生环境背景
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你
使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），
新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性
的名字都是独一无二的就好了，*这样就从根本上防止属性名的冲突*。这就是 ES6 引入Symbol的原因。
- js六种数据类型
```
 undefined
 null
 Number\
 String
 Object
 Bollent
```
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型
```
let s1 = Symbol('foo');// 声明s1  Symbol变量

var s1 = 1
//报错
//VM288:1 Uncaught SyntaxError: Identifier 's1' has already been declared
  //  at <anonymous>:1:1

```

2.作为属性名Symbol
```
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```




