# JS进阶

## 第一章作用域深入和面向对象

### 预解释

**1、全局作用域：当浏览器加载HTML页面的时候，提供了一个全局js代码执行的环境**

**2、预解释（变量提升）**

在当前的作用域中，js代码执行之前，浏览器首先会默认的吧所有带有var和function的进行提前声明或定义

1）理解声明和定义

> var num=12；
>
> 声明(declare) : var num;->告诉浏览器在全局作用域中有一个num的变量了
>
> 如果一个变量只是声明但是还没有赋值，默认值是undefined
>
> 定义（defined）：num=12->给我们的变量进行赋值

2）对于带var和function关键字的再预解释的时候操作是不一样的

> var ->在预解释的时候只是提前声明不定义
>
> function->在预解释的时候提前声明和定义都完成了

3）预解释只发生在当前的作用域下，例如：开始只对window下的进行预解释，只有在函数执行的时候才会对函数中的进行预解释

**3、JS中内存的分类**

`栈内存`：用来提供一个供js代码执行的环境->作用域

`堆内存`：用来存储引用数据类型的值->对象存储的是属性名和属性值，函数存储的是代码字符串。

**4、如果区分私有变量和全局变量？**

1）在全局作用域下声明（预解释的时候）的变量是全局变量

2）在私有作用域中声明的变量和函数的形参都是私有变量

> 在私有作用域中，我们代码执行的时候遇到了一个变量，首先我们确定它是否是私有变量，如果是私有变量，那么和外面没有任何的关系，如果不是使用的，则往当前作用域的上级作用域进行查处，如果上级作用域也没有则继续查找，一直找到window为止...**`作用域链`**

**6、当函数执行的时候（直接目的：让函数体中的代码执行），首先会形成一个新的私有作用域，然后按照如下的步骤执行：**

>- 如果有形参，先给形参赋值
>- 进行私有作用域的预解释
>- 私有作用域中的代码从上到下的执行
>
>函数形成一个姓的私有的作用域保护了里面的私有变量不受外界的干扰（外面修改不了私有的，私有的也修改不了外面的）,我们管这种机制叫做`闭包`

**7、在全局作用域中，带var和不带var的关系**

区别：带var的可以进行预解释，所以在赋值的前面执行不会报错；不带var的是不能进行预解释的，在前面执行会报错

**8、预解释是毫无节操的一种机制**

>1）预解释的时候不管你的条件是否成立，都要把带var的进行提前声明

```javascript
if(!("num") in window){
    var num=12;
}
console.log(num);
```

> 2）预解释的时候只预解释“=”左边的，右边的是值，不参与预解释
>
> 匿名函数之函数表达式：把函数定义的部分但当做一个值赋值给我们的变量/元素的某个事件

```javascript
//window下的预解释：var fn；
fn();//Uncaught TypeError: fn is not a function
var fn=function(){
    console.log("ok");
}
```

> 3）执行函数定义的那个function在全局作用域下不进行预解释，当前代码执行到这个位置的时候定义和执行一起完成了
>
> 自执行函数：定义和执行一起完成了

```javascript
(function(){})(100);
```

> 4）函数体中return下面的代码虽然不再执行了，但是需要进行预解释；return后面跟着的都是我们返回的值，所以不进行预解释

```javascript
function fn(){
    console.log(num);
    retrun function(){
        
    };
    var num=100;
}
fn();//undefined;
```

> 5）在预解释的时候，如果名字已经声明过了，不需要重新的声明，但是需要重新的赋值；（在JS中如果变量的名字和函数的名字重复了，也算冲突了）

```javascript
var fn=13;
function fn(){
    console.log("ok");
}
console.log(fn);//13
//预解释的时候先预解释var fn；function fn{console.log("ok")}
//然后 fn=13->给fn赋值
//最后控制台输出的是13
```

```javascript
fn();
function fn(){console.log(1)};
fn();
var fn=10;
fn();
function fn(){console.log(2)}
fn();
//window 预解释：
/*1）声明+定义 fn=xxxfff000；
	声明var fn（不需要重新声明）
    声明(不重复进行)+定义 fn=xxxfff111；
    预解释完成后此时的fn变量指向的是堆内存地址是xxxfff111
    即：存储“console.log（2）”代码字符串的堆内存空间
  2）代码由上到下执行
  	fn()//2
  	fn();//2
  	fn=10;
  	fn();//Error:fn is not a function
  	js代码出错，在没有任何特殊处理的情况下后面的代码不执行
 */
```

**9、如果查找当前作用域的上一级作用域？**

看当前函数是在那个作用域下定义的，那么他的上级作用域就是谁->和函数在哪执行没有任何关系

### 内存释放和作用域销毁

`堆内存释放`

> 对象数据类型或者函数数据类型在定义的时候首先都会开辟一个堆内存，堆内存有一个引用的地址，如果外面有变量等知道这个地址，我们就说这个内存被占用了，就不能销毁
>
> 我们如果想要堆内存释放/销毁，只需要把所有引用他的变量赋值为null即可，如果当前的堆内存没有任何东西被占用，那么浏览器会在空闲的时候把他销毁

```javascript
var obj1={name:"candy"}
var obj2=obj1;
obj1=null;
obj2=null;
```

`栈内存的销毁`

> 1）全局作用域只有当前页面关闭的时候全局作用域才会被销毁
>
> 2）私有作用域（只有函数执行才会产生私有作用域） 
>
> 一般情况下，函数执行会形成一个新的私有的作用域，当私有作用域中的代码执行完成后，我们当前作用域都会主动的进行释放和销毁
>
> 但是还是存在特殊情况的：
>
> 当前私有作用域中的部分被作用域以外的东西占用了，那么当前的这个作用域就不能销毁了
>
> - 函数执行返回了一个引用数据类型的值，并且在函数的外面被一个其他的东西接收了，这种情况下一般形成的私有作用域都不会销毁
> - 在一个私有作用域中给DOM元素的事件绑定方法，一般情况下我们的使用作用域都不能销毁
> - 下述情况不能立即销毁：fn返回的函数没有被其他的东西占用，但是还需要执行一次，所以暂时不销毁，当返回的值执行完成后，浏览器会在空闲的时候把他销毁

```javascript
function fn(){
    var num=100;
    return function(){
        
    }
}
var f=fn()；//fn执行形成的这个私有作用域就不能被销毁
```

```javascript
var oDiv=document.getElementById("div1");
~function(){
    oDiv.onclick=function(){
        
    }
}()//当前自执行函数形成的这个使用作用域也不能销毁
```

```javascript
function fn(){
    var num=100;
    return function(){
        
    }
}
fn()();//首先执行fn，返回一个小函数对应的内存地址，然后紧接着让返回的小函数执行
```

### this

> 我们在js中主要研究的都是函数中的this
>
> JS中this代码的是当前行为执行的主体；JS中的context代表的是当前行为执行的环境（区域）
>
> this是谁和函数在哪定义的和在哪执行的都没有任何的关系*

**如何区分this？**

> - 函数执行，首先看函数名前面是否有“.”，有的话 “.”前面是谁this就是谁，没有的话就是window
>
> - 自执行函数中的this永远是window
>
> - 给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素
>
>   

