	/*
$(document).ready(function(){  

		var $move=$(".slider_moving");
		var $prev=$(".slider_btn .prev");
		var $next=$(".slider_btn .next");
		var sliderNum=4;

		var n=0;
		var pos;

		$prev.click(function(e){
			e.preventDefault();
			if(n > 0){
				n--;
				pos=n*-1*100+"%";
				$move.animate({left:pos},500);
			}
		});
		$next.click(function(e){
			e.preventDefault();
			if(n < 3){
				n++;
				pos=n*-1*100+"%";
				$move.animate({left:pos},500);
			}
			else {
				n=0;
			}
		});	
		
		// setInterval(function(){
		// 	if(n < 3){
		// 		n=n+1;
		// 	}
		// 	else{
		// 		n=0;
		// 	}
		// 	pos=n*-1*100+"%";
		// 	$move.animate({left:pos},500);
		// }, 4000);

		var swiper2 = new Swiper('#content .middle-container', {
			loop: true,
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		  });
		  var swiper3 = new Swiper('.post_slider .swiper-container', {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
			  el: '.post_slider.swiper-pagination',
			  clickable: true,
			},
		  });
});
*/

window.addEventListener("load",function(){
		//gnb
		var nav=document.getElementById("gnb");
		var depth1Li=nav.children[0].children; // nav > ul >li
		var depthBG=document.getElementById("menu");
		// console.log(depthBG);
	
		depthBG.addEventListener("mouseenter",function(e){
			depthBG.classList.add("over");
		});
		depthBG.addEventListener("mouseleave",function(e){
			depthBG.classList.remove("over");
		});
		
		for(var i=0; i<depth1Li.length; i++){
			depth1Li[i].addEventListener("mouseenter",function(e){
				var link=e.target.children[0];
				link.classList.add("over");
				var sub=e.target.children[1];
				sub.style.display="block";
				sub.classList.add("over");
			});
			depth1Li[i].addEventListener("mouseleave",function(e){
				var link=e.target.children[0];
				link.classList.remove("over");
				var sub=e.target.children[1];
				sub.style.display="none";
				sub.classList.remove("over");
			});
		}
	
		// 헤더 슬라이더
		var slider=document.getElementById("slider");
		var move=slider.children[0];
		var prev=slider.children[1].children[0];
		prev.style.opacity=0.4;
		var next=slider.children[1].children[1];
		var moveUl=move.children[0];
		var moveLi=moveUl.children;
		var sliderNum=4;

		// console.log(moveLi);
		var n=0;
		var pos=0;

		prev.addEventListener("click",function(e){
			e.preventDefault();
			if(n > 0){
				n--;
			}
			else {
				return;
			}
			pos=n*-1*moveLi[0].clientWidth; // 윈도우 크기가 아니고 li 크기로 이동합니다.
			// console.log(window.innerWidth+" : "+moveLi[0].clientWidth);
			
			move.style.left=pos+"px";
			buttonOpacity();
			//for(var i=0; i<moveLi.length; i++){
				//console.log(moveLi[i]);
				// if(n < 3){
				// 	n++;
				// 	pos=n*-1*1920;
				// 	move.style.left=pos+"px";
				// }
			//}
		});
	
		next.addEventListener("click",function(e){
			e.preventDefault();
			if(n < 3){
				n++;
			}
			else {
				return;
			}
			pos=n*-1*moveLi[0].clientWidth;
			move.style.left=pos+"px";
			buttonOpacity();
			//for(var i=0; i<moveLi.length; i++){
				//console.log(moveLi[i]);
				// if(n < 3){
				// 	n++;
				// 	pos=n*-1*1920;
				// 	move.style.left=pos+"px";
				// }
			//}
		});	
		function buttonOpacity(){
			if(n == 0){
				prev.style.opacity=0.5;
				next.removeAttribute("style");
			}
			else if(n == 3){
				prev.removeAttribute("style");
				next.style.opacity=0.5;
			}
			else{
				prev.removeAttribute("style");
				next.removeAttribute("style");
			}
		}
});