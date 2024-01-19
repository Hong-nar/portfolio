$(document).ready(function(){
    /* *************************************************************************** */
     //브라우저의 높이 변수 섹션의 높이로 활용
     // 창의 높이를 설정할 변수와 너비를 설정하는 변수를 만든다.
     var winHeight=0;
     var windowWidth;
      
    //  슬라이더 변수

    // 터치 변수 
    function $wh(){
        winHeight=$(window).height();
        windowWidth=$(window).width();
        $(".section").css({
            height:winHeight
        });
        $("section").eq(0).css({
            height:winHeight
        })
    }

    // 브라우저의 높이값 얻기 위한 함수
    function wh(){
        winHeight=$(window).height();
        windowWidth=$(window).width();
        $(".section").css({
            height:winHeight
        })
    }
    wh();
    
    // 높이 너비 함수 실행
    $wh()
    
    /* *************************************************************************** */
    
      // 브라우저의 높이가 변경되면 처리할 재 설정
      $(window).resize(function(){
        wh();
        wheel();
        $("html,body").stop().amimate({
            scrollTop:winHeight*activeIndex
        },0)
      })

    /* *************************************************************************** */
    // 헤더 네비, 사이드 네비 구성 처리 및 
    var $navBool=true; // 토글
    $(".navBt").click(function(){
        if($navBool){ //true - 숨겨져 있다.
            $(this).addClass("bt-background")
            $(".nav-list").addClass("nav-position")
            $navBool=false;
        }else{
            $(this).removeClass("bt-background")
            $(".nav-list").removeClass("nav-position")
            $navBool=true;
        }
    })
    // 스크롤 애니메이션(데스크탑 header)
    $(window).scroll(function(){
        $scrollTop=$(window).scrollTop()
        if($scrollTop<70){
            $("header").removeClass("topHeader")
        }else{
            $("header").addClass("topHeader")
        }
    })
    // 해시 애니메이션
    $(".nav-list a").each(function(index){
        $(".nav-list a").click(function(){
            $hash=$(this.hash).offset().top
            $("html,body").stop().animate({
                scrollTop:$hash
            })
            $(".nav-list a").removeClass("clickActive")
            $(this).addClass("clickActive")
            $(".nav-list").removeClass("nav-position")
            $(".navBt").removeClass("bt-background")
            $navBool=true;
            $(".side-nav a").removeClass("side-active")
            $(".side-nav a").eq(index).addClass("side-active")
        })
    })
    $(".side-nav a").each(function(index){
        $(this).click(function(){
            $hash=$(this.hash).offset().top
            $("html,body").stop().animate({
                scrollTop:$hash
            })
            $(".side-nav a").removeClass("side-active")
            $(this).addClass("side-active")
            $(".nav-list a").removeClass("clickActive")
            $(".nac-list a").eq(index).addClass("clickActive")
        })
    })

    /* *************************************************************************** */
    // 활성/비활성
    
    // //////////////////////////////////////////////////////////////////
    // 스킬

    // 애니메이션
    
    // //////////////////////////////////////////////////////////////////////
    //휠 함수
    var moveTop;
    function wheel(){
        $(".section").each(function(index){
            $(this).on("DOMMouseScroll mousewheel", function(e){
                console.log("휠이 동작되고 있어요")
                if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                    console.log("휠을 올리고 있어요")
                    if($(this).prev() != undefined){
                        moveTop=$(this).prev().offset().top;
                        activeIndex=index-1;
                        // 휠을 올렸을 때
                        if(moveTop<$(".section").eq(1).offset().top){
                            $("header").removeClass("topHeader")
                        }
                        $(".nav-list a").eq(index).removeClass("clickActive")
                        $(".nav-list a").eq(index-1).addClass("clickActive")
                        $(".side-nav a").eq(index).removeClass("side-active")
                        $(".side-nav a").eq(index-1).addClass("side-active")
                    }
    
                }else{
                    console.log("휠을 내리고 있어요")
                    // 다음요소를 찾는다, 다음요소의 top의 값을 가지고 오는 작업
                    if($(this).next() != undefined ){
                        moveTop=$(this).next().offset().top;
                        activeIndex=index+1;
                        console.log("다음요소의 탑의 값 : "+moveTop)
                        if(moveTop>$(".section").eq(1).offset().top){
                            $("header").addClass("topHeader")
                        }
                        $(".nav-list a").eq(index).removeClass("clickActive")
                        $(".nav-list a").eq(index+1).addClass("clickActive")
                        $(".side-nav a").eq(index).removeClass("side-active")
                        $(".side-nav a").eq(index+1).addClass("side-active")
                    }
                }
                // 요소의 애니메이션을 처리 (스크롤바의 탑의 위치를 가지고 애니메이션)
                $("html,body").stop().animate({
                    scrollTop:moveTop
                },800)
            }) // 휠을 올렸다 내렸다를 판단하는 구역
        })
    }
    wheel();
    /* *************************************************************************** */
})//jqeuery 끝
    
    
    