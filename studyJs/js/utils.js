//->使用惰性思想（JS高阶编程技巧之一）来封装我的常用方法库：第一次在给utils赋值的时候我们就已经把兼容处理好了，把最后的结果存放在flag变量中，以后再每一个方法中，只要是IE6~8不兼容的，我们不需要重新的检测，只需要使用falg的值即可
var utils=(function(){
    //->flag这个变量不销毁，存储的是判断当前浏览器是否兼容getComputedStyle，兼容的话是标准浏览器，但是如果flag=flase说明当前浏览器是IE6~8
    var flag="getComputedStyle" in window;
    //->listToArray:实现将类数组转换为数组
    function listToArray(likAry){
        if(flag){
            return  Array.prototype.slice.call(likAry,0);
        }
        var ary=[];
        for(var i=0;i<likAry.length;i++) {
            ary[ary.length] = likAry[i];
        }
        return ary;
    }
    //=>formatJSON:把JSON格式的字符串转换为JSON格式的对象
    function formatJSON(jsonStr){
        return "JSON" in window ? JSON.parse(jsonStr):eval("("+jsonStr+")");
    }
    //=>offset:获取指定元素到body的偏移量（左偏移和上偏移）
    function offset(curEle){
        var totalLeft=null,totalTop=null,par=curEle.offsetParent;
        totalLeft+=curEle.offsetLeft;
        totalTop+=curEle.offsetTop;
        while(par){
            if(navigator.userAgent.indexOf("MSIE 8.0")===-1) {
                totalLeft += par.clientLeft;
                totalTop += par.clientTop;
            }
            totalLeft+=par.offsetLeft;
            totalTop+=par.offsetTop;
            par=par.offsetParent;
        }
        return {left:totalLeft,top:totalTop}
    }
    //=>win:编写一个有关于操作浏览器盒子模型的方法
    function win(attr,value){
        if(typeof value === "undefined"){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=value;
        document.body[attr]=value;
    }
    //=>getCss:获取css样式值
    function getCss(attr){
        var val=null,reg=null;
        if(flag){
            val=window.getComputedStyle(this,null)[attr];
        }else{
            if(attr==="opacity"){
                val=this.currentStyle["fliter"];
                reg=/^alpha\(opacity=(\d+(\.\d+)?)\)$/i;
                val=reg.test(val)?reg.exec(val)[1]/100:1;
            }else{
                val=this.currentStyle[attr];
            }

        }
        reg=/^-?\d+(\.\d+)?(px|pt|rem|em)?$/i;
        return reg.test(val) ? parseFloat(val) : val;
    }
    //->children:获取curEle下所有的元素子节点（兼容所有的浏览器），如果传递了tagName，可以在获取的集合中进行二次筛选，把指定标签名的获取到
    function children(curEle,tagName){
        var ary=[];
        if(!flag){
            var nodeList=curEle.childNodes;
            for(var i=0,len=nodeList.length;i<len;i++){
                var curNode=nodeList[i];
                curNode.nodeType===1?ary[ary.length]=curNode:null;
            }
            nodeList=null;
        }else{
            ary=this.listToArray(curEle.children);
        }
        if(typeof tagName==="string"){
            for(var k=0;k<ary.length;k++){
                var curEleNode=ary[k];
                if(curEleNode.tagName.toLowerCase()!==tagName.toLowerCase()){
                    ary.splice(k,1);
                    k--;
                }
            }
        }
        return ary;
    }
    //->prev:获取上一个哥哥元素节点
    //->首先获取当前元素的上一个哥哥节点，判断是否为元素节点，不是的话基于当前的继续找上面的哥哥节点...一直找到哥哥元素节点为止，如果没有哥哥元素节点，返回null即可
    function prev(curEle){
        if(flag){
            return curEle.previousElementSibling;
        }
        var pre=curEle.previousSibling;
        while(pre && pre.nodeType!==1){
            pre=pre.previousSibling;
        }
        return pre;
    }
    //->next:获取下一个弟弟元素节点
    function next(curEle){
        if(flag){
            return curEle.nextElementSibling;
        }
        var nex = curEle.nextSibling;
        while (nex && nex.nodeType !== 1) {
            nex = nex.nextSibling;
        }
        return nex;
    }
    //->prevAll:获取所有的哥哥元素节点
    function prevAll(curEle){
        var ary=[];
        var pre=this.prev(curEle);
        while(pre){
            ary.unshift(pre);
            pre=this.prev(pre);
        }
        return ary;
    }
    //->nextAll:获取所有的弟弟元素节点
    function nextAll(curEle){
        var ary=[];
        var nex=this.next(curEle);
        while(nex){
            ary.push(nex);
            nex=this.next(nex);
        }
        return ary;
    }
    //->sibling:获取相邻的两个元素节点
    function sibling(curEle){
        var pre=this.prev(curEle);
        var nex=this.next(curEle);
        var ary=[];
        pre?ary.push(pre):null;
        nex?ary.push(nex):null;
        return ary;
    }
    //->siblings:获取所有的兄弟元素节点
    function siblings(curEle){
        return this.prevAll(curEle).concat(this.nextAll(curEle))
    }
    //->index:获取当前元素的索引
    function index(curEle){
        return this.prevAll(curEle).length;
    }
    //firstChild:获取第一个元素子节点
    function firstChild(curEle){
        var chs=this.children(curEle);
        return chs.length>0?chs[0]:null;
    }
    //lastChild:获取最后一个元素子节点
    function lastChild(curEle){
        var chs=this.children(curEle);
        return chs.length>0?chs[chs.length-1]:null;
    }
    //->append:向指定容器的末尾追加元素
    function append(newEle,container){
        container.appendChild(newEle);
    }
    //->prepend:向指定容器的开头追加元素->把新的元素添加到容器中第一个子元素节点的开头位置
    function prepend(newEle,container){
        var fir=this.firstChild(container);
        if(fir){
            container.insertBefore(newEle,fir);
            return;
        }
        container.appendChild(newEle)
    }
    //->insertBefore:向容器中指定元素的前面追加
    function insertBefore(newEle,oldEle){
        oldEle.parentNode.insertBefore(newEle,oldEle);
    }
    //->insertAfter:向容器中指定元素的前面追加->相当于追加oldEle弟弟元素的前面,如果弟弟元素不存在，也就是当前元素已经是最后一个了，我们把最新的元素放在末尾即可
    function insertAfter(newEle,oldEle){
        var nex=this.next(oldEle);
        if(nex){
            oldEle.parentNode.insertBefore(newEle,nex);
            return;
        }
        oldEle.parentNode.appendChild(newEle);
    }
    //->hasClass:验证当前元素中是否包含className这个样式类名
    function hasClass(curEle,className){
        //curEle.className ->"box bg"
        var reg=new RegExp("(^| +)"+className+"( +|$)");
        return reg.test(curEle.className);
    }
    //->addClass:给元素增加样式类名
    function addClass(curEle,className){
        var ary=className.replace(/(^ +| +$)/g,"").split(/ +/g);
        for(var i=0,len=ary.length;i<len;i++){
            var curName=ary[i];
            if(!this.hasClass(curEle,curName)){
                curEle.className+=" "+curName;
            }
        }
    }
    //removeClass:给元素移除样式类名
    function removeClass(curEle,className){
        var ary=className.replace(/(^ +| +$)/g,"").split(/ +/g);
        for(var i=0,len=ary.length;i<len;i++){
            var curName=ary[i];
            if(this.hasClass(curEle,curName)){
                var reg=new RegExp("(^| +)"+curName+"( +|$)","g");
                curEle.className=curEle.className.replace(reg," ");
            }
        }
    }
    //->getElementsByClass:通过元素的样式类名获取一组元素集合
    function getElementsByClass(strClass,context){
        context=context||document;
        if(flag){
            return this.listToArray(context.getElementsByClassName(strClass));
        }
        //Ie6~8
        var ary=[];
        var strClassAry=strClass.replace(/(^ +| +$)/g,"").split(/ +/g);
        var nodeList=context.getElementsByTagName("*");
        for(var i=0,len=nodeList.length;i<len;i++){
            var curNode=nodeList[i];
            var isOk=true;
            for(var k=0;k<strClassAry.length;i++){
                var reg=new RegExp("(^| +)"+strClassAry[k]+"( +|$)");
                if(!reg.test(curNode.className)){
                    isOK=false;
                    break;
                }
            }
            if(isOk){
                ary[ary.length]=curNode;
            }
        }
        return ary;
    }
    //->setCss:给当前元素的某一个样式属性设置值（增加在行内样式上的）
    function setCss(attr,value){
        if(attr==="float"){
            this["style"]["cssFloat"]=value;
            this["style"]["styleFloat"]=value;
            return;
        }
        if(attr==="opacity"){
            this["style"]["opacity"]=value;
            this["style"]["filter"]="alpha(opacity="+value*100+")";
            return;
        }
        var reg=/^(width|height|top|bottom|left|right|((margin|padding)(Top|Bottom|left|right)?))$/;
        if(reg.test(attr)){
            if(!isNaN(value)){
                value+="px";
            }
        }
        this["style"][attr]=value;
    }
    //->setGroupCss:给当前元素批量的设置样式属性值
    function setGroupCss(options){
        //->通过检测options的数据类型，如果不是一个对象，则不能进行批量的设置
  /*      options=options||0;
        if(options.toString()!=="[object Object]"){
            return;
        }*/
        for(var key in options){
            if(options.hasOwnProperty(key)){
                setCss.call(this,key,options[key]);
            }
        }
    }
    //->css:此方法实现了获取，单独设置，批量设置元素的样式值
    function css(curEle){
        var argTwo=arguments[1],ary=Array.prototype.slice.call(arguments,1);
        if(typeof argTwo==="string"){
            if(typeof arguments[2]==="undefined"){
                return getCss.apply(curEle,ary);
            }
            setCss.apply(curEle,ary);
        }
        argTwo=argTwo||0;
        if(argTwo.toString()==="[object Object]"){
            //->批量设置样式属性值
            setGroupCss.apply(curEle,ary);
        }
    }

    //->把外界需要使用的方法暴露给utils
    return {
        listToArray:listToArray,
        formatJSON:formatJSON,
        offset:offset,
        win:win,
        children:children,
        prev:prev,
        next:next,
        prevAll:prevAll,
        nextAll:nextAll,
        sibling:sibling,
        siblings:siblings,
        index:index,
        firstChild:firstChild,
        lastChild:lastChild,
        append:append,
        prepend:prepend,
        insertBefore:insertBefore,
        insertAfter:insertAfter,
        hasClass:hasClass,
        addClass:addClass,
        removeClass:removeClass,
        getElementsByClass:getElementsByClass,
        css:css
    }
})();
