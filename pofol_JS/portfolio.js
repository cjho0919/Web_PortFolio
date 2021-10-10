// Welcome to my portfolio 설정
$("document").ready(function(){
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
    loop: true
    });

    typewriter.typeString('Welcome to my portfolio')
    .pauseFor(1000)
    .deleteAll()
    .deleteChars()
    .start();
    $("#js-rotating").Morphext({
        animation: "bounceIn",
        separator: ",",
        speed: 10000,
        complete: function () {
        }
    });

// progressbar

function pro(id, per){
    let pro = new ProgressBar.Line(id,{
        strokeWidth: 3,
        easing: "easeInOut",
        duration: 1400,
        color: "#F1D258",
        trailWidth: 3,
        trailColor: "#ededed",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        },
        text: {
            style: {
                fontSize: ".8vw",
                fontFamily: "'Cairo', sans-serif",
                position: "absolute",
                right: "3px",
                bottom: "-6px",
                color: "#000",
                fontWeight: "bold"
            }
        }
    })
    pro.animate(per)
}

// progressbar

    // 새로고침시 위치 설정
    // window.onload = function() {
    //     setTimeout (function () {
    //         scrollTo(200,200);

    //     },100);
    // }

    // top 버튼 위치 속도 설정
    $(".aside").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1000)
    })

    // 스크롤 시 상단 메뉴바 위치 설정
    let pro_chk = false;
    let pos2 = 0;
    let pos = 0;
    $(window).scroll(function(){
        pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 100){
            $(".nav").addClass("on")
        }else{
            $(".nav").removeClass("on")
        }

        if(pos >= 300){
            $(".aside").show();
            $(".indicator").fadeIn();
        }else{
            $(".aside").hide();
            $(".indicator").fadeOut();
        }



        if(pos >= $(".section").eq(4).offset().top-50){
            $(".nav ul li").removeClass("on").eq(4).addClass("on")
            $(".indicator ul li").removeClass("on").eq(4).addClass("on")
        }else if(pos >= $(".section").eq(3).offset().top-100 && pos < $(".section").eq(4).offset().top){
            $(".nav ul li").removeClass("on").eq(3).addClass("on")
            $(".indicator ul li").removeClass("on").eq(3).addClass("on")
        }else if(pos >= $(".section").eq(2).offset().top-100 && pos < $(".section").eq(3).offset().top){
            $(".nav ul li").removeClass("on").eq(2).addClass("on")
            $(".indicator ul li").removeClass("on").eq(2).addClass("on")
        }else if(pos >= $(".section").eq(1).offset().top-100 && pos < $(".section").eq(2).offset().top){
            $(".nav ul li").removeClass("on").eq(1).addClass("on")
            $(".indicator ul li").removeClass("on").eq(1).addClass("on")
        }else{
            $(".nav ul li").removeClass("on").eq(0).addClass("on")
            $(".indicator ul li").removeClass("on").eq(0).addClass("on")
        }

        // 어빌리티 게이지 및 스크롤시 나타나게설정
        if(pos >= $(".progress-area").offset().top-925){
            if(pro_chk)return;
            pro("#html", "0.8")
            pro("#css", "0.8")
            pro("#js", "0.7")
            pro("#java", "0.7")
            pro("#GitHub", "0.6")
            pro("#op", "0.6")
            pro_chk = true
        }


        

    })  // scroll end
    $(".indicator ul li, .nav ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : $(".section").eq(i).offset().top
        }, 1000)
    })
    
    // 이미지 확대 해주는 설정 포폴2
    const $img = $(".item");
    const $window = $(".window");
    const $window_content = $(".window-content");
    const img_list = [
        "img/ERD.png",
        "img/Usecase diagram.png",
        "img/실행 화면.png",
    ]

    // 이미지 확대 해주는 설정 포폴3
    const $img1 = $(".item1");
    const $window1 = $(".window");
    const $window_content1 = $(".window-content");
    const img_list1 = [
        "img/boold1.PNG",
        "img/boold2.PNG",
        "img/boold3.PNG",
        "img/boold4.PNG",
        "img/boold5.PNG",
        "img/boold6.PNG",
        "img/boold7.PNG",
        "img/boold8.PNG"
    ]

    //포폴2
    $img.click(function(e){
        e.preventDefault()
        e.stopPropagation()
        let i = $(this).index();
        pos = $(window).scrollTop();
        $window.slideDown()
        $window_content.slideDown();
        $window_content.find("img").attr("src", img_list[i])

        $('html, body').css({'overflow': 'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴        
        $(window).on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
            event.preventDefault();     event.stopPropagation();     return false; });
                $("html, body").scrollTop(pos)
            pos2 = pos;

            $(".home").css("opacity", 0)
            
    })
    //포폴3
    $img1.click(function(e1){
        e1.preventDefault()
        e1.stopPropagation()
        let i = $(this).index();
        pos = $(window).scrollTop();
        $window1.slideDown()
        $window_content1.slideDown();
        $window_content1.find("img").attr("src", img_list1[i])

        $('html, body').css({'overflow': 'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴        
        $(window).on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
            event.preventDefault();     event.stopPropagation();     return false; });
                $("html, body").scrollTop(pos)
            pos2 = pos;

            $(".home").css("opacity", 0)
            
    })
    //클릭 포폴2,3
    $window.click(function(){
        $window.slideUp();
        $window_content.slideUp();
        $('html, body').css({'overflow': 'visible'}); 
        $("html, body").scrollTop(pos2)
        
        $(".home").css("opacity", 1)
    })
    $window1.click(function(){
        $window1.slideUp();
        $window_content1.slideUp();
        $('html, body').css({'overflow': 'visible'}); 
        $("html, body").scrollTop(pos2)
        
        $(".home").css("opacity", 1)
    })
    
    // 페이지 여는곳
    $("#button").click(function(e){
        e.preventDefault();
        window.open('page.html','','width=1920 height=1334')
     })

     $("#button_1").click(function(e){
         e.preventDefault();
        window.open('','','width=1920 height=1334')
     })

     $("#button_3").click(function(e){
        e.preventDefault();
        window.open('https://github.com/ohsoou/LibrarySystem','','width=1920 height=1334')
     })

     $("#button_4").click(function(e){
        e.preventDefault();
        window.open('https://www.lmce-kslm.org/html/?pmode=academySponsor&smode=view&seq=224','','width=1920 height=1334')
     })

     setTimeout(function(){
        $(".item-box").twentytwenty();
        }, 100) 

        $("body").smoothScroll({
            delegateSelector: ".nav ul li a, .indicator ul li a"
        })



        new WOW().init();

     
})

