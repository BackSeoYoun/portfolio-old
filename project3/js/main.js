$(function(){
	// 1) 페이지 이동 관련
	var t=0;
	var n=0;
	var topPos=0;
	var categoryFlag=false;
	var categoryList=["#header", "#business", "#portfolio", "#culture", "#awards", "#contact"];

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t <= $("#header h2").offset().top){
			n=0;
		}
		else if(t <= $(".sec1 .list1 li:last-child").offset().top){
			n=1;
		}
		else if(t <= $(".sec2 .list2 li:last-child").offset().top){
			n=2;
		}
		else if(t <= $(".sec3 .list3 li:last-child").offset().top){
			n=3;
		}
		else if(t <= $(".sec4 .list4 li:last-child").offset().top){
			n=4;
		}
		else {
			n=5;
		}

		if(t > 100){
			$("#header .menu_zone").addClass("active");
		}
		else{
			$("#header .menu_zone").removeClass("active");
		}

		scrollMoving();
		$("#gnb li a").removeClass("on");
		$("#gnb li").eq(n).find("a").addClass("on");
	});
	$(window).trigger("scroll");

	function scrollMoving(){
		if(categoryFlag) return;
		if(n == 5) categoryFlag=true;

		$(categoryList[n]).addClass("active");
	}

	// 2) 탭 이동 관련
	$(".tab").click(function(e){
		e.preventDefault();

		if(!$(".menu_zone").hasClass("active")){
			$("body").toggleClass("static");
		}

		$(".mobile").toggleClass("active");
		$(".tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		if(!$(".menu_zone").hasClass("active")){
			$("body").removeClass("static");
		}

		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});

	// 3) 메뉴클릭 이동관련
	$("#gnb li").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href"); // #contact // var categoryList=["#header", ".sec1", ".sec2", ".sec3", ".sec4", ".contact"];
		topPos=$(topPos).offset().top; // $(#contact).offset.top
		$("html").animate({scrollTop:topPos}, 400);
	});
	$("#m_gnb li").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").delay(400).animate({scrollTop:topPos}, 400);
	});

	// 4) 상단 이동관련
	$(".btn_top").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400);
	});
});