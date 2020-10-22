$(function(){

    $("#gnb").mouseenter(function(){
        $(".menu_shadow").addClass("active");
    });
    $("#gnb").mouseleave(function(){
        $(".menu_shadow").removeClass("active");
    });

    var n=0;

    $(".slide_img li").eq(n).addClass("current");
    $(".slider_pagination li").eq(n).addClass("active");

    $(".slider_pagination li").click(function(e){
        e.preventDefault();

        n=$(this).index();
        $(".slider_pagination li").removeClass("active");
        $(this).addClass("active");
        $(".slide_img li").removeClass("current");
        $(".slide_img li").eq(n).addClass("current");
    });

    $(".slide .slide_arrow .next").click(function(e){
        e.preventDefault();
        if(n < 3){
            n=n+1;
        }
        else{
            return;
        }
        $(".slider_pagination li").removeClass("active");
        $(".slider_pagination li").eq(n).addClass("active");
        $(".slide_img li").removeClass("current");
        $(".slide_img li").eq(n).addClass("current");
    });

    $(".slide .slide_arrow .prev").click(function(e){
        e.preventDefault();
        if(n > 0){
            n=n-1;
        }
        else{
            return;
        }
        $(".slider_pagination li").removeClass("active");
        $(".slider_pagination li").eq(n).addClass("active");
        $(".slide_img li").removeClass("current");
        $(".slide_img li").eq(n).addClass("current");
    });

    setInterval(function(){
        if(n < 3){
            n=n+1;
        }
        else{
            n=0;
        }
        $(".slider_pagination li").removeClass("active");
        $(".slider_pagination li").eq(n).addClass("active");
        $(".slide_img li").removeClass("current");
        $(".slide_img li").eq(n).addClass("current");
    },4000);
    
    
    var n;
    var str="";
    
	$(".option dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
		$(".option dd a").removeClass("active");
    });
    
	$(".option dd a").click(function(e){
		e.preventDefault();
		$(".option dd a").removeClass("active");
		$(this).addClass("active");

		n=$(this).parent().index();
		str=$(this).text();
        
		$("option option").eq(n).prop("selected", "selected");
		$(".option dt a").html(str+"<span></span>");
		$(this).parents("dd").slideUp(300);

    });
    
    var w=200;
    var amount=0;
    var moving=false;

	$(".rel_site_inner .direction a.prev").click(function(e){
        e.preventDefault();
        if(moving) return;
        moving=true;
		amount-=w;

		$(".rel_site_inner .site_wrapper ul").animate({left:amount}, 700, function(){
			$(this).append($(".rel_site_inner .site_wrapper ul li:first-child"));
			amount+=w;
            $(this).css({left:amount});
            moving=false;
		});
	});
	$(".rel_site_inner .direction a.next").click(function(e){
        e.preventDefault();
        if(moving) return;
        moving=true;
		$(".rel_site_inner .site_wrapper ul").prepend($(".rel_site_inner .site_wrapper ul li:last-child"));
		amount-=w;
		$(".rel_site_inner .site_wrapper ul").css({left:amount});
		amount+=w;
        $(".rel_site_inner .site_wrapper ul").animate({left:amount}, 700);
            moving=false;
    });
    
    var t=0;
    var timer=0;

    $(window).scroll(function(){
        clearTimeout(timer);

        timer=setTimeout(function(){
            t=$(window).scrollTop();

			if(t <= $("#header").offset().top+400){ // 400은 여유 간격입니다.
				return; // 동작되지 않게 합니다.
            }
			else if(t <= $(".main_banner").offset().top){
                $(".main_banner").addClass("on");
            }
			else if(t <= $(".more_title").offset().top){
                $(".more_title").addClass("on");
            }
			else if(t <= $("#sec3").offset().top){
                $("#sec3").addClass("on");
            }
			else {
                $("#sec4").addClass("on");
            }	
        }, 30);
    });
    $(window).trigger("scroll");
});