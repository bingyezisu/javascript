# JavaScript对象

> - JavaScript本地对象和内置对象
> - Browser对象（BOM）
> - HTML DOM对象

## JavaScript对象

>Array 、Boolean 、Date、Math、Number、String、RegExp、Global

### Array对象

> **语法**：
>
> ```javascript
> new Array();
> new Array(size);
> new Array(element0, element1, ..., elementn);
> ```

>**参数**：
>
>参数size是期望的数组元素个数。返回的数组长度length值为size
>
>参数element0...,elementn是参数列表是创建的数组的元素
>
>**返回值**：
>
>返回新数组。没有参数是，返回数组为空，length为0
>
>只有一个数字参数时，返回指定个数，元素为undefine的数组

#### Array对象属性

> constructor：返回对创建此对象的数组函数的引用
>
> length：设置或放回数组中元素的数目
>
> prototype：是您有能力向对象添加属性和方法

#### Array对象方法

**concat()** 连接两个或多个数组，返回一个新数组

```javascript
//ary.concat(ary2);
//ary.concat([3,4,5]);
//ary.concat(3,4);
```

**join()** 使用指定分隔符拼接元素，返回一个字符串

```javascript
var ary=[1,2,3];
var str=ary.join();
console.log(str);//"1,2,3"
//省略参数，则使用逗号作为分隔符
```

**toString()**把数组转换成字符串，并返回结果

```javascript
var ary=[1,2,3];
var str=ary.toString();
console.log(str);//"1,2,3"
//当数组用于字符串环境时，JavaScript会调用这一方法将数组自动转换成字符串
```

**pop()**用于删除并返回数组的最后一个元素

```javascript
var ary=[1,2,3];
console.log(ary.pop());//3
console.log(ary);//[1,2]
//原数组改变，长度减1
```

**shift()**用于移除并返回数组的第一个元素

```javascript
var ary=[1,2,3];
console.log(ary.shift());//1
console.log(ary);//[2,3]
//原数组改变，长度减1
```

**splice()** 向数组中添加/删除项目，然后返回被删除的项目

```javascript
//语法:ary.splice(index,howmany,item1,...,itemX)
//index:整数，添加或删除项目的位置
//howmany:删除的项目数量
//item1,...,itemX:向数组添加的新项目
var ary=[1,2,3,4,5];
var newAry=ary.splice(1,1,6);
console.log(newAry);//[2]
console.log(ary);//[1, 6, 3, 4, 5]
//原数组改变,返回值删除值组成的新数组
```

**unshift()** 向数组的开头添加一个或更多元素，返回新的长度

```javascript
var ary=[1,2,3];
console.log(ary.unshift(4,5,6));//6
console.log(ary)//[4, 5, 6, 1, 2, 3]
//原数组改变，长度为原数组长度，加新加元素个数
```



**push()** 向数组末尾添加一个或多个元素，并返回新的长度

```javascript
var ary=[1,2,3];
console.log(ary.push(4,5,6));//6
console.log(ary)//[1,2,3,4,5,6];
//原数组改变，长度为原数组长度，加新加元素个数
```

**reverse()** 用于颠倒数组中元素的顺序

```javascript
var ary=[1,2,3];
ary.reverse();
console.log(ary);//[3, 2, 1]
//原数组改变，元素顺序颠倒
```

**sort()**用于对数组元素进行排序

```javascript
var ary=[11,23,12,19,21];
ary.sort(function(a,b){
    return a-b;
})
console.log(ary);//[11, 12, 19, 21, 23]
//return b-a; 降序；
//无参数：使用字符编码进行排序
```

**slice()** 用于从已有的数组中返回选定的元素

```javascript
var ary=[1,2,3,4,5];
var newAry=ary.slice(1,3);//参数为数组索引
console.log(newAry);//[2,3];
//原数组不改变，返回一个新数组，包含开始位置，不包含结尾位置
```

### Boolean对象

>创建Boolean对象的语法：
>
>```javascript
>//new Boolean(value);//构造函数
>//Boolean(value);//转换函数
>var boo=new Boolean(1);
>console.log(boo);//Boolean {true}
>
>var boo1=Boolean(1);
>console.log(boo);//true
>//0,-0,"",false,undefined或者NaN-->false
>```

#### Boolean对象属性

> constructor：返回对创建此对象的Boolean函数的引用
>
> prototype：使你有能力向对象添加属性和方法。

#### Boolean对象方法

> **toString()** 把逻辑值转换为字符串，并返回结果。

### Date对象

>用于创建日期和时间
>
>语法：
>
>```javascript
>var myDate=new Date();
>//Date对象会自动把当前日期和时间保存为其初始值。
>```

#### Date对象属性

> constructor: 返回对创建此对象的Date函数的引用
>
> prototype:是您有能力向对象添加属性和方法。

#### Date对象方法

**Date()** 返回当日的日期和时间

```javascript
var myDate=Date();
console.log(myDate);//Mon Aug 06 2018 16:50:37 GMT+0800 (中国标准时间)
```

**getFullYear,getMonth(),getDate()，getDay()**

```javascript
var myDate=new Date();
var myYear=myDate.getFullYear();
var myMonth=myDate.getMonth();
var myDay=myDate.getDate();
var myWeek=myDate.getDay();
console.log(myDate);//Mon Aug 06 2018 16:56:29 GMT+0800 (中国标准时间)
console.log(myYear);//2018
console.log(myMonth);//7
console.log(myDay);//6
console.log(myWeek);//1
//从Date对象中返回年，月，日，星期
//月取值范围:0~11
//日的取值范围：1~31
//星期的取值范围：0~6；星期日~星期六
```

**getHours(),getMinutes(),getSeconds(),getMilliseconds()**

```javascript
var myDate=new Date();
var H=myDate.getHours();
var M=myDate.getMinutes();
var S=myDate.getSeconds();
var Mil=myDate.getMilliseconds();
console.log(myDate);//Mon Aug 06 2018 17:04:21 GMT+0800 (中国标准时间)
console.log(H+" : "+M+" : "+S+" : "+Mil);//17 : 4 : 21 : 267
//获取Date对象的时，分，秒，毫秒
```

**getTime()** 返回1970年1月1日至今的毫秒数

**parse(dateStr)** 返回1970年1月1日午夜距离指定日期时间的毫秒数

**setFullYear(),setMonth(),setDate(),setHours(),setMinutes(),setSeconds(),setMilliseconds()** 设置Date对象中的年，月，日，时，分，秒，毫秒

```javascript
var myDate=new Date();
myDate.setFullYear(1990);
myDate.setMonth(1);
myDate.setDate(16);
myDate.setHours(19);
myDate.setMinutes(0);
myDate.setSeconds(0);
myDate.setMilliseconds(0);
console.log(myDate);//Fri Feb 16 1990 19:00:00 GMT+0800 (中国标准时间)
```

**toString()** 把Date对象转换为字符串

### Math对象

>Math对象用于执行数学任务。
>
>```javascript
>var pi=Math.PI;
>var sqrt=Math.sqrt(15);
>```
>
>Math对象并不想Date和String那样是对象的类，因此没有构造函数Math(),无需创建它，通过把Math作为对象就可以调用其所有属性和方法。

#### Math对象属性

> - Math.E：返回算术常量 e，即自然对数的底数（约等于2.718）。 
> - Math.LN2  ：返回 2 的自然对数（约等于0.693）。 
> - Math.LN10 :返回 10 的自然对数（约等于2.302）。 
> - Math.LOG2E：返回以 2 为底的 e 的对数（约等于 1.414）。 
> - Math.LOG10E：返回以 10 为底的 e 的对数（约等于0.434）。 
> - Math.PI ：返回圆周率（约等于3.14159）。 
> - Math.SQRT1_2：返回返回 2 的平方根的倒数（约等于 0.707）。 
> - Math.SQRT2 返回 2 的平方根（约等于 1.414）。 

#### Math对象方法

| 方法     | 描述                       | 方法       | 描述                                                         |
| -------- | -------------------------- | ---------- | ------------------------------------------------------------ |
| abs(x)   | 返回数的绝对值             | exp(x)     | 返回e的指数                                                  |
| ceil(x)  | 对数进行向上取整           | log(x)     | 返回数的自然对数（底为e）                                    |
| floor(x) | 对数进行向下取整           | sin(x)     | 返回数的正弦                                                 |
| max(x,y) | 返回传入参数的最高值       | tan(x)     | 返回角的正切                                                 |
| min(x,y) | 返回传入参数的最低值       | cos(x)     | 返回数的余弦                                                 |
| random() | 返回0~1之间的随机数        | acos(x)    | 返回数的反余弦值                                             |
| round(x) | 把数四舍五入为最接近的整数 | asin(x)    | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| pow(x,y) | 返回x的y次幂               | atan(x)    | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| sqrt(x)  | 返回数的平方根             | atan2(x,y) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |

**`获取[n~m]之间的随机整数`**

包含m，n：Math.round(Math.random()*(m-n)+n);

包含n，不包含m ：parseInt(Math.random()*(m-n)+n);

不包含n，包含m：Math.floor(Math.random()*(m-n)+n)+1

不包含n和m ：Math.round(Math.random()*(m-n)+n+1) 或者是 Math.ceil(Math.random()*(m-n)+n+1)

### Number对象

>Number对象是原始数值的包装对象
>
>创建语法：
>
>```javascript
>var myNum=new Number(value);
>var myNum=Number(value);
>```

#### Number对象属性

> constructor:返回对创建此对象的Number函数的引用
>
> Max_VALUE:可表示的最大数
>
> MIN_VALUE:可表示的最小数
>
> NaN:非数字值
>
> NEGATIVE_INFINITY:负无穷大，溢出时返回该值
>
> POSRITIVE_INFINITY：正无穷大，溢出时返回该值
>
> prototype:使您有能力向对象添加属性和方法

#### Number对象方法

**toString()**：把数字转换为字符串，使用指定的基数 （2~36之间的整数）

```javascript
var num=2;
console.log(num.toString(2));//10
```

**toFixed()**：可把Number四舍五入为指定小数位数的数字

```javascript
var num=36.678;
console.log(num.toFixed(2));//36.68
//参数可以是0~20之间的值（包括0和20）
```

**toExponential()**：把对象的值转换为指数计数法

**toPrecision()**：把数字格式化为指定的长度

### String对象

> String对象用于处理文本（字符串）
>
> 创建String对象的语法：
>
> ```javascript
> new String(s);
> String(s);	
> ```

#### String对象属性

> constructor：对创建改对象的函数的引用
>
> length:字符串的长度
>
> prototype:运行您向对象添加属性和方法

#### String对象方法

**charAt()**：返回在指定位置的字符

```javascript
stringObject.charAt(index)
//如果index不在0与string.length之间，该方法将返回一个空字符串
```

**charCodeAt()**：返回在指定的位置的字符的Unicode编码

```javascript
stringObject.charCodeAt(index)
//如果index是负数，或大于等于字符串的长度，则charCodeAt()返回NaN
var str="Hello world!"
console.log(str.charCodeAt(1))//101
```

**fromCharCode()** :从字符编码创建一个字符串

```javascript
console.log(string.fromCharCode(65,66,67))//ABC
```

**concat()**：用于连接两个或多个字符串

```javascript
stringObject.concat(stringX,stringX,...stringX)
//使用“+”运算符来进行字符串的连接运算通常会更简便一些
```

**indexOf()** :检索字符串

```javascript
stringObject.indexOf(searchvalue,formindex)
//未检索到则返回-1
```

**lastIndexOf()**: 返回一个指定字符串值最后出现的位置，在一个字符串中指定位置从后向前搜索

```javascript
stringObject.lastIndexOf(searchvalue,fromindex)
//未检索到则返回-1
```

**match()**：可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配

```javascript
stringObject.match(searchvalue)
stringObject.match(regexp)
//返回值存放匹配结果的数组
```

**replace()**：替换与正则表达式匹配的子串

```javascript
stringObject.replace(regexp/substr,replacement)
//一个新的字符串，是用replacement替换之后得到的
```

**search()** ：用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

```javascript
stringObject.search(regexp)
//返回值是stringObject中第一个与regexp想匹配的子串的起始位置，未找到返回-1
```

**slice()** :提取字符串的某个部分，并以新的字符串返回被提取的部分

```javascript
stringObject.slice(start,end)
//返回一个新字符串，start是开始位置，end为结束位置，截取部分包含start不包含end
```

**split()** :用于把一个字符串分割成字符串数组

```javascript
stringObject.split(separator,howmany);
```

**substr()**：从起始索引号提取字符串中指定数目的字符

```javascript
stringObject.substr(start,length)
//如果省略length那么将返回从指定位置截取到结尾的字符串
```



**substring()**：提取字符串中的两个指定的索引号之间的字符串





