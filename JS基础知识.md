# JS基础知识（一）

## 前端开发常用的浏览器

- 谷歌浏览器（chrome）：Webkit内核（v8引擎）
- 火狐浏览器（firefox）：Gecko内核
- 欧朋浏览器（opera）：Presto内核
- IE浏览器：Trident内核

**浏览器内核**：

> 作为前端开发，我们会使用HTML/CSS/JS编写代码，编写代码的时候要遵循一些规范（W3C）
>
> 浏览器开发商开发的浏览器，目的就是为了按照W3C的规范，识别出开发者编写的代码，并且在页面中绘制出开发者预想的页面和效果（GPU:显卡），我们把浏览器中识别代码绘制页面的东西称为浏览器的内核和渲染引擎。

## JS的引入方式：

- 行内式

  ```html
  <div onclick="alert(1)"></div>
  ```

- 嵌入式

  ```html
  <script>
      window.onload=function(){
          var num=0;
      }
  </script>
  ```

- 外链式

  ```html
  <script src="script.js"></script>
  ```

### JS中常用的输出方式

> ###js中提供的浏览器弹框
>
> 1、alert:在浏览器中弹出一个提示框（提供确定按钮，点击确定弹框消失）；使用alert弹框提示信息，提示的内容最后都会被转换为字符串输出（调用了toString这个方法）
>
> ```javascript	
> alert({name:"candy"});//=>"[object object]"
> alert([12,13]);//=>"12,13"
> alert(1+1);//=>"2"
> 
> ```
>
> 2、confirm：在alert基础上增加了让用户选择性的操作，（提供两个按钮：确定和取消）。当用户点击的是确定按钮的时候我们接收的是true，当用户点击的是取消按钮的时候我们接收的是false，此后我们可以根据接收的结果做不同的处理即可
>
> 3、prompt：在confirm上的基础上增加了让用户输入的效果；用户点击取消按钮我们获取到的结果是null;如果用户点击的是确定按钮，我们将会获取到用户输入的内容（如果用户没有输入任何内容我们获取的结果是空字符串）
>
> **注**：真实项目中，尤其是需要样式精美的网站中，我们的提示框一般都是自己封装插件和组件来实现，不会用内置的（使用原生JS封装模态框组件）
>
> ### 控制台输出
>
> 方便开发员进行调试的；F12（FN+12）打开浏览器的控制台
>
> **console.log** :在控制台输出，优势不会转换数据类型，输出什么格式的数据都可以
>
> **console.dir**：比LOG输出的更加详细一些
>
> **console,table**：把JSON数据展示称为一个表格
>
> ...

## JavaScript

> **ECMAScript(ES)**：规定了js的一些基础核心的知识（变量、数据类型、语法规范、操作语句等）
>
> **DOM**：document object model 文档对象模型，里面提供了一些属性和方法，可以让我们操作页面中的元素
>
> **BOM**：browser object model 浏览器对象模型，里面提供了一些属性和方法，可以让我们操作浏览器

### 变量和常量

> 变量：值是可以变的
>
> 常量：值是不可变得

```javascript
//=>JS中定义变量的方式
//var 变量名 = 值；(ES6中定义变量使用let)
var num=12;
var str="candy";

//=>JAVA等后台语言定义变量比较严谨，JS比较松散
//int num=12;
//float num=12.5;
//double num=3.1415926;

console.log(num);//=>12 变量其实只是一个无意义的名字 它所代表的意义都是其存储的那个值

num=13；//=>让原有的num变量存储的值修改为13（变量只能代表一个值）
```

```javascript
//=>任何一个具体的数据值都是常量，例如12就是一个常量

//=>和变量类似，我们设置一个常量（也是一个名字），给其存储一个值，但是这个存储的值不能修改
const num=12；//=>定义一个常量num,给他存储了12（const是ES6新增的）
num=13；//=>Uncaught TypeError: Assignment to constant variable.常量存储的值是不能修改的。
```

----------------------

### JS中的命名规范

1、JS中严格区分大小写

```javascript
var text="candy";
var Text="daisy";
console.log(text);//=>"candy" text和Text是两个变量
```

2、遵循国际命名规则 `驼峰命名法`

> 第一个单词首字母小写，其余每一个有意的单词首字母大写

```javascript
var studentInfo;

//命名使用英文单词，不要使用拼音
//不是所有单词都能简写，我们需要保证大家看到名字后知道所代表的意思

/***

info:information 信息
init:initialization 初始化
add/insert/creat:增加创建插入
remove/rm/clear/del/delete:删除
update：修改
get/query/select:查询获取

***/
```

3、命名的时候可以使用$、_ 、数字 、字母，但是数组不能作为名字的第一位

```javascript
var student_info;
var $xxx;//=>一般都是应用JQ获取到的值
var _xxx;//=>一般这样的情况代表变量是一个全局或者公用的变量
```

4、JS中很多的词都是有特殊含义的，我们管这些词叫做`关键字`；现在没有特殊含义，以后可能会作为关键词的，我们叫做`保留字`；而关键字和保留字都不可以随便用来命名

![微信截图_20180625101548](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180625101548.png)

------------

### JS中的数据类型

> - 基本数据类型（值类型）
>   + number：数字
>   + string：字符串
>   + boolean：布尔
>   + null：空对象指针
>   + undefined：未定义
> - 引用数据类型
>   + **object**对象数据类型
>     + {}普通对象
>     + []数组
>     + /^$/正则
>     + ...
>   + **function** 函数数据类型

```javascript
12 12.5 -12.5 0
"candy" 'daisy'=>单双引号包裹起来的都是字符串（单双引号没有区别）
true false=>布尔类型：只有两个值
null 
undefined

{name:"candy",age"28"}
[12,23,34]
/^-?(\d|([1-9]\d+))(\.\d+)?$/
function fn(){}              
```

这么多数据类型JS如何的去检测呢？

- typeof ：检测数据类型的运算符
- instanceof ：检测某个实例的构造器
- constructor：获取当前实例的构造器
- Object.prototype.toString.call：获取当前实例的所有类信息

**`typeof`**

> 使用typeof检测返回的是一个字符串，字符串中包含的内容证明了值是属于什么类型的
>
> [局限性]
>
> 1、typeof null不是“null”而是object：因为null虽让是单独的一个数据类型，但是它原本的意思是空对象指针，浏览器使用typeof检测的时候会把他按照对象来检测
>
> 2、使用typeof 无法具体细分出到底是数组还是正则，因为返回的结果都是”object“

```javascript
typeof 12;//=>"number"
var num=13;
typeof num;//=>"number"
```

腾讯的面试题：

```javascript
console.log(typeof typeof []);//=>"string"
```

### 布尔

**`Boolean`**

> 把其它数据类型的值转换为布尔值
>
> 只有`0、NaN、空字符串、null、undefind`这五个数据转换为布尔类型的false，其余都会变为true

**`!`**

> !=：不等于
>
> 叹号在js中还有一个作用：`取反`，先把值转换为布尔类型，然后在去取反

**`!!`**

> 在一个叹号取反的基础上在取反，取两次反相当于没有做操作，但是却已经把其他类型值转换为布尔类型了，和Boolean是相同的效果

### 字符串

> 在JS中单引号和双引号包起来的都是字符串

```javascript
12->number
'12'->string
'[12,13]'->string
```

常用方法：

charAt charCodeAt

substr substring slice

toUpperCase toLowerCase

indexOf lastIndexof

split

replace

match

...

-------

### number数字

> JS中多增加了一个number类型的数据`NaN`
>
> typeof NaN ->"number"

**`NaN`**

> not a number：不是一个数，但是属于number类型
>
> NaN==NaN：false，NaN和任何其它值都不相等

**`isNaN()`**

> 用来检测当前这个值是否是非有效数字，如果不是有效数字检测的结果是true，反之是有效数字则为false

```javascript
isNaN(0);//->false
isNaN(NaN);//->true
isNaN("12");//->false 当我们使用isNaN检测值的时候，检测的值不是number类型的，浏览器会默认的把值先转换为number类型，然后再去检测

isNaN([]);//false 先运行Number()方法把[]转换成0 然后在判断isNaN，零为有效数字，所以是false
```

**`Number()`**

> 把其它数据类型值转化为number类型的值

```javascript
Number("12")；//=>12
Number("12px");//=>NaN 在使用Number转换的时候只要字符串中出现任何一个非有效数字字符，最后的结果都是NaN
Number(true);//=>1
Number(false);//=>0

Number(null);//=>0
Number(undefined);//=>NaN

Number([]);//=>0 把引用数据类型转换为number，首先需要把引用数据类型转为字符串（toString），再把number即可 例如[]=>"" ""=>0
Number([12]);//=>[12]=>"12" "12"=>12
Number([12,13]);//=>[12,13]=>"12,23"=>NaN
Number({name:"candy"})//=>NaN
Number({});//=>NaN

```

**`parseInt`**

> 也是把其他数据类型值转换为number，和Number方法在处理字符串的时候有所区别

```javascript
Number("12px");//=>NaN
parseInt("12px");//=>12
parseInt("12px13");//=>12 提取规则：从左到右一次查找有效数字字符，直到遇见非有效数字字符为止（不管后面是否还有，都不找了），把找到的转换为数字
parseInt("px12");//=>NaN
```

**`parseFloat`**

> 在parseInt的基础上可以识别小数点

```javascript
parseInt("12.5px")->12
parseFloat("12.5px")->12.5
```

扩展思考：parseInt常用的只需要传递一个值做参数即可，但是它支持多个参数，回去后扩展其它参数的意思

> parseInt(string,radix)
>

-----------

### null和undefined

> null：空，没有
>
> undefined ：未定义
>
> ”“：空字符串没有
>
> 0：也可以理解为没有

`空字符串和null的区别`

> 比喻：都是去种树
>
> 空字符串属于挖了个坑，但是没有任何东西
>
> null是连坑都没挖
>
> 空字符串相对null来说开辟了内存

`null和undefined的区别`

> null一般都是暂时没有，预期中以后会有的（可能以后也没有达到预期）：在Js中null一般都是手动先赋值为null，后期我们在给其赋具体值
>
> undefined：完全没有预料之内的

---------------

### 对象数据类型object

> var obj={name:"candy",age:"28"}
>
> 每一个对象都是由零到多组`属性名：属性值（value值）`组成的，或者说由多组键值对组成的，每组键值对中间用逗号分隔
>
> 属性：描述这个对象特点特征的
>
> 对象的属性名是字符串或者数字格式的，存储的属性值可以是任何的数据类型
>
> `对象名.属性名：忽略了属性名的单双引号`
>
> `对象名[属性名]：不能忽略单双引号`

```javascript	
var obj={name:"candy",age:"28",otherName:["daisy","lily"]};
//=>获取某个属性名对应的属性值
obj.name
obj.["name"]
//->如果属性名是数字如何操作
obj.0 //语法不支持
//obj[0]/ obj["0"] //两种都可以支持
//如果操作的属性名在对象中不存在，获取的结果是undefined
obj.sex//->undefined

//=>设置/修改：一个对象的属性名是不能重复的（唯一性），如果之前存在就是修改属性操作值的操作，反之不存在就是新设置属性的操作
obj.sex="男"；
obj["age"]=9;

//=> 删除
//=>假删除：让其属性值赋值为null，但是属性还在对象中
obj.sex=null;
//=>真删除：把整个属性都在对象中暴力移除
delete obj.sex;
```

思考题：obj[age]和obj["age"]有什么样的区别？

```javascript
var obj={name:"candy",age:28};
var age="name";
obj[age];//=>obj[age变量]=>obj["name"]=>获取name属性名的属性值=>candy
obj["age"];//=>28
//age：变量名，代表的是它存储的值
//"age":常量，字符串的具体值。
//obg[age]操作的是对象中的属性，并不是操作的变量，所以是操作变量所存储的值，也就相当于obj["name"],而obj["age"]就是操作的obj对象中的age属性，所以值就是age本身。
```

### 基本数据类型和引用数据类型的区别

> js是运行在浏览器中的（内核引擎），浏览器会为js提供赖以生存的环境（提供给js代码执行的环境）=>`全局作用域window(global)`

```javascript	
var a=12;
var b=a;//=>把a变量存储的值赋值给b
b=13;
console.log(a);

var n={name:"candy"};
var m=n;
m.name="daisy";
console.log(n.name);
```

`基本数据类型是按值操作的`：基本数据类型在赋值的时候，是直接把值赋值给变量即可；

`引用数据类型是按照空间地址（引用地址）来操作的`：

> var n={name:"candy"}
>
> 1、先创建一个变量n
>
> 2、浏览器首先会开辟一个新的存储空间（内存空间），目的是把对象中需要存储的内容（键值对）分别的存储在这个空间中，为了方便后期找到这个空间，浏览器给空间设定了一个地址（16进制的）
>
> 3、把空间的地址赋值给了变量

![微信截图_20180625111628](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180625111628.png)

----------------

### 函数数据类型

> 函数数据类型也是按照引用地址来操作的
>
> 函数：具备一定功能的方法

```javascript
//=>创建函数:相当于生产了一台洗衣机
function  函数名(){
    //=>函数体：实现某一个功能的具体js代码
}
//=>执行函数：相当于使用洗衣机洗衣服(如果函数值创建了但是没有执行，函数没有任何意义)
函数名();
```

```javascript
function fn(){
    console.log(1+1);
}
fn;//=>输出函数本身
fn();//2 =>把函数执行（把函数体中实现功能的代码执行）
```

![微信截图_20180625115444](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180625115444.png)

```javascript
//=>形参：形式参数（变量），函数的入口
//当我们创建一个函数想要实现某个功能的时候，发现有一些材料并不清楚，只有当函数运行的时候，别人传递给我，我才知道，此时我们就需要设定入口，让用户执行的时候通过入口把值给我们。
function fn(a,b){
    console.log(a+b);
}
//=>实参：函数执行传递给函数的具体值就是实参
fn(3,2);
fn(4,3);
```

### 判断操作语句

**`if、else if、else`**

```javascript
if(条件1){
    //=>条件1成立执行的操作
}else if(条件2){
    //=>上面条件不成立，条件2成立，执行的操作
}
...
else{
    //=>以上条件都不成立执行的操作
}
//如果好几个条件都成立了，只把第一个成立的条件执行，后天成立的条件忽略不管
/***
条件：A==B、A!=B、A>=B、A<B
if(A){} =>先把A转换为布尔类型，判断真假以此来判定条件是否成立
if(A>B && A<C){} 只有两个小条件都是真，整体条件才为真
if(A>B || A<C){} 只有其中一个小条件成立，整体条件就是真
***/
```

BAT面试题：

```javascript
var num=parseFloat("width:12.5px");//NaN
if(num==12.5){
    alert(12.5);
}else if(num==NaN){//NaN!=NaN
    alert(NaN);
}else if(typeof num=="number"){//=>typeof NaN->"number"
    alert(0);//=>"0";
}else{
    alert("啥也不是");
}
```

**`三元运算符`**

> `条件?条件成立执行:条件不成立执行`
>
> if(条件){}else{}：三元运算符就是这种简单if、else的另外一种写法

```javascript
if(num>5 && num<=10){
    num++; //num+=1 num=num+1 自身累加1
}else{
    num--;
}
//=>改写成三元运算符
num>5 && num<=10?num++:num--;
```

```javascript
var num=10;
if(num>5 && num<=10){
    num++; //num+=1 num=num+1 自身累加1
}
//=>改写成三元运算符:如果条件成立或者不成立的某一种情况并不需要做什么处理，我们空着语法不符合，我们使用null、undefined、void 0（就是undefined）占位即可
num>5 && num<=10?num++:null;
```

```javascript
var num=10;
if(num>5 && num<=10){
    num++; //num+=1 num=num+1 自身累加1
    console.log(num);
}
//=>改写成三元运算符：某一种情况执行多条操作，使用小括号包起来，中间用逗号分隔
num>5 && num<=10?(num++,console.log(num)):null;
```

```javascript
var num=10;
if(num>5 && num<=10){
    num++; 
    break;//continue;/return;
}
//=>改写成三元运算符：在三元运算符的操作中不能出现break，continue,return 这些关键词,我们无法用三元运算符代替if、else
num>5 && num<=10?(num++,return):null;
//=>Uncaught SyntaxError ：语法错误
```

```javascript
var num=0;
num>0?(num<10?num++:num--):(num>-10?num+=2:num-=2);

//=>改写成if else
if(num>0){
    if(num<10){
        num++;
    }else{
        num--;
    }
}else{
    if(num>-10){
        num+=2;
    }else{
        num-=2;
    }
}
```

### switch case

> **switch case** 引用于if、else中一个变量在不同值情况下的不同操作

```javascript
var num=10;
switch(num){//=>switch后面小括号中存放的是一个值（一般我们都写变量:把变量存储的值拿来用，有时候也可能是一个计算）
    case 1:
    	...
    	break;
    case 10://=>case后面放入的都是值，目的是验证switch后面的值和哪一种case后面的值相等，相等的进行对应的处理
    	...
    	break;//=>每一种case结束后都要加break，结束当前的判断
    default://=>switch后面的值和每一种case情况对应的值都不相等，执行最后的default，类似于else
    	...
```

**案例分析**

```javascript
var num=5;
switch(num%2){//=>想把取余操作进行运算，那运算结果和case比较
    case 0:
        num++;
        break;
    case 2-1://=>case后面也应该是值，此处先把2-1计算，把计算的结果和switch值比较
        num--;
        //=>最后一项可以不加break,不加也能跳出判断
}
//num%2:让num存储的值除以2取余数（0或者1）
```

```javascript
var num=5;
switch(num%3){
    case 0:
        num++;//=>不加break，不管后面的条件是否成立，都会继续向下执行，直到遇到break为止
    case 1:
        num--;
        break;
    default:
        num=0;
}
//=>小应用：把符合某几项值都去做同一件事情，使用不加break来实现
switch(num%3){
    case 0:
    case 1://=>余数是0或1都执行减减的操作
        num--;
        break;
    default:
        num=0;
}
```

```javascript
var num="6";
switch(num){
    case 0:
        num++;
        break;
    case 6:
        num--;
        break;
    default:
        num=0;
}
//=>num=0;
//switch case 中的比较使用的是：===（全等）
/***
=:赋值，等号左边是变量，右边是值
==：比较,如果左右两边值的类型不一样，浏览器会默认转换为一样的然后在进行比较
===：绝对相等，不仅要求值一样，并且类型也完全一样
***/
```

### 循环操作语句

> 循环：重复做一件事情

**`for循环`**

```javascript
for(设置循环起始值;设置循环执行的条件;步长累加){
    //=>循环体：重复做的事情都在循环体中
}
```

**案例剖析**

```javascript
//1、设置初始值
//2、验证条件
//3、条件成立，执行循环体；不成立，循环结束
//4、步长累加
for(var i=0;i<5;i++){
    console.log(i);//=>1 2 3 4
}
console.log(i);//5
```

```javascript
var i=0;
for(;i<5;){
    console.log(i);
}
console.log(i);//=>=>没有步长累加，我们的i永远是0，循环条件永远成立"死循环"：项目中不能出现死循环，一旦出现，循环下面的事情都做不了
```

```javascript
var i=0;
for(;i<5;i+=2){
    console.log(i);//0 2 4
}
console.log(i)//6
```

```javascript
for(var i=0;i<5;i+=2){
    console.log(i);
    continue;//=>结束本轮循环，继续执行下一轮:循环体中continue后面的代码都不会再执行，他会直接的去执行步长，然后进入到下一轮
    ...
}
console.log(i)//6
```

```javascript
for(var i=0;i<5;i+=2){
    console.log(i);
    break;//=>结束整个循环：循环体中一旦遇到break，首先后面的代码不执行了，而且步长累加也不执行了，循环都结束了
    ...
}
console.log(i)//=>0
```

BAT面试题：

```javascript
for(var i=1;i<10;i+=2){
    if(i<5){
        i++;//2 5
        continue;
    }else{
        i+=3;//10
        break;
    }
    console.log(i);
}
console.log(i);//10
//输出1次 值为10
```

**`for in循环`**

```javascript
//=>for in:用来遍历（循环）对象键值对的
var obj={name:"candy",age:"28",1:"daisy",2:"lily",3:"candice",2.5:"呵呵"};
//=>var key; var attr(attribute);
//=>默认情况下对象中有多少组键值对，我们的FOR IN循环就遍历多少次（不一定）
//=>每一次循环KEY这个变量存储的都是当前循环这组键值对的属性名
//1、KEY存储的值都是字符串格式的(不管属性名是否为数字)
//2、在FOR IN循环遍历的时候，大部分浏览器都是先把对象中的键值对进行排序（把数字属性名的排在前面，并且排列的时候按照数字由小到大排了），其次在把非数字的属性名按照之前编写的顺序排列，循环的时候按照重新排列的顺序依次遍历（小数算作字母不算做数字）
for(var key in obj){
	console.log(typeof key);//=>"string"
	//key->属性名 'name'/'age'...
    console.log(obj.key);//->undefined 获取obj中key这个属性对应的属性值 <=>obj["key"]
    console.log(obj[key]);//=>每一次循环吧key变量存储的值（当前遍历的属性名）获取到放在中括号中，获取obj中对应属性的属性值
}
```

### 数据类型转换

`把其它数据类型转换为number类型`

> isNaN 、Number、parseInt、parseFloat
>
> 在进行加减乘除数学运算的时候

```javascript
true->1 false->0
''->0 '12'->12 '12px'->NaN/12 "candy"->NaN
null->0 undefined-NaN
{} /^$/ function(){}->NaN
[]->''->0
//=>引用数据类型转换数字
//通过toString方法把数组转换为字符串，然后在调用Number把字符串转换为数字
```

`JS中的数学运算`

> +、-、*、/ 加减乘除
>
> 除了加法有特殊性，其余的运算符都是数学运算，也就是遇到非数字类型，需要把其转换为number在进行运算
>
> 加法的特殊性：
>
> 在遇到字符串的时候，+不是数学运算，而是字符串拼接，只要不遇到字符串就是数学运算

```javascript
1-"1"->0;
10*null->0;
10/undefined ->NaN
10*[10]->100

1+"1"->"11"
null+"1"->"null1"
//=>字符串拼接：是把其它的值转换为字符串然后在拼接
（toString）
//=>其他数据类型的toString是直接的把值用单（双）引号包起来即可，只有对象的有特殊性，对象.toString()==="[Object Object]"

1+null+undefined+[]+"candy"+null+undefined+[]+10
/*
1+null->1
1+undefined->NaN
NaN+[]->NaN+""->"NaN"
"NaN"+"candy->"NaNcandy"
...
NaNCandynullundefined10
*/
```

`将其它数据类型转换为布尔类型`

> Boolean、！、!!
>
> 在条件判断的时候，也是转换为布尔类型，然后验证条件的真假
>
> 只有`0、NaN、空字符串、null、undefined`五个转换为false，其余的都转换为true

```javascript
[]->true
-1->true
if(box){
    //=>首先把box变量存储的值获取到，转换为布尔类型，如果为true条件成立，反之不成立
}
if(3+"3px"){
    //=>条件成立
}
if(3-"3px"){
    //=>条件不成立：3-"3px"=NaN
}
```

`在使用==进行比较的时候`

> 在使用==进行比较的时候，如果左右两边数据类型不相同，浏览器会默认转换为相同的类型，然后在比较（===不会这样操作）

```javascript	
//=>对象和对象:比较的是空间地址，不是相同的空间，结果肯定是false
[]==[]->false 

var a={};
var b=a;
a==b;=>true;

//=>对象和数字：把对象转换为数字
[]==0->true
({})==NaN->false //NaN和自己不相等和其它任何值都不相等

//=>对象和字符串：把两边都转换为数字比较的
[]==""->true

//=>对象和布尔：把两边都转换数字
[]==true//->0==1->false
[]==false//->0==0->true
![]==false//->![]把数组变为布尔在取反=false->false==false->true

//=>字符串和数字：字符串转换为数字
//=>字符串和布尔：都转为数字
//=>布尔和数字：布尔转换为数字

//=>规律：两个等号比较，左右两边数据值的类型不一样，浏览器会把两边的类型都转换为数字然后再比较，但是null和undefined除外
null==undefined->true
nul===undefined->false
null==0 ->false //null以及undefined和其它任何值都不相等
```

### Math中的常用方法

> 数学函数：但是它是对象数据类型的 
> `typeof Math->"object"`

 Math对象中给我们提供了很多常用操作数字的方法
> `console.dir(Math)`查看所有方法

 `abs`

> Math.abs:取绝对值
```javascript
Math.abs(12)->12
Math.abs(-12)->12
```
`ceil/floor`
> Math.ceil：向上取整
> Math.floor：向下去整
```javascript
 Math.ceil(12)->12
 Math.ceil(12.1)->13
 Math.ceil(12.9)->13
 Math.ceil(-12.9)->-12
 Math.ceil(-12.1)->-12

 Math.floor(12)->12
 Math.floor(12.1)->12
 Math.floor(12.9)->12
 Math.floor(-12.9)->-13
 Math.floor(-12.1)->-13
```
 `round`
> Math.round：四舍五入
```javascript
Math.round(12.3)->12
Math.round(12.5)->13 正数中5包含在向上
Math.round(-12.3)->-12
Math.round(-12.5)->-12 负数中5包含在向下
Math.round(-12.51)->-13 
```

`random`
> Math.random：获取(0,1)之间的随机小数
```javascript
 for(var i=0;i<100;i++){
    console.log(Math.random());
    }
 //=>需求：获取[0,10]之间的随机整数
Math.round(Math.random()*10)
//=>需求：获取[1,10]之间的随机整数
Math.ceil(Math.random()*10))
//=>需求：获取[3,15]之间的随机数
Math.round(Math.random()*12+3)
```
**获取[n,m]之间的随机整数**
`Math.round(Math.random()*(m-n)+n)`

`max/min`

```javascript
Math.max(12,23,25);->25
Math.min(12,23,25);->12
```

`PI`

```javascript
Math.PI->3.141592653589793
```

`pow/sqrt`

> Math.pow：获取一个值的多少次幂
>
> Math.sqrt：开平方

```javascript
Math.pow(10,2)->100
Math.sqrt(100)->10
```

### 字符串中常用的方法

> 在JS中用单（双）引号包裹起来的都是字符串

```javascript
var str="welcome to my home,my name is candy!"
//=>字符串就是由0到多个字符组成的
//特点一：以数字作为索引，从零开始
//特点二：有length属性，存储的是当前字符串中字符的个数（字符长度）
//str[100]->undefined 如果指定的索引不存在获取的结果是undefined
```

> 真实项目中，我们经常操作字符串，此时我们需要掌握常用的一些字符串操作方法
>
> `console.dir(String.prototype)`

`charAt &&charCodeAt`

> **str.charAt(索引)**：返回指定索引位置的字符，和str[索引]的区别在于，当指定的索引不存在的时候，中括号的方式获取的是undefined，而charAt获取的是空字符串
>
> **str.charCodeAt(索引)** :在charAt基础上，把获取的字符变为unicode编码值（对应ASCII码表）
>
> 48-57：0-9
>
> 65-90：A-Z
>
> 97-122：a-z
>
> String.formCharCode(十进制的unicode值)：把值按照ASCII码表中的信息，转换为原有的字符，和charCodeAt正好对应

![微信截图_20180626150152](C:\Users\wangxuechun\Desktop\js学习\js基础img\微信截图_20180626150152.png)

`substr && substring && slice`

> 实现字符串截取的三个办法
>
> **str.substr(n,m)**：从索引n开始，截取m个字符
>
> **str.sunstring(n,m)**：从索引n开始，截取到索引为m处（不包含m）,吧找到的本分截取
>
> **str.slice(n,m)**：和substring语法一样，区别在于slice支持以负数做索引

![微信截图_20180626153308](C:\Users\wangxuechun\Desktop\js学习\js基础img\微信截图_20180626153308.png)

> 当索引是负数的时候，浏览器在处理的时候，使用字符串的总长度加上负数索引，然后按照正数处理操作。
>
> 细节知识点：
>
> 1、如果只传递n(str.substr(n)/str.substring(n)/str.slice(n)/),相当于从索引n开始一直截取到字符串的末尾
>
> 2、如果传递的索引值超出最大限制，也是把能截取的部分截取掉即可
>
> 3、如果一个参数都不传递：相当于把整个字符串都截取（字符串的克隆）

`toUpperCase && toLowerCase`

> **str.toUpperCase** :把字母全部大写
>
> **str.toLowerCase** :把字母全部小写

`indexOf && lastIndexOf`

> **str.indexOf**：获取当前字符在字符串中第一次出现位置的索引
>
> **str.lastIndexof** ：获取当前字符在字符串中最后一次出现位置的索引

![微信截图_20180626160822](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180626160822.png)

> 如果当前字符在字符串中没有出现过，结果是-1；我们根据这个规律可以验证一下当前字符串中是否包含某个字符

```javascript
if(str.indexOf("?")===-1){
    //没有出现过
}
if(str.indexOf("?")>=0){
    //出现过
}
```

`split`

> **str.split**：按照某一个字符把字符串拆分成数组中的某一项，和数组中的join方法是对应的

![微信截图_20180626162146](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180626162146.png)

`replace`

> **str.replace** ：实现字符的替换
>
> 执行一次replace只能替换一次，如果有好几个都需要替换，在不使用正则的情况下我们需要执行很多次replace；
>
> 有些需求即使执行很多次replace也实现不了，此时需要使用正则处理，真实项目中replace一般都是和正则搭配使用的

![微信截图_20180626162739](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180626162739.png)

`trim && trimLeft && trimRight`

> **str.trimLeft** ：去除字符串开始的空格
>
> **str.trimRight** ：去除字符串结尾的空格
>
> **str.trim** ：去除字符串首尾的空格

### 案例：queryURLParameter

> 获取地址栏中URL地址问号传递的参数值
>
> https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1
>
> https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1
>
> 目标：把问号传递的参数值分别的解析出来
>
> obj={wd:"javascript",rsv_spt:1,issp:1}

```javascript
var str="https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1";
//=>obj={wd:"javascript",rsv_spt:1,issp:1}

//=>方案一：
var questionIndex=str.indexOf("?");
str=str.substring(questionIndex+1);
console.log(str);//=>"wd=javascript&rsv_spt=1&issp=1"
var ary=str.split("&");
console.log(ary)//=>["wd=javascript","rsv_spt=1","issp=1"]
var obj={}
for(var i=0;i<ary.length;i++){
    var cur=ary[i];
    var curAry=cur.split("=");
    key=curAry[0];
    value=curAry[1];
    obj[key]=value;
}
console.log(obj);

```

```javascript
function queryURLParameter(url){
    //=>url:传递的参数（我们当前要解析的url地址）
    var quesIndex=url.indexOf("?"),
        obj={}；
    if(quesIndex===-1){//->url中没有问号传参
        return obj;
    }
    url=url.substr(quesIndex+1);
    var ary=url.split("&");
    for(var i=0;i<ary.length;i++){
        var curAry=ary[i].split("=");
        obj[curAry[0]]=curAry[1];
    }
    return obj;
}
console.log(queryURLParameter("https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1"))
```

```javascript
String.prototype.myQueryURLParameter=function
 myQueryURLParameter(){
        var obj={},
      		reg=/([^=?&]+)=([^=?&]+)/g;
        this.replace(reg,function(){
            var arg=arguments;
            obj[arg[1]]=arg[2];
        })
        return obj;
    }
var str="https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1";
console.log(str.myQueryURLParameter());
```

### 案例二（模拟验证码功能实现）

> 真实项目中的验证码：
>
> 真实项目中的验证码一般都是后台处理的，后台返回给客户端展示的是一个图片（图片中包含了验证码）

此案例使用前端js代码模拟验证码实现：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{
			margin:0;
			padding:0;
			
		}
		#codeBox{
			margin:20px auto;
			width:200px;
			height:50px;
			border:1px solid green;
			line-height: 50px;
			text-align:center;
			letter-spacing:5px;
			cursor:pointer;
			font-size:20px;
			
			-webkit-user-select:none;
			/*禁止用户选择复制*/
		}
	</style>
</head>
<body>
	<div id="codeBox"></div>
	<script src="js/4-code.js"></script>
</body>
</html>
```

```javascript
//1-code.js 此处完成页面刷新 验证码更换

var codeBox=document.getElementById("codeBox");
//=>生成四位随机验证码：取值范围
var areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//=>areaStr.length:62(0-61)
var result="";
for(var i=0;i<4;i++){
	// =>随机获取0~61之间的整数，作为接下来获取字符的索引
	var ran=Math.round(Math.random()*61);
	//=>根据索引获取一个随机字符
	var char=areaStr.charAt(ran);
	//=>把每次循环获取的字符放在最后的结果（result）中
	result+=char;
}
codeBox.innerHTML=result;

```

```javascript
/***
2-code.js 
此处代码迭代1-code.js 将上述代码封装成函数queryCode;
并给验证码显示区添加点击刷新的效果
***/
var codeBox=document.getElementById("codeBox");
//=>queryCode:获取四位验证码
function queryCode(){
	var result="",
		areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	for(var i=0;i<4;i++){
		var ran=Math.round(Math.random()*61);
		result+=areaStr[ran];
	}
	codeBox.innerHTML=result;
}
//=>加载页面时需要执行一次这个方法：生成四位验证码
queryCode();
//=>点击盒子重新生成验证码(此处不加小括号：这块只是在把函数绑定给元素的点击事件，方法还没有执行,点击的时候才执行)
codeBox.onclick=queryCode;
```

```javascript
/***
3-code.js
此处代码迭代2-code.js
完善随机四位验证码重复情况（去重）
****/
var codeBox=document.getElementById("codeBox");
//=>queryCode:获取四位验证码
function queryCode(){
	var result="",
		areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	for(var i=0;i<4;i++){
		var ran=Math.round(Math.random()*61),
			char=areaStr[ran];
			//=验证一下新获取的char字符是否已经在result中存在了,如果存在了我们不存储，重新获取一遍，反之才累加到result中
			if(result.indexOf(char)>-1){
				i--;
				continue;
			}
		result+=char;
	}
	codeBox.innerHTML=result;
}

queryCode();
codeBox.onclick=queryCode;
```

```javascript
/***
4-code.js
此处代码迭代3-code.js
完善大小写字母重复情况
***/
var codeBox=document.getElementById("codeBox");
//=>queryCode:获取四位验证码
function queryCode(){
	var result="",
		areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	for(var i=0;i<4;i++){
		var ran=Math.round(Math.random()*61),
			char=areaStr[ran];
			//=>a和A也算重复，该如何处理？
			//result="Ab" "ab"
			//char="a"    "a"
			//result.toLowerCase().indexof(char.toLowerCase())===-1
			if(result.toLowerCase().indexOf(char.toLowerCase())>-1){
				i--;
				continue;
			}
		result+=char;
	}
	codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick=queryCode;
```
```javascript
/*
5-code.js
此方法为扩展方法，去重办法是将每此随机获取的字符去掉
并根据随机字符对应的unicode码判断是否为字母：
如果为大写字母则将小写字母一并去掉
如果为小写字母则将大写字母一并去掉
*/
var codeBox=document.getElementById("codeBox");
function queryCode(){
    var areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        result="";
    for(var i=0;i<4;i++){
        var ran=Math.round(Math.random()*(areaStr.length-1));
        var char=areaStr.charAt(ran);
        var charCode=areaStr.charCodeAt(ran);
        if(charCode>=65&&charCode<=90){
            areaStr=areaStr.replace(char.toLowerCase(),"");
        }else if(charCode>=97 &&charCode<=122){
            areaStr=areaStr.replace(char.toUpperCase(),"");
        }
        areaStr=areaStr.replace(char,"");
        result+=char;
    }
    codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick=queryCode;

```

## DOM基础精讲

> **DOM**：document.object model 文档对象模型，提供一些属性和方法可以让我们去操作DOM元素。

### 获取DOM元素的方法

- document.getElementById 一个元素

- [context].getElementsByTagName 元素集合

- [context].getElementsByClassName 元素集合

- document.getElementsByName 节点集合

- document.documentElement  获取整个HTML对象

- document.body 获取整个BODY对象

- document.head 获取整个HEAD对象

- [context].querySelector 一个元素对象

- [context].querySelectorAll 获取元素集合

- ...

  `getElementById`

  > 此方法的上下文只能是document
  >
  > 一个HTML页面中的id理论上是不能重复的
  >
  > 1、如果页面中的id重复了，我们获取的结果是第一个id对应的元素对象
  >
  > 2、在IE7及更低版本浏览器中，会把表单元素的name值当做id来识别（项目中尽量不要让表单的name和其他元素的id相同）
  >
  > 3、如果我们把JS放在结构的下面，我们可以直接使用ID值来获取这个元素（不需要通过getElementById获取）,而且这种方式会把页面中所有ID是他的元素都获取到（元素对象/元素集合）=>不规范 不推荐

  ```javascript
  //=>获取页面中ID值为#box1的所有元素标签
  var allList=document.getElementsByTagName("*"),
      result=[];
  for(var i=0;i<allList.length;i++){
     var item=allList[i];
     item.id==="box1"?result.push(item):null;
  }
  console.log(result);
  ```

  `getElementByTagName`

  > 上下文是可以自己指定的
  >
  > 获取到的结果是一个元素的集合（类数组集合）
  >
  > 1、获取的结果是集合，哪怕集合中只有一项，我们想要操作这一项（元素对象），需要先从集合中获取出来，然后再操作
  >
  > 2、在指定的上下文中，获取所有子子孙孙元素中标签名叫做这个的（后代筛选）

  ```html
  <body>
      <div></div>
      <div></div>
      <div></div>
  </body>
  <script>
  var bodyBox=document.getElementsByTagName("body");
      //bodyBox.getElementsByTagName("div");
      /*=>UNcaught TypeError:
      bodyBox.getElementsByTagName is not a function 
      此时的bodyBox是一个类数组集合，我们需要使用的是其中的第一项
      而不是整个集合
    	*/
      bodyBox[0].getElementsByTagName("div");
  </script>
  ```

  `getElementsByClassName`

  > 上下文可以随意指定
  >
  > 获取的结果也是一个元素集合（类数组集合）
  >
  > 1、真实项目中我们经常会通过样式类名来获取元素，getElementsByClassName这个方法在IE6~8浏览器中是不兼容的

  `getElementsByName`

  > 通过元素的NAME属性值获取一组元素（类数组：节点集合 NodeList）
  >
  > 它的上下文也只能是document
  >
  > 1、IE浏览器只能识别表单元素的那么属性值，所以我们这个方法一般都是用来操作表单元素的

  `document.documentElement/document.body`

  > 获取HTML或者BODY（一个元素对象）

  ```javascript
  //=>获取当前浏览器窗口可视区域的宽度（当前页面一屏的宽度）
  document.documentElement.clientWidth||document.body.clientWidth
  //=>clientHeight 获取高度
  ```

  `querySelector/querySelectorAll`

  > 在IE6~8下不兼容，而且也没什么特别好办法处理它的兼容，所以这两个方法一般多用于移动端开发使用
  >
  > querySlector：获取一个元素对象
  >
  > querySlectorAll：获取的是一个元素的集合
  >
  > 只要是css支持的选择器，这里大部分都支持
`元素节点`

 ### DOM的节点

> node：节点，浏览器认为在一个HTML页面中所有内容都是节点（包括标签，注释，文字文本等）
>
> - 元素节点 ：HTML标签
> - 文本节点 ：文字内容（高版本浏览器会把空格和换行也当作文本节点）
> - 注释节点：注释内容
> - document文档节点
> - ...

`元素节点`

nodeType：1；

nodeName：大写标签名（在部分浏览器的怪异模式下，我们写的标签名是小写，它获取的就是小写...）

nodeValue：null

[curEle].tagName:获取当前元素的标签名（获取的标签名一般都是大写）

`文本节点`

nodeType：3

nodeName：#text

nodeValue：文本内容

`注释节点`

nodeType：8

nodeName：#comment

nodeValue：注释内容

`文档节点`

nodeType：9

nodeName :#document

nodeValue：null

> 节点是用来描述页面中每一部分之间关系的，只要可以获取页面中的一个节点，那么就可以通过相关的属性和方法获取页面中的所有节点

![微信截图_20180628152905](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180628152905.png)

`childNodes`

> 获取当前元素所有的子节点（节点集合：类数组）
>
> 注：不仅仅是元素节点，文本、注释等都会包含在内；子节点说明只是在儿子辈分中查找；

`children`

> 获取所有的元素子节点（元素集合）
>
> 在IE6~8下获取的结果和标准浏览器中有区别（IE6~8中会把注释节点当做元素节点获取到）

`parentNode`

> 获取当前元素的父节点（元素对象）

`previousSibling && nextSibling ` 

>previousSibling：获取当前节点的上一个哥哥节点（不一定是元素节点也可以能是文本和注释）
>
>nextSibling：获取当前节点的下一个弟弟节点

`previousElementSibling && nextElementSibling`

>previousElementSibling：获取当前节点的上一个哥哥元素节点
>
>nextElementSibling：获取当前节点下一个弟弟元素节点
>
>IE6~8下不兼容

`firstChild  && lastChild`

> fristChild：当前元素所有子节点中的第一个（也不一定是元素节点，可能是文本和注释）
>
> lastChild：当前元素所有子节点中的最后一个

`fristElementChild && lastElementChild `（IE6~8 兼容）

### DOM的增删改

> 真实项目中，我们偶尔会在JS中动态创建一些HTML标签，然后把其增加到页面中

`document.createElement`

> 在JS中动态创建一个HTML标签

`appendChild`

> 容器.appendChild(新元素)
>
> 把当前创建的新元素添加到容器的末尾位置

`insertBefore`

> 容器.insertBefore(新元素，老元素)
>
> 在当前容器中，把新创建的元素增加到老元素之前

```javascript
//=>真实项目中很多需求都是通过动态创建元素来完成的，其中有一个需求:解析一个URL地址每一部分的信息（包含问号传递的参数值）
//->1.纯字符串拆分
//->2.编写强大的正则，捕获到需要的结果
//->3.通过动态创建一个A标签，利用A标签的一些内置属性来分别获取每一个部分的内容
//->...
/***
    var link=document.createElement("a");
    link.href="http://www.andy.com/stu/?name=andy&age=30&sex=0#teacher";//->此处地址就是我们需要解析的URL
    //->hash:存储了哈希值 "#teacher"
    //->hostname: 存储的是域名 "http//www.andy.com"
    //->pathname: 存储的是请求资源的路径 "/stu/"
    //->protocol: 协议 "http:"
    //->search: 存储的是问号传递参数值，没有传递是字符串 "?name=andy&age=30&sex=0"
***/

function queryURLParameter(url){
    var link=document.createElement("a");
    link.href="url";
    var search=link.search,
        obj={};
    if(search.length===0) return;
    search=search.substr(1).split(/&|=/g);//search是带"?"的，所以要删除问号在分割
    for(var i=0;i<search.length;i+=2){
        var key=search[1],
        	value=search[i+1];
        obj[key]=value;
    }
    link=null;
    return obj;
}
```

`removeChild`

> 容器.removeChild(元素)
>
> 在当前容器中把某一个元素移除掉

`replaceChild`

> 容器.replaceChild(新元素，老元素)
>
> 在当前容器中，拿新元素替换老元素

`cloneNode`

> 元素.cloneNode(false/true)
>
> 把原有的元素克隆一份一模一样的，false：只克隆当前的元素本身，true：深度克隆，把当前元素本身以及元素的所有后代都进行克隆

`[set/get/remove]Attribute`

> 给当前元素设置/获取/移除 属性的（一般操作的都是他的自定义属性）
>
> box.setAttribute("myIndex",0)
>
> box.getAttribute("myIndex")
>
> box.removeAttribute("myIndex")
>
> 使用xxx.index和xxx.setAttribute("index",0)这两种设置自定义属性的区别
>
> xxx.index：是把当前操作的元素当做一个普通对象，为其设置一个属性名（和页面中的HTML标签没关系）
>
> xxx.setAttribute：把元素当做特殊的元素对象来处理，设置的自定义属性是和页面结构中的DOM元素映射在一起的

JS中获取的元素对象，我们可以把它理解为两种角色：

- 与页面HTML结构无关的普通对象
- 与页面HTML结构存在映射关系的元素对象

元素对象中的内置属性，大部分都和页面的标签存再映射关系：

xxx.style.backgroundColor="xxx" 此时不仅把JS中对象对应的属性值改变了，而且也会映射到页面的HTML标签上（标签中有一个style行内样式，元素的样式改变了）

xxx.className="xxx" 此时不仅是把JS对象中的属性值改了，而且页面中的标签增加了class样式类（可以看见的）

```javascript
//获取上一个哥哥元素节点
//=>获取当前元素的上一个节点
//=>循环判断：当上一个节点存在，并且上一个节点类型不为1时，持续循环，知道节点类型为1
function prevSibling(curELe){
    var p=curEle.previousSibling;
    while(p && typeof!==1){
        p=p.perviousSibling;
    }
    return p;
}
```

### Date日期操作基础讲解

> Date 是日期类，通过他可以对时间进行处理

```javascript
var time=new Date();//获取当前客户端本机时间（当前获取的时间不能作为重要的参考依据）

//=>获取的结果是一个日期格式的对象：Mon Jul 02 2018 14:00:14 GMT+0800 (中国标准时间)

typeof new Date()->"object"

//=>time.getFullYear()获取四位整数年
//=>time.getMonth() 获取月0~11, 代表1~12月
//=>time.getDate() 获取日
//=>time.getDay() 获取星期（0~6）代表周日~周六
//=>time.getHours() 获取小时
//=>time.getMinutes() 获取分钟
//=>time.getSeconds() 获取秒
//=>time.getMilliseconds() 获取毫秒
//=>time.getTime() 获取当前日期距离"1970-01-01 00:00:00"毫秒差
```

```javascript
var time=new Date("2017-10-22");//=>当new Date中传递一个时间格式的字符串，相当于把这个字符串转换为标准的时间对象格式（转换完成后，就可以调取上面我们讲的那些方法了）
//=>时间格式的字符串
//"2017-10-22"(IE下识别不了)
//"2017/10/22"
//"2017/10/22 16:15:34"
//1530511656252(如果传递的是距离1970年的那个毫秒差，但是只能是数字)
```

## JS中的函数

> 函数是一段在一起的、可以做某一件事的程序。也叫做子程序、（OOP中）方法
>
> 函数是实现某一个功能的方法

### 创建函数

```javascript
function [函数名]（[形参]）{}
//=>[函数体]
//实现功能的具体JS代码
```

### 执行函数

```javascript
函数名();//=>把创建的函数执行，而且这个函数可以执行很多次
```

> 在真实项目中，我们一般都会把实现一个具体功能的代码封装在函数中：
>
> 1、如果当前这个功能需要在页面中执行多次，不封装成为函数，每一次想实现这个功能，都需要重新把代码写一遍，浪费时间，而封装在一个函数中，以后想实现多次这个功能，我们就没有必要在重新写代码了，只需要把函数重新的执行即可，提高了开发效率
>
> 2、封装在一个函数中，页面中就基本上很难出现重复一样的代码了，减少了页面中代码的冗余度，提高了代码的重复利用率`低耦合高内聚`
>
> 我们把以上的特点称为 **`函数封装`**（OOP面向对象编程思想，需要我们掌握的就是类的继承、封装、多态）

### JS中函数的核心原理

> 函数作为js中引用数据类型的一种，也是按照引用地址来操作的

```javascript
var obj={
    name:"candy",
    age:"28"
}
function sum(){
    var total=1+1;
    total*=20;
    console.log(total.toFixed(2));
}
sum();
```

`创建函数`

- 首先会在当前作用域中声明一个函数名（声明的函数名和使用var声明的变量名是一样的操作: var sum;function sum;这两个名字算重复了）
- 浏览器首先会开辟一个新的内存空间（分配一个16进制地址），把函数体中的写好的代码当做普通的字符串存储在这个内存空间中(创建一个函数如果不执行，函数没有意义)
- 把内存空间的地址赋值给之前声明的那个函数

`函数执行`

> 目的:把之前存储的实现具体功能的JS代码执行

- 函数执行，浏览器首先会为其开辟一个新的`私有作用域`（只能执行函数中之前编写的JS代码）
- 形参赋值（先跳过）
- 私有作用域中的变量提升（先跳过）
- 把之前创建时候存储的那些js代码字符串拿到私有作用域中，然后把他们变为JS表达式从上到下执行
- 私有作用域是否销毁的问题（先跳过）

`闭包`

> 函数执行会形成一个私有的作用域，让里面的私有变量和外界互不影响（相互不干扰，外面的无法直接获取里面的变量值），此时我们可以理解为私有作用域把私有变量保护起来的，我们把这种保护机制称之为 **`闭包`**

`栈内存`

> 作用域（全局作用域/私有作用域）：提供一个供JS代码执行的环境

`堆内存`

> 所有的引用数据类型，它们需要存储的内容都在堆内存中（相当于一个仓库，目的是存储信息）
>
> - 对象会把键值对存储进来
> - 函数会把代码当做字符串存储进来

### 函数中的形参和实参

> 形参：相当于生产洗衣机的时候提供的入口，需要用户执行函数的时候吧需要的值传递进来，实参是个变量，用来存储和接收这些值
>
> 实参：用户执行的时候传递给形参的具体值

```javascript
function sum(num1,num2){//=>num1/num2就是形参变量（类似于val了一下）
    //如果有一个值没有传递的话，我们为了保证结果不是NaN，我们为其设置一个默认的值:0
    //typeof num1==="undefined"?num1=0:null;
    //typeof num1==="undefined"?num1=0:null;
    //=>容错处理
    num1=num1||0;
    num2=num2||0;
    var total=num1+num2;
    total*=10;
    total=total.toFixed(2);
    console.log(total);
}
sum(10,20);//->10/20是实参 num1=10 num2=20
sum(10);//->num1=10 num2=undefined 定义了形参但是执行的时候没有传递实参，默认实参的值是undefined
```

### arguments实参集合

> 当我们不知道用户具体要传递几个值的时候（传递几个值都行），此时我们无法设置形参的个数；遇到此类需求，需要使用函数内置的实参集合：arguments
>
> 1、arguments只有函数才有
>
> 2、不管执行函数的时候是否传递实参，arguments天生就存在，没有传递实参ARG是个空的集合，传递了ARG中包含了所有传递的实参值
>
> 3、不管是否设置了形参，ARG中始终存储了所有的实参信息

![微信截图_20180704122503](C:\Users\wangxuechun\Desktop\js\js基础img\微信截图_20180704122503.png)

> arguments是一个类数组集合
>
> 1、以数字作为索引（属性名），从零开始
>
> arguments[0]第一个实参信息
>
> arguments[2]第三个实参信息
>
> arguments[n]第n+1个实参信息
>
> 2、有一个length的属性，存储的是当前几个的长度（当前传递实参的个数）
>
> arguments.length
>
> arguments["length"]
>
> arguments.callee：存储的是当前函数本身
>
> arguments.callee.caller :存储的是当前函数在哪执行的（宿主函数），在全局作用域下执行的，结果是null

```javascript
function sum(){
    console.log(arguments.callee.caller);//=>fn
}
function fn(){
    sum(10,20,"candy",{name:"candy"})
}
fn();
```

```javascript
"use strict";//=>在JS代码执行之前加入这句话：开启JS的严格模式
function sum(){
    console.log(arguments.callee.caller);//=>Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
}
function fn(){
    sum(10,20,"candy",{name:"candy"})
}
fn();
//=>arguments.callee或者argument.callee.caller一般真正项目中很少使用，因为在严格的JS模式下不允许我们使用这两个属性
```

```javascript
//=>任意数求和
function sum(){
    var total=null;
    for(var i=0;i<arguments.length;i++){
        var cur=Number(arguments[i]);
        !isNaN(cur)?total+=cur:null;
    }
    console.log(total);
}
sum(10,20,30);
sum();
sum(10,20,"30");
sum(10,20,30,"candy");
```

### JS中的返回值  `return`

>返回值是函数提供的一个出口：我们如果想在外面使用函数私有的一些信息，那么就需要通过return，把这些信息返回出来供外面使用

```javascript
function sum(){
    var total=null;
    for(var i=0;i<arguments.length;i++){
        var cur=Number(arguments[i]);
        !isNaN(cur)?total+=cur:null;
    }
    return total;//=>RETURN后面跟着的都是值（返回的都是值）：此处不是把total变量返回，而是把total存储的值返回而已
}
console.log(sum(10, 20, 30));
//=>sum:代表的函数本身
//=>sum():让函数先执行，代表的是当前函数返回的结果（RETURN后面是啥，相当于函数返回的是啥）
```

```javascript
function sum(){
    var total=0;
    return；
    console.log(total);//=>在函数体中遇到RETURN后，RETURN后面的代码不在执行了
}
console.log(sum());//=>如果函数中没有写RETUEN或者RETURN后面啥也没有，默认返回的结果就是undefined
```

```javascript
//任意数求和完整版
function sum(){
    var total=null;
    for(var i=0;i<arguments.length;i++){
        var cur=Number(arguments[i]);
        !(isNaN(cur))?total+=cur:null;
    }
    return total;
}
var total=sum(10,20,30);//=>外面是全局下的TOTAL和函数中的TOTAL没有必然的联系
console.log(total.toFixed(2));
```

### JS中的匿名函数

> 没有名字的函数
>
> - 函数表达式
> - 自执行函数

```javascript
oBox.onclick=function(){
    //=>把一个没有名字的函数（有名字也无所谓）作为值赋值给一个变量或者一个元素的某个事件等：函数表达式
}

```

```javascript
;(function(n){
    //=>创建函数和执行函数放在一起了,创建完成立马执行：自执行函数
    //n形参 n=10
    //前面加";"是为了压缩时候出现错误
})(10)
//=>以下都是自执行函数，符号只是控制语法规范
~function(n){}(10);
-function(n){}(10);
+function(n){}(10);
!function(n){}(10);
```

