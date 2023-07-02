$(function(){

    var activeNum=0;

    var swiper1=new Swiper('#header .swiper-container', {
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '#header .swiper-button-next',
        prevEl: '#header .swiper-button-prev',
      },
      on: {
        init: function(){
          // console.log("init event!!");
          $("#header .swiper-button-prev").hide();
          $("#header .swiper-button-next").hide();
        },
        transitionEnd: function(){
          // console.log("slide transition CSS end event!!");
          activeNum=swiper1.activeIndex;
          swiper1.autoplay.start();
          if(activeNum == 0){ // 첫 번째 카테고리인 비디오 영역입니다.
            $("#header .swiper-button-prev").hide();
            $("#header .swiper-button-next").hide();
            video.play();
          }
          else{ // 비디오 영역이 아닙니다.
            $("#header .swiper-button-prev").show();
            $("#header .swiper-button-next").show();
            video.pause();
          }
        }
      }
    });

    var swiper2 = new Swiper('#sec2 .swiper-container', {
      autoplay: {
        delay: 2000,
      },
      loop: true,
      spaceBetween: 70,
      navigation: {
        nextEl: '#sec2 .swiper-button-next',
        prevEl: '#sec2 .swiper-button-prev',
      },
      on: {
        transitionEnd:function(){
          swiper2.autoplay.start();
        }
      }
    });

    $(".right").click(function(){
        swiper2.slideNext();
    });

    $(".left").click(function(){
        swiper2.slidePrev();
    });
  var video=document.getElementById("intro");
	var w, h;
	var videoW, videoH;

	video.muted=true;
	video.play();

	$(window).resize(function(){
		$("#intro").removeAttr("style");
		w=$(window).width();
		h=$(window).height(640);

		if(w > h){
			videoW=w;
			$("#intro").css({width:videoW});
			videoH=$("#intro").height();

			if(videoH < h){
				videoW="auto";
				videoH=h;
				$("#intro").css({width:videoW, height:videoH});
			}
		}
		else{
			videoH=h;
			$("#intro").css({height:videoH});
		}
	});
	video.addEventListener("loadeddata", function(){
		videoW=$("#intro").width();
		videoH=$("#intro").height();
		$(window).trigger("resize");
	});
	video.addEventListener("ended", function(){
		video.currentTime=0;
		video.play();
  });
  

  $("#top .tab").click(function(e){
		e.preventDefault();
		$(".mobile_menu").addClass("active");
	});
	$(".mobile_menu .close").click(function(e){
		e.preventDefault();
		$(".mobile_menu").removeClass("active");	
		$("#menu > ul > li").removeClass("active");
		$("#menu ul ul").hide();
	});
	$("#menu > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#menu > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#menu ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
		});


    var t=0;
    var scrollTimer=0;

    $(window).scroll(function(){
      
      t=$(window).scrollTop();

      if(t > 500){
        if($("#header #top").hasClass("fixed") == false){
          $("#header #top").addClass("fixed").animate({top:0, opacity:1},300)
        }
        else {
          return;
        }
      }
      else {
        if($("#header #top").hasClass("fixed") == true) {
          $("#header #top").removeAttr("style");
          $("#header #top").removeClass("fixed");
        }
        else {
          return;
        }
      }
    });


    var swiper3 = new Swiper('#sec6 .swiper-container', {
      autoplay: {
        delay: 6000,
      },
      spaceBetween: 30,
      slidesPerView: 1.4,
      navigation: {
        nextEl: '#sec6 .swiper-button-next',
        prevEl: '#sec6 .swiper-button-prev',
      },
      on: {
        transitionEnd:function(){
          swiper3.autoplay.start();
        }
      }
        
    });



   
});


