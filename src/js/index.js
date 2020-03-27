$(function () {

    var k = $(window).height();   //屏幕的高度
    var flag2 = false;           //控制动画
    var flag3 = false;
    init_restart();
    $(".next").click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    // $('.next').fadeIn();
    // $('.next').fadeOut();
    $('#fullpage').fullpage({  //   fullpage 方法里面接受json对象形式

        "navigation" : true, 
        // "navigationPosition" : 'top',
        "scrollingSpeed" : 1500,

        
        // 回调函数

        afterLoad : function(anchorLink, index){
            
            // 动画执行一遍 也就是这个flag2控制
            if(index == 1){
                $('.next').fadeIn();
            }
            if(index == 2 ){
                $('.next').fadeOut();
                $(".search").show().animate({"right" : 370,}, 1500,'easeOutBack',function (){
                    // 方块完成之后，沙发2个字显示
                    $(".search-words").animate({"opacity" : 1},500,function(){
                        $(".search").hide();
                        // 图片显示之后再去缩放到右上角
                        $(".search02-1").show().animate({"height":30, "right" : 250, 'bottom' : 452},1000,);
                        // 同时沙发变大
                        $(".goods-02").show().animate({"height" : 218},1000,'easeOutBounce',function(){
                            // // 也就是这个 沙发需要显示
                            // $(".shirt-02").show();
                            flag2 = true;      // 表示动画完成
                        });

                        //白色文字渐渐显示

                        $(".words-02").animate({"opacity" : 1},500,function(){
                            $('.next').fadeIn();
                        })
                    })
                },function(){
                    $('.next').fadeIn();
                });
            }
            if(index == 3){

            }

        },
        //刚开始滚动屏幕就触发的回调函数 onLeave
        onLeave : function(index, nextIndex, direction){
            $('.next').fadeOut();
            if(index == 2 && nextIndex == 3 ){
                // 第二屏幕往第三屏幕跑的时候 沙发下落
                // 沙发往第三屏幕走,走的距离就是当前屏幕高度减去沙发具体底部的距离
                // 也就是当前屏幕减去 - 250
                $(".shirt-02").show().animate({"bottom" : -(k - 250), "width":207, 'left':260,},2000,function(){
                    $(".cover").show();
                    $(".img-01-a").animate({"opacity" : 1},1000,function(){
                        $(".btn-a").animate({"opacity" : 1},1000,function(){
                            $('.next').fadeIn();
                        });
                    });
                    
                });   
            }
            
            // 第三个屏幕到第四个过渡
            if(index == 3 && nextIndex == 4 ){
                $(".shirt-02").hide();
                $(".t1f").show().animate({"bottom" : -(k - 250 + 48), 'left' : 248},2000,function(){
                    flag3 = true;
                    $('.t1f').hide();
                    $('.car-img').show();
                    $(".car").animate({"left": "150%"},2000,'easeInElastic',function(){
                        $(".note").animate({"opacity" : 1},1000,function(){
                            $(".words-04-a").animate({"opacity" : 1},1000)
                            $('.note-img').animate({"opacity" : 1},1000,function(){
                                $('.next').fadeIn();
                            });
                        });
                        
                    });
                });
            }
            // 第四个屏幕到第五个屏幕
            if(index == 4 && nextIndex == 5){
                // 小手
                
                $(".hand-05").animate({'bottom':0},2500,function(){
                    // 鼠标
                    $(".mouse-05-a").animate({"opacity" : 1},1500);
                    $(".t1f-05").animate({'opacity': 1},5);
                    $('.t1f-05').animate({'bottom' : 70},1200,'easeOutBounce',function(){
                        $(".order-05").animate({'bottom' : 390},800,'easeOutBounce',function(){
                            // 给文字加上效果
                            $(".words-05").addClass("words-05-a");
                           
                            $('.next').fadeIn();
                            
                        });
                    });
                });
            }
            // 第5个屏幕到第6个屏幕
            if(index == 5 && nextIndex == 6){
                // 500这个是box盒子的botttom距离
                $(".t1f-05").animate({"bottom" : -(k-500),'left':'40%','width':65},1500,function(){
                    $(this).hide();
                });
                $(".box-06").animate({'left' : '38%'},1500,function(){
                    $(this).animate({'bottom' : '40px'},500,function(){
                        $(this).hide();

                        // 背景移动的过程
                        $('.section6').animate({'backgroundPositionX' : '100%'},4000,function(){
                            $(".man-06").animate({'height' : '305px','bottom':'116px'},1000,function(){
                                $(this).animate({'right' : 500},500,function(){
                                    // 模拟打开门
                                    $('.door-06').animate({'opacity': 1},400,function () { 
                                        $(".women-06").animate({'opacity': 1},400,function(){
                                            $(this).animate({"height" : 305, "right" : 350},500,function(){
                                                $(".popp-06").animate({'opacity': 1},400,function(){
                                                    $('.next').fadeIn();
                                                });
                                            });
                                        })
                                     })
                                });
                            });
                            
                        })
                        // 光的速度
                        $(".words-06").show().animate({'left' : '30%'},2000,'easeOutBounce');
                        $(".pop-06").animate({'opacity': 1},1000);
                    });
                });
            }


            // 第6个屏幕到第7个屏幕
            if(index == 6 && nextIndex == 7){
                var timer = setTimeout(function(){
                    $(".star").animate({"width" : 500},2500,function(){
                        $(".good-07").animate({"opacity" : 1,"width":72},500,'easeOutBounce',function(){
                            $('.next').fadeIn();
                        });
                    });  
                },2000);
                
            }

            // 第7个屏幕到第8个屏幕
            if(index == 7 && nextIndex == 8){
                    $('.next').fadeOut();
            
            }

            //这是第8屏幕动画
            $(".beginShoping").mouseenter(function (event){
                console.log(222);
                $(".btn-08-a").show();
            }).mouseleave(function(event){
                console.log(3333)
                $(".btn-08-a").hide();
            })
            // 鼠标跟随收动
            $(document).mousemove(function(e){
                var x = e.pageX - $('.hand-08').width() / 2,     //获取鼠标在页面中的距离x
                    y = e.pageY + 10;
                
                $(".hand-08").css({"left" : x, "top" : Math.max(k-$('.hand-08').height(),y)});
            })
        
            
        }

    });

    //再来一次  返回页面顶部
    $(".again-08").click(function(){
                
        $.fn.fullpage.moveTo(1);
        init_restart();
    })

    // 所有的动画都复原  就是原来没有看过的样子
    // 核心的原理就是 (做动画的元素 清除行内样式)
    function init_restart(){
        // 把移动的盒子添加move类名
        $("img,.move").attr("style", "");
        
    }
    
});