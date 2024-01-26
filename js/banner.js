$(document).ready(function(){
    var slidePosition=0;
    var $sliders=$(".banner-box"); 
    var $slide=$sliders.children(".div")
    var slideLength=0;
    var slideLength=$slide.length;
    var slideWidth=0;
    var $banner=$("banner").width()
    var $slideWidth=$slide.width();
    console.log("$banner : "+$banner)
    $auto=null
    function init(){
        slideWidth=$(".banner").width()
        $slide.css({
            width:slideWidth
        })
        $sliders.css({
            width:slideWidth*4
        })
    }
    init();

    console.log("방 이미지 갯수 : "+slideLength)
    $(window).resize(function(){
        init()
        $(".banner-box").css({
            left:-slideWidth*slidePosition
        })
    })

    // $(".room-img>.room:gt(0)").hide();
    function slideEvent(){
       function slideMove(){
            $(".banner-box").stop().animate({
                left:-$slideWidth*slidePosition
            })
        }
       function nextPlay(){
            if(slidePosition==slideLength-1){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            slideMove();
        }
       function prevPlay(){
            if(slidePosition=0){
                slidePosition=slideLength-1;
            }else{
                slidePosition--;
            }
            slideMove();
        }
       $(".nextbt").click(function(){
            nextPlay();
        })
        $(".prevbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
        }
        autoPlay();
    }
    slideEvent();
})