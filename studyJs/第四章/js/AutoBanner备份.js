~function(){
    function AutoBanner(curEleId,ajaxURL,interval){
        this.banner=document.getElementById(curEleId);
        this.bannerInner=utils.firstChild(this.banner);
        this.bannerTip=utils.children(this.banner,"ul")[0];
        this.bannerLink=utils.children(this.banner,"a");
        this.bannerLeft=this.bannerLink[0];
        this.bannerRight=this.bannerLink[1];
        this.imgList=this.bannerInner.getElementsByTagName("img");
        this.divList=this.bannerInner.getElementsByTagName("div");
        this.oLis=this.bannerTip.getElementsByTagName("li");

        this.ajaxURL=ajaxURL;
        this.interval=interval;
        this.jsonData=null;
        this.autoTimer=null;
        this.step=0;

        return this.init();

    }
    AutoBanner.prototype={
        constructor:AutoBanner,
        getData:function(){
            var _this=this;
            var xhr=new XMLHttpRequest;
            xhr.open("get",this.ajaxURL+"?_="+Math.random(),false);
            xhr.onreadystatechange=function(){
                if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
                    _this.jsonData=utils.formatJSON(xhr.responseText);
                }
            }
            xhr.send(null);
        },
        bindData:function(){
            var str="",str2="";
            if(this.jsonData){
                for(var i=0,len=this.jsonData.length;i<len;i++){
                    var curData=this.jsonData[i];
                    str+="<div><img src='' trueImg='"+curData["img"]+"'></div>";
                    i===0?str2+="<li class='bg'></li>":str2+="<li></li>";
                }
            }
            this.bannerInner.innerHTML=str;
            this.bannerTip.innerHTML=str2;
        },
        lazyImg:function(){
            var _this=this;
            for(var i=0,len=this.imgList.length;i<len;i++){
                ~function(i){
                    var curImg=_this.imgList[i];
                    var oImg=new Image;
                    oImg.src=curImg.getAttribute("trueImg");
                    oImg.onload=function(){
                        curImg.src=this.src;
                        curImg.style.display="block";
                        if(i===0){
                            var curDiv=curImg.parentNode;
                            curDiv.style.zIndex=1;
                            zhufengAnimate(curDiv,{opacity:1},200);
                        }
                        oImg=null;
                    }
                }(i);
            }
        },
        autoMove:function(){
            if(this.step===(this.jsonData.length-1)){
                this.step=-1;
            }
            this.step++;
            this.setBanner();
        },
        setBanner:function(){
            for(var i=0,len=this.divList.length;i<len;i++){
                var curDiv=this.divList[i];
                if(i===this.step){
                    curDiv.style.zIndex=1;
                    zhufengAnimate(curDiv,{opacity:1},200,function(){
                        var curDivSib=utils.siblings(this);
                        for(var k=0,len=curDivSib.length;k<len;k++){
                            utils.css(curDivSib[k],"opacity",0);
                        }
                    })
                }
                utils.css(curDiv,"zIndex",0);
            }
            for(i=0,len=this.oLis.length;i<len;i++){
                var curLi=this.oLis[i];
                i===this.step?utils.addClass(curLi,"bg"):utils.removeClass(curLi,"bg");
            }
        },
        mouseEvent:function(){
            var _this=this;
            this.banner.onmouseover=function(){
                window.clearInterval(_this.autoTimer);
                _this.bannerLeft.style.display=_this.bannerRight.style.display="block";
            };
            this.banner.onmouseout=function(){
                _this.autoTimer=window.setInterval(function(){
                    _this.autoMove();
                },_this.interval)
                _this.bannerLeft.style.display=_this.bannerRight.style.display="none";
            }
        },
        tipEvent:function(){
            var _this=this;
            for(var i=0,len=this.oLis.length;i<len;i++){
                var curLi=this.oLis[i];
                curLi.index=i;
                curLi.onclik=function(){
                    _this.step=this.index;
                    _this.setBanner();
                }
            }
        },
        leftRight:function(){
            var _this=this;
            this.bannerLeft.onclick=function(){
                if(_this.step===0){
                    _this.step=_this.jsonData.length;
                }
                _this.step--;
                _this.setBanner();
            };
            this.bannerRight.onclick=function(){
                _this.autoMove();
            }
        },
        init:function(){
            var _this=this;
           this.getData();
           this.bindData();
           window.setTimeout(function(){
               _this.lazyImg();
           },500);
           this.autoTimer=window.setInterval(function(){
               _this.autoMove();
            },this.interval);
           this.mouseEvent();
           this.tipEvent();
           this.leftRight();
           return this;
        }
    }
    window.AutoBanner=AutoBanner;
}();