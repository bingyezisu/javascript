var utils={
    //->listToArray:实现将类数组转换为数组
    listToArray:function(likAry){
        var ary=[];
        try{
            ary=Array.prototype.slice.call(likAry);
        }catch(e){
            for(var i=0;i<likAry.length;i++){
                ary[ary.length]=likAry[i];
            }
        }
        return ary;
    },
    //=>jsonParse:把JSON格式的字符串转换为JSON格式的对象
    jsonParse:function(str){
        var jsonObj=null;
        try{
           jsonObj=JSON.parse(str);
        }catch(e){
            jsonObj=eval("("+str+")");
        }
        return jsonObj;
    },
    //=>win:编写一个有关于操作浏览器盒子模型的方法
    //如果只传递了attr没有传递value，默认的意思是获取样式值
    //如果两个参数都传递了，意思是设置某一个样式属性值
   win:function (attr,value){
        if(typeof value === "undefined"){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=value;
        document.body[attr]=value;
    },
    //=>getCss:获取css样式值
    /*
    * curEle:需要获取css样式的元素名
    * attr:需要获取的值的属性名成
    * */
    getCss: function (curEle,attr){
        var val=null,reg=null;
        if("getComputedStyle" in window){
            val=window.getComputedStyle(curEle,null)[attr];
        }else{
            if(attr==="opacity"){
                val=curEle.currentStyle["fliter"];
                reg=/^alpha\(opacity=(\d+(\.\d+)?)\)$/i;
                val=reg.test(val)?reg.exec(val)[1]/100:1;
            }else{
                val=curEle.currentStyle[attr];
            }

        }
        reg=/^-?\d+(\.\d+)?(px|pt|rem|em)?$/i;
        return reg.test(val) ? parseFloat(val) : val;
    },
    //=>offset:获取指定元素到body的偏移量（左偏移和上偏移）
    offset:function offset(curEle){
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
}