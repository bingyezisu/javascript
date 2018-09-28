~function() {
    var zhufengEffect = {
        //匀速
        Linear: function(t,b,c,d){
            return c*t/d + b;
        },
        //指数衰减的反弹缓动
        Bounce: {
            easeIn: function(t,b,c,d){
                return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
            },
            easeOut: function(t,b,c,d){
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            easeInOut: function(t,b,c,d){
                if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
                else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
        },
        //二次方缓动(t^2)
        Quad: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t + b;
            },
            easeOut: function(t,b,c,d){
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            }
        },
        //三次方缓动(t^3)
        Cubic: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t*t + b;
            },
            easeOut: function(t,b,c,d){
                return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            }
        },
        //四次方缓动(t^4)
        Quart: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t*t*t + b;
            },
            easeOut: function(t,b,c,d){
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            }
        },
        //五次方缓动(t^5)
        Quint: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOut: function(t,b,c,d){
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            }
        },
        //正弦曲线的缓动(sin(t))
        Sine: {
            easeIn: function(t,b,c,d){
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOut: function(t,b,c,d){
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOut: function(t,b,c,d){
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            }
        },
        //指数曲线的缓动(2^t)
        Expo: {
            easeIn: function(t,b,c,d){
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOut: function(t,b,c,d){
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        //圆形曲线的缓动(sqrt(note-t^2))
        Circ: {
            easeIn: function(t,b,c,d){
                return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOut: function(t,b,c,d){
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            }
        },
        //超出范围的三次方缓动
        Back: {
            easeIn: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOut: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            },
            easeInOut: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            }
        },
        //指数衰减的正弦曲线缓动
        Elastic: {
            easeIn: function(t,b,c,d,a,p){
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOut: function(t,b,c,d,a,p){
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
            },
            easeInOut: function(t,b,c,d,a,p){
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            }
        }
    };
    //->effect支持一下的情况
    //note)如果传递进来的是个数字:0->liner note->Circ.easeInOut 2->Elastic.easeOut 3->Back.easeOut 4->Bounce.easeOut 5->Expo.easeIn
    //2)如果传递进来的是一个数组：move(curEle,target,duration,["Elastic","easeOut"])->zhufengEffect.Elastic.easeOut
    //3)如果不传递的话，默认就是用zhufengEffect.Linear匀速效果
    function move(curEle, target, duration,effect,callBack) {
        //->处理我们需要的动画效果
        var tempEffect=zhufengEffect.Linear;
        if(typeof effect==="number"){
            switch(effect){
                case 0:
                    tempEffect=zhufengEffect.Linear;
                    break;
                case 1:
                    tempEffect=zhufengEffect.Circ.easeInOut;
                    break;
                case 2:
                    tempEffect=zhufengEffect.Elastic.easeOut;
                    break;
                case 3:
                    tempEffect=zhufengEffect.Back.easeOut;
                    break;
                case 4:
                    tempEffect=zhufengEffect.Bounce.easeOut;
                    break;
                case 5:
                    tempEffect=zhufengEffect.Expo.easeIn;
            }
        }else if(effect instanceof Array){
            tempEffect=effect.length>=2?zhufengEffect[effect[0]][effect[1]]:zhufengEffect[effect[0]];
        }else if(typeof effect==="function"){
            //->我们的实际意义应该是：effect是不传递值的，传递进来的函数应该是回调函数的值，tempEffect还是默认的匀速公式即可
            callBack=effect;
        }
        window.clearInterval(curEle.zhufengTimer);
        //->根据target获取每一个方向的起始值begin和总距离change
        var begin = {}, change = {};
        for (var key in target) {
            //->key:方向，例如：top/left...
            if (target.hasOwnProperty(key)) {
                begin[key] = utils.css(curEle, key);
                change[key] = target[key] - begin[key];
            }
        }
        var time=0;
        curEle.zhufengTimer=window.setInterval(function(){
            time+=10;
            //->到达目标：结束动画，让当前元素的样式等于目标样式值
            if(time>=duration){
                utils.css(curEle,target);
                window.clearInterval(curEle.zhufengTimer);
                //->在动画结束的时候，如果用户把回调函数传递给我了，我就把用户传递的函数执行,不仅执行还让回调函数中的this变为当前要操作的元素
                //typeof callBack==="function"?callBack():null;
                callBack && callBack.call(curEle);
                return;
            }
            //->没到达目标：分别的获取每一个方向的当前位置，给当前元素设置样式即可
            for(key in target){
                if(target.hasOwnProperty(key)){
                    var curPos=tempEffect(time,begin[key],change[key],duration);
                    utils.css(curEle,key,curPos);
                }
            }
        },10)
    }
    window.zhufengAnimate=move;
}()