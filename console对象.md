# console对象

> **console** 对象是Javascript的原生对象，可以输出各种信息用来调试程序，而且提供很多额外的方法，供开发者调用。它的常见用途有两个：
>
> - 显示网页代码运行是的错误信息。
> - 提供一个命令行接口，用来与网页代码互动。

## 开发者工具面板说明:

![1529657020419](C:\Users\WANGXU~1\AppData\Local\Temp\1529657020419.png)

>  - **Elements** ：用来调试网页的html源码和css代码。
>  - **Resourcess**：查看网页加载的各种资源文件（比如代码文件，字体文件，css文件等），以及在硬盘上创建的各种内容（比如本地缓存，Cookie，Local Storage等）。
>  - **NetWork**：查看网页的HTTP通信情况。
>  - **Sources**：调试JavaScript代码。
>  - **Timeline**：查看各种网页行为随时间变化的情况。
>  - **Profiles**：查看网页的性能情况，比如CPU和内存消耗。
>  - **Audits**：提供网页优化建议。
>  - **Console**：用来运行Javascript命令。





-----------------------------------------------------------------------



## console对象的方法

### 1、log(),info(),debug()

> **console.log**方法用于在console窗口输出信息。它可以接收多个参数，将它们的结果链接起来输出。当第一个参数使用了格式占位符，console.log方法将以此用后面的参数替换占位符，然后在输出。
>
> **console.info()** 和 **console.debug()** 都是console.log方法的别名，用法完全一样。只不过console.info方法会在输出信息的前面，加上一个蓝色图标。
>
> > **占位符**：
> >
> > - %s：字符串
> > - %d：整数
> > - %i：整数
> > - %f：浮点数
> > - %o：对象的链接
> > - %c：css格式字符串
>
> 
>
> ```javascript
> console.log(1);//1
> 
> console.log('%s + %s = %s',1,1,2);//1+1=2
> 
> var num=11*9;
> var color="red";
> console.log("%d %s balloons",num,color);//99 red ballons;
> 
> console.log("%cThis text is styled!","color:red;background:yellow;")
> //使用%c占位符，对应的参数必须是css语句，用来对输出内容进行css渲染。
> 
> //console对象的所有方法都可以被覆盖，可以按照自己的需要定义。
> ['log', 'info', 'warn', 'error'].forEach(function(method) {
>   console[method] = console[method].bind(
>     console,
>     new Date().toISOString()
>   );
> });
> console.log("瞧，我在前面添加了现在的时间！");
> //2018-06-22T09:27:44.171Z 2018-06-22T09:27:57.529Z 瞧，我在前面添加了现在的时间！
> 
> ```

### 2、warn()，error()

> **warn** 和 **error** 方法也是输出信息，他们与log方法不同之处在于，warn方法输出信息时在前面加一个黄色三角，表示警告；error方法输出信息时在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。其他用法都一样。
>
> 本质上，log方法是写入标准输出（stdout），wran和error方法是写入标准错误（stderr）。
>
> ![1529660652829](C:\Users\WANGXU~1\AppData\Local\Temp\1529660652829.png)

### 3、table()

> 对于某些复合类型的数据，console.table方法可以将其转为表格显示。
>
> ![1529660572544](C:\Users\WANGXU~1\AppData\Local\Temp\1529660572544.png)

### 4、count(label)

>记录count()调用次数，并输出到控制台。count()在不同的标签里被调用，每次返回结果都是单独增加（不会累加）。
>
>![1529660899477](C:\Users\WANGXU~1\AppData\Local\Temp\1529660899477.png)

### 5、dir()

> **dir** 方法用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
>
> ![1529661164564](C:\Users\WANGXU~1\AppData\Local\Temp\1529661164564.png)

###6、assert(expresson,object)

> **assert**方法接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果
>
> ```javascript
> var list =  document.querySelector('#myList');
> console.log(list.childNodes.length < 10);
> console.assert(list.childNodes.length < 10, "List item count is >= 10");
> ```
>
> ![1529653426193](C:\Users\WANGXU~1\AppData\Local\Temp\1529653426193.png)

### 7、time(),timeEnd()

> 这两个方法用于计时，可以算出一个操作所花费的准确时间。**time** 方法表示计时开始，timeEnd方法表示计时结束。
>
> 

## console.clear()

> 清除控制台。但是，在Preserve log开启的状态下，当一些框架调用console.clear()时，它不会做任何事。
>
> ![1529653784180](C:\Users\WANGXU~1\AppData\Local\Temp\1529653784180.png)

