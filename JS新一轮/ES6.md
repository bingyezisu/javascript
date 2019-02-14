#ES6

> ECMAScript（ECMA、ES）
>
> javascript 是ECMAScript 的一种

--------

### ES6新语法

**变量**

>var     可以重复定义，不能限制修改，没有块级作用域
>let       不能重复定义、变量、块级作用域
>const   不能重复定义、变量、块级作用域
>
>-----
>
>解构赋值
>
>1、左右两边必须一样；右边得是个东西
>2、必须定义和赋值同步完成

**函数**
``箭头函数``
>
>function (参数，参数){
>
>​	函数体
>
>}
>
>(参数，参数)=>{
>
>​	函数体
>
>}
>
>1、如果有且仅有1个参数，()可以省
>
>2、如果函数体只有一句话，而且是return，{}可以省
>
>*关于this
>
``默认参数``
>
>​（a=xx,b==x,c=xx）
>
``参数展开``
>1."三个点"的第一个用途：接收剩余参数
>function show(a,b,...名字)
>剩余参数必须在参数列表的最后
>
>2."三个点"的第二个用途：展开一个数组

**数组/json**
>数组-->5种
>+ map：映射 一个->一个
>+ reduce：汇总 一堆->一个
>+ filter：过滤
>+ forEach：遍历\
>+ from：变化
array.from([array-like])=>[x,x,x]
>
>JSON->2个变化
>
>+ 简写：名字和值一样的，可以省
>+ function可以不写


**字符串**
> 字符串模板：植入变量，任意折行
> ```javascript
> if(sNum.startsWith("135")){
>    alert("移动);
>}else{
>    alert("联通")
>}
>if(filename.endsWith("txt")){
>   alert("文本文件")
>}else{
>  alert("图片文件")  
>}
>```


**面向对象**

**Promise**

**generator**

**模块**