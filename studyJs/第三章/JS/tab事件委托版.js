~function(){
    /*
    * tabChange:封装一个选项卡的插件，只要大结构保证统一，以后实现选项卡的功能，只需要调取这个方法执行即可实现
    * ->container:当前要实现选项卡的这个容器
    * ->defaultIndex:默认选中项的索引
    * */
    function tabChange(container,defaultIndex){
        var tabFirst=utils.firstChild(container),oLis=utils.children(tabFirst),divList=utils.children(container,"div");
        //->让defaultIndex对应的页卡有选中的样式
        defaultIndex=defaultIndex||0;
        utils.addClass(oLis[defaultIndex],"select");
        utils.addClass(divList[defaultIndex],"select");
        //->使用事件委托优化我们的点击操作
        tabFirst.onclick=function(e){
            e=e||window.event;
            e.target=e.target||e.srcElement;
            //->说明我当前点击的是Li标签
            if(e.target.tagName.toLowerCase()==="li"){
                detailFn.call(e.target,oLis,divList)
            }
        }
    }
    function detailFn(oLis,divList){
        //this->当前点击的这个li
        var index=utils.index(this);
        utils.addClass(this,"select");
        for(var i=0;i<divList.length;i++){
            i===index?utils.addClass(divList[i],"select"):(utils.removeClass(divList[i],"select"),utils.removeClass(oLis[i],"select"));
        }
    }
    window.tabChange=tabChange;
}()