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
> - 自执行函数中的this永远是window
> - 给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素

### 单例模式

1、对象数据类型的作用：把描述同一个实物（同一个对象）的属性和方法放在一个内存空间下，起到了分组的作用，这样不同事物之前的属性名即使相同也不会发生冲突->我们把这种分组编写代码的模式叫做 **`单例模式`**

```javascript
//在单例模式中我们把person1或者person2也叫做“命名空间”
var person1={
    name:"candy",
    age:28
}
var person2={
    name:"andy",
    age:30
}
```

2、单例模式是一种项目开发中经常使用的模式，因为项目中我们可以使用单例模式来进行我们的“模块化开发”

**`模块化开发 `**：对于一个相对来说比较大的项目，需要多个人协作开发的，我们一般情况下会根据当前项目的需求划分成几个功能版块，每个人负责一部分，同时开发，最后把每个人的代码合并

```javascript
//公共模块
var utils={
    select:function(){
        
    }
}
//页卡模块中的change->实现选项卡切换
var tabRender={
    change:function(){
        utils.select();//在自己的命名空间下调用其他的命名空间的方法
    }
}
//搜索模块change->搜索内容变化处理
var serchRender={
    change:function(){
        
    },
    clickEven:function(){
        this.change();//在自己的命名空间下调用其他的命名空间的方法
    }
    
}
```

### 工厂模式

1、单例模式虽然解决了分组的作用，但是不能 实现批量生产，属于手工作业模式，为了应对这种情况就催生了“工厂模式”；

> **`工厂模式`**：把实现同一件事情的相同代码放到一个函数中，以后如果想再实现这个功能，不需要重新的编写这些代码了，只需要执行当前的函数即可；我们把这种形式又称为 `函数的封装`
>
> 作用：`低耦合高内聚`->减少页面中的冗余代码，提高代码的重复利用率

```javascript
function createJsPerson(name,age){
    var obj={};
    obj.name=name;
    obj.age=age;
    obj.writeJs=function(){
        console.log("my name is "+this.name+",i can write js!");
    }
    return obj;
}
var p1=createJsPerson("andy",30);
p1.writeJS();
var p2=createJsPerson("candy",28);
p2.writeJS();
```

**`JS中不存在重载`**

> JS是一门轻量级的脚本”编程语言“（HTML+CSS不属于编程语言，属于标记语言）
>
> 所有的编程语言都是面向对象开发的->类的继承、封装、多态
>
> 继承：子类继承父类中的属性和方法
>
> 多态：当前方法的多种形态->后台语言中：多态包含重载和重写

```php
//后台中的重载
public void sum(int num1,int num2){
    
}
public void sum(String num1,int num2){
    
}
```

```javascript
function sum(num1,num2){
    
}
function sum(num1){
    
}
//js中不存在重载，方法名一样的话，后面的会把前面的覆盖掉，最后只保留一个
```

>JS中有一个操作类似重载的方法但是不是重载：我们可以根据传递参数的不一样，实现不同的功能
>
>重写：子类重写父类的方法

```javascript
function sum(num){
    if(typeOf num==="undefined"){
        return 0;
    }
    return num();
}
sum(100);
sum();
```

### 构造函数模式

```javascript
//构造函数模式的目的就是为了创建一个自定义类，并且创建这个类的实例
function CreateJsPerson(name,age){
    //浏览器默认创建的对象就是我们的实例p1->this
    this.name=name;
    this.age=age;
    this.writeJs=function(){
        console.log("my name is "+this.name+",i can write js");
    }
    //浏览器再把创建的实例默认的进行返回
}
var p1=new CreateJsPerson("candy",28);
p1.writeJs();

var res=CreateJsPerson("andy",30);
console.log(res);
/*
这样写不是构造函数执行而是普通的函数执行
由于没有写return 所以 res=undefined
并且CreateJsPerson这个方法中的this是window
*/
var p2=new CreateJsPerson("candice",29);
p2.writeJs()；
```

**1、构造函数模式和工厂模式的区别？**

1）执行的时候

- 普通函数执行->createJsPerson();
- 构造函数模式->new CreateJsPerson() 通过new执行后，我们的CreateJsPerson就是一个类了；而函数执行的返回值（p1）就是CreateJsPerson这个类的一个实例

2）在函数代码执行的时候

- 相同点：都是形成一个私有的作用域，然后 形参赋值->预解释->代码从上到下执行（类和普通函数一样，它也有普通函数的一面）
- 不同点：在代码执行之前，构造函数模式不用自己在手动的创建对象了，浏览器会默认的创建一个对象数据类型的值（这个对象其实就是我们当前类的一个实例）；接下来代码从上到下执行，以当前的实例为执行的主体（this代表的就是当前的实例），然后分别把属性名和属性值赋值给当前的实例，最后浏览器会默认的把创建的实例返回

**2、构造函数解析**

1）JS中所有的类都是函数数据类型的，它通过new执行变成了一个类，但是它本身也是一个普通的函数；JS中所有的实例都是对象数据类型

2）在构造函数模式中，类中（函数体中）出现的this.xxx=xxx中的this是当前类的一个实例

3）p1和p2都是CreateJsPerson这个类的实例，所以都拥有writeJs这个方法，但是不同实例之间的方法是不一样的，在类中给实例增加的属性（this.xxx=xxx）属于当前实例的私有属性，实例和实例之间是单独的个体，所以私有的属性之间是不相等的

```javascript
console.log(p1.writeJs===p2.writeJs);//false
```

**3、构造函数相关知识点**

```javascript
function Fn(){
    this.x=100;
    this.getX=function(){
        console.log(this.x);
    }
}
var f1=new Fn;
f1.getX();//->方法中的this是f1->100
var ss=f1.getX;
ss();//方法中的this是window->undefined
```

- 在构造函数模式中的new Fn执行，如果Fn不需要传递参数的话，后面的小括号可以省略
- this的问题：在类中出现的this.xxx=xxx中的this都是当前类的实例，而某一个属性值（方法），方法中的this需要看方法执行的时候，前面是否有“.”才能知道this是谁

```javascript
function Fn(){
    var num=10;
    this.x=100;
    this.getX=function(){
        console.log(this.x);
    }
}
var f1=new Fn;
console.log(f1.num);//=>undefined
```

- 类有普通函数的一面，当函数执行的时候，var num 其实只是当前形成的私有作用域中的私有变量而已，它和我们f1这个实例没有任何的关系，只有this.xxx=xxx才相当于给f1这个实例增加私有的属性和方法，才和我们的f1有关系

```javascript
function Fn(){
    this.x=100;
    this.getX=function(){
        console.log(this.x);
    }
    return {name:"candy"};
}
var f1=new Fn;
console.log(f1);//{name:"candy"}
```

- 在构造函数模式中，浏览器会默认的把我们的实例返回（返回的是一个对象数据类型的值）；如果我们自己手动写了return返回：
  - 返回的是一个基本数据类型的值，当前的实例是不变的，例如：return 100；我们的f1还是当前fn类的实例
  - 返回的是一个引用数据类型的值，当前的实例会被自己返回的值给替换掉，例如：return {name:"candy"},f1就不再是fn的实例了，而是对象{name:"candy"}

```javascript
function Fn(){
    this.x=100;
    this.getX=function(){
        console.log(this.x);
    }
}
var f1=new Fn;
console.log(f1 instanceof Fn);//true
console.log(f1 instanceof Array);//false
console.log(f1 instanceof Object);//true
//因为所有的实例都是对象数据类型的，而每一个对象数据类型都是Object这个内置类的一个实例，所以f1也是它的一个实例
```

- 检测某一个实例是否属于这个类->`instanceof`

```javascript
function Fn(){
    this.x=100;
    this.getX=function(){
        console.log(this.x);
    }
}
var f1=new Fn;
var f1=new Fn;
console.log(f1.getX===f2.getX);//false
console.log("getX" in f1);//true
console.log(f1.hasOwnProperty("getX"));//ture
```

- f1和f2都是Fn这个类的一个实例，都拥有x和getX这两个属性，但是这两个属性是各自的私有属性

- in：检测某一个属性是否属于这个对象（attr in object），不管是私有的属性还是公有的属性，只要存在，用in来检测都是true

- `hasOwnProperty`：用来检测某个属性是否为这个对象的私有属性，这个方法只能检测私有的属性

- 检测某一个属性是否为该对象的“公有属性”->hasPubProperty

  ```javascript
  function hasPubProperty(obj,attr){
      return (attr in obj) && !obj.hasOwnProperty(attr);
  }
  ```

  



