### 1.set
ES6提供新的数据类型Set
**它类似于数组，但是成员的值都是唯一的，没有重复的值。**
```
const s = new Set();

[2, 3, 1, 4, 5, 2, 3].forEach(x => s.add(x))

for(let i of s){
    console.log(i)
}
// 2 3 1 4 5
```
上面代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

**Set属性**
size类似于数组length
Set.prototype.constructor：构造函数，默认就是Set函数。
**Set操作方法**
add(value)：添加某个值，返回Set结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。

**Array.from方法可以将 Set 结构转为数组。**
数组去重新方法
```
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
```
#### 遍历
>keys()：返回键名的遍历器
 values()：返回键值的遍历器
 entries()：返回键值对的遍历器
 forEach()：使用回调函数遍历每个成员

### 2.WeakSet
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

1.WeakSet类型的成员只能是对象，而不能是其他类型
```
const ws = new WeakSet();
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
```
2.WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用

**小结**
由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。
**不可遍历**

