(function(){
    //->bind:给当前元素的某一个行为绑定方法(this问题和重复问题)
    function bind(curEle,evenType,evenFn){
        if("addEventListener" in document){
            curEle.addEventListener(evenType,evenFn,false);
            return;
        }
        var tempFn=function(){
            evenFn.call(curEle);
        };
        tempFn.photo=evenFn;
        if(!curEle["myBind"+evenType]){
            curEle["myBind"+evenType]=[];
        }
        var ary=curEle["myBind"+evenType];
        for(var i=0;i<ary.length;i++){
            var cur=ary[i];
            if(cur.photo===evenFn){
                return;
            }
        }
        ary.push(tempFn);
        curEle.attachEvent("on"+evenType,tempFn);
    }
    //unbind:给当前元素的某一个行为绑定方法
    function unbind(urEle,evenType,evenFn){
        if("removeEventListener" in document){
            curEle.removeEventListener(evenType,evenFn,false);
            return;
        }
        var ary=curEle["myBind"+evenType];
        if(ary && ary instanceof Array){
            for(var i=0;i<ary.length;i++){
                var cur=ary[i];
                if(cur.photo===evenFn){
                    curEle.datachEvent("on"+evenType,cur);//->移除事件池中的
                    ary.splice(i,1);//->移除
                    break;
                }
            }
        }
    }
    /*—————————————以下操作是解决顺序问题—————————————*/

    //on:把给当前元素某一个行为类型绑定的所有的方法都存放到自己定义的容器中
    function on(curEle,evenType,evenFn){
        if(!curEle["myEvent"+evenType]){
            curEle["myEvent"+evenType]=[];
        }
        var ary=curEle["myEvent"+evenType];
        for(var i=0;i<ary.length;i++){
            if(ary[i]===evenFn) {
                return;
            }
        }
        ary.push(evenFn);
        //->如果想在点击的时候执行run方法，我们需要把run方法添加到浏览器的内置事件池中
        //->每当执行一次on方法，都会重新的给当前元素绑定run方法，但是这里我们是使用了上面写的bind方法实现了绑定（bind方法解决了this和重复问题），所以不需要担心run重复问题
        bind(curEle,evenType,run);
    }
    //->run:是我们唯一给当前元素的某个行为在内置事件池中绑定的方法，当行为触发，执行run方法，我们在run中再分别把储存在自己容器中的所有的方法一次执行
    function run(e){
        e=e||window.event;
        //->为了后期每个绑定方法中使用事件对象方便，我们统一的把时间对象兼容处理掉
        var flag=e.target?true:false;
        if(!flag){
            e.target=e.srcElement;
            e.pageX=e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft);
            e.pageY=e.clientY+(document.documentElement.scrollTop||document.body.scrollTop);
            e.preventDefault=function(){
                e.returnValue=false;
            };
            e.stopPropagation=function(){
                e.cancelBubble=true;
            }
        }
        var ary=this["myEvent"+e.type];
        for(var i=0;i<ary.length;i++){
            var tempFn=ary[i];
            if(typeof tempFn==="function"){
                tempFn.call(this,e);//->因为在内置的事件池中绑定的方法执行的时候，this都是当前要操作的操作的元素，并且浏览器还会给其传递一个事件对象;而我们自己创建的容器中存储的所有的方法其实都相当于是要给当前元素绑定的事件，为了和内置的统一，我们也让其执行的时候this变为当前的元素，并且也给他传递一个事件对象
            }else{
                //->当前这一样是null，我们在把他移除
                ary.splice(i,1);
                i--;
            }

        }
    }

    //->off:在自定义的容器中，把需要删除的方法从容器中删除掉
    function off(curEle,evenType,evenFn){
        var ary=curEle["myEvent"+evenType];
        if(ary && ary instanceof Array){
            for(var i=0;i<ary.length;i++){
                var cur=ary[i];
                if(cur===evenFn){
                    //ary.splice(i,note);//为了防止塌陷问题，我们在删除的时候不要把数组中的每一个方法对应的索引进行改变,（数组长度就不能变），所以不能使用splice进行删除
                    ary[i]=null;
                    break;
                }
            }
        }
    }
    window.candyEvent={
        on:on,
        off:off
    }
})();