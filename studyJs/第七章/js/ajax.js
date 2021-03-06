~function(){
    function createXHR(){
        var xhr=null,
            flag=false;
        var ary=[
            function(){
                return new XMLHttpRequest;
            },
            function(){
                return new ActiveXObject("Microsoft.XMLHTTP");
            },
            function(){
                return new ActiveXObject("Msxml2.XMLHTTP");
            },
            function(){
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
        ];
        for(var i=0,len=ary.length;i<len;i++){
            var curFn=ary[i];
            try{
                xhr=curFn();
                //->本次循环获取的方法执行没有出现错误:说明此方法是我想要的，我们下一次直接执行这个小方法即可，这就需要我们吧creatXHR重写这个小方法(完成后不需要再重新判断下面的了，直接的退出循环即可)
                createXHR=curFn;
                flag=true;
                break;
            }catch(e){
                //->本次循环获取的方法执行出现错误：继续执行下一次循环
            }
        }
        if(!flag){
            throw new Error("your browser is not support ajax,please change your browser,try again!");
        }
        return xhr;
    }
    function ajax(options){
        var _default={
            url:"",
            type:"get",
            dataType:"json",
            async:true,
            data:null,
            getHead:null,
            success:null
        };
        for(var key in options){
            if(options.hasOwnProperty(key)){
                _default[key]=options[key];
            }
        }
        if(_default.type==="get"){
            _default.url.indexOf("?")>=0?_default.url+="&":_default.url.indexOf("?")>=0?_default.url+="?":
                _default.url+="_="+Math.random();
        }
        var xhr=createXHR();
        xhr.open(_default.type,_default.url,_default.async);
        xhr.onreadystatechange=function(){
            if(/^2\d{2}$/.test(xhr.status)){
                if(xhr.readyState===2){
                    if(typeof _default.getHead==="function"){
                        _default.getHead.call(xhr);
                    }
                }
                if(xhr.readyState===4){
                    var val=xhr.responseText;
                    if(_default.dataType==="json"){
                        val="JSON" in window?JSON.parse(val):eval("("+val+")");
                    }
                    _default.success &&_default.success.call(xhr,val);
                }
            }
        };
        xhr.send(_default.data);
    }
    window.ajax=ajax;
}();
/*
ajax({
    url:"data.txt",
    type:"get",
    dataType:"json",
    async:false,
    getHead:function(){
        //this->xhr当前AJAX对象
    },
    success:function(data){
        //this->xhr当前AJAX对象
        //data:我们从服务器获取的主体内容
    }

});*/
