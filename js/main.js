window.addEventListener("load", function(){

    // 네비게이션 

    var fixedNav=document.getElementById("fixed_nav");
    var fixedUl=fixedNav.children[0];
    var fixedLi=fixedUl.children;
    var fixedList=[];
    var section=document.getElementById("section");
    var sectionList=section.children;
    var main=document.getElementById("main");

     main.classList.add("on");

    var n=0;
    var scrollTop=0;
    var targetY=0;

    for(var i=0; i<fixedLi.length; i++){
        if(fixedLi[i].children[0].getAttribute("href") !== ""){
            fixedList.push(fixedLi[i]);
        }
    }

    for(i=0; i<fixedList.length; i++){
        fixedList[i].index=i;

        fixedList[i].addEventListener("click", function(e){
            currentY=clickMoving(e);
        });
    }


    window.addEventListener("scroll", function(){
        var timer=setTimeout(function(){
            clearTimeout(timer);
            scrollTop=window.pageYOffset;

            if(scrollTop < sectionList[1].offsetTop-200){
                n=0;
            }
            else if(scrollTop < sectionList[2].offsetTop-200){
                n=1;
            }
            else if(scrollTop < sectionList[3].offsetTop-200){
                n=2;
            }
            else if(scrollTop < sectionList[4].offsetTop-200){
                n=3;
            }
            else { 
                n=4;
            }

            // console.log(scrollTop+" : "+(document.body.offsetHeight-window.innerHeight));
            // console.log("n : "+n);
            
            sectionList[n].classList.add("on");

            for(var i=0; i<fixedList.length; i++){
                if(i == n){
                    fixedList[i].classList.add("on");
                }
                else {
                    fixedList[i].classList.remove("on");
                }
            }

            if(scrollTop > 10){
                fixedNav.classList.add("show");
            }
            else {
                fixedNav.classList.remove("show");
            }

        },10);
    });

	/*
    function clickMoving(evt){
        evt.preventDefault();
        n=evt.currentTarget.index;
        targetY=sectionList[n].offsetTop;

        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    }
	*/
	function clickMoving(evt){
		evt.preventDefault();
		n=evt.currentTarget.index;
		targetY=sectionList[n].offsetTop; // 목표 윈도우 지점의 y 좌표입니다.
		var currentY=window.pageYOffset; // 현재 윈도우의 y 좌표입니다.
		var timer;

		if(navigator.userAgent.indexOf("Chrome") !== -1){ // Chrome일 경우
			window.scrollTo({
				top: targetY,
				behavior: "smooth"
			});
		}
		else{
			timer=setInterval(function(){
				if(targetY > currentY){
					if(Math.abs(targetY-currentY) > 9){
						currentY+=9;
					}
					else{
						currentY=targetY;
						clearInterval(timer);
					}
				}
				else{
					if(Math.abs(targetY-currentY) > 9){
						currentY-=9;
					}
					else{
						currentY=targetY;
						clearInterval(timer);
					}
				}
				window.scrollTo(0, currentY);
			}, 1);
		}
	}

    // 프로젝트 탭

    var n1=0;
    var sec3List=document.getElementById("sec3_list");
    var sec4=document.getElementsByClassName("sec4_container")[0];
    var sec4Ul=sec4.children[0];

    // console.log(sec4Ul);

   for(var i=0; i<sec3List.children.length; i++){
      if(sec3List.children[i].className == "controller"){
         var sec3ContUl=sec3List.children[i];
      }
      else if(sec3List.children[i].className == "icon_list"){
          var nameUl=sec3List.children[i];
      }
      else {
          var descUl=sec3List.children[i];
      }
   }
   console.log(nameUl);
    // console.log(descUl);
   // console.log(sec3ContUl);
   var sec3ContLi=sec3ContUl.children;
   var nameLi=nameUl.children;
   var descLi=descUl.children;
   var sec4Li=sec4Ul.children;
    // console.log(sec3ContLi);
	// console.log(descLi);

	sec3ContLi[n].classList.add("on");
	nameLi[n].classList.add("on");
	descLi[n].classList.add("on");
	fadeIn(descLi[n]);
	sec4Li[n].classList.add("on");

	for(i=0; i<sec3ContLi.length; i++){
		// LI 리스트입니다.
		sec3ContLi[i].index=i;

		sec3ContLi[i].addEventListener("click", function(e){
			e.preventDefault();
			var index=e.currentTarget.index;
			// console.log("index : "+index);

			for(var j=0; j<sec3ContLi.length; j++){
				if(j == index){
					sec3ContLi[j].classList.add("on");
					nameLi[j].classList.add("on");
					// descLi[j].style.display="block";
					// descLi[j].classList.add("on");
					fadeIn(descLi[j]);
					sec4Li[j].classList.add("on");
				}
				else{
					sec3ContLi[j].classList.remove("on");
					nameLi[j].classList.remove("on");
					// descLi[j].style.display="none";
					// descLi[j].classList.remove("on");
					fadeOut(descLi[j]);
					sec4Li[j].classList.remove("on");
				}
			}
		});
	}
	function fadeIn(target){
		var opa=0;
		target.style.display="block";
		target.style.opacity=opa;

		var timer=setInterval(function(){
			if(opa < 1){
				opa+=0.05;
			}
			else{
				opa=1;
				clearInterval(timer);
			}
			target.style.opacity=opa;
		}, 2);
	}
	function fadeOut(target){
		target.style.display="none";
	}

   var portBtn=document.getElementsByClassName("under_btn")[0];

//    console.log(portBtn);

   portBtn.addEventListener("click",function(e){
       e.preventDefault();

       targetY=sectionList[4].offsetTop;

       window.scrollTo({
           top: targetY,
           behavior: "smooth"
       });
   });
   
// 링크
    var agent=navigator.userAgent.toLowerCase();
    var path1="";

    if(agent.indexOf("android") != -1 || agent.indexOf("iphone") != -1 || agent.indexOf("ipad") != -1){
        // Mobile URL입니다.
        path1="/portfolio/project1/mobile/index.html";
    }
    else{
        // PC URL입니다.
        path1="/portfolio/project1/pc/index.html";
    }

	var project1Btn=document.getElementsByClassName("project1");

	for(var i=0; i<project1Btn.length; i++){
		project1Btn[i].setAttribute("href", path1);
	}
});