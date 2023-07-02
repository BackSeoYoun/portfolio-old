$(function(){
    /** FIXED NAV **/
    
   
    /** SEC05 TAB MENU **/
    $(".works-menu").click(function(){
        var tab_id = $(this).attr('data-tab');

        $(".works-menu").removeClass('show');
        $(".works-content").removeClass('show');

        $(this).addClass("show");
        $("#"+tab_id).addClass("show");
    });

     /** SEC06 TAB MENU **/
    $(".project-nav-controller").click(function(){
      var tab_pj = $(this).attr('data-tab');

      $(".project-nav-controller").removeClass('show');
      $(".project-view").removeClass('show');
      $(".project-nav-title").removeClass('show');

      $(this).addClass("show");
      $("."+tab_pj).addClass("show");
    });

    /** Animation **/
     var t=0;
     var n=0;
     var topPos=0;
     var categoryFlag=false;
     var categoryList=["#main", "#about", "#sns", "#detail", "#catalog", "#works", "#project"];

     $(window).scroll(function(){
      t=$(window).scrollTop();
  
      if(t <= $(".main-top").offset().top){
        n=0;
      }
      else if(t <= $(".skill-container").offset().top){
        n=1;
      }
      else if(t <= $(".sns-container").offset().top){
        n=2;
      }
      else if(t <= $(".sec03").offset().top){
        n=3;
      }
      else if(t <= $(".sec04").offset().top){
        n=4;
      }
      else if(t <= $(".works-menu-container").offset().top){
        n=5;
      }
      else if(t <= $(".project-nav").offset().top){
        n=6;
      }
      else {
        n=7;
      }  
      scrollMoving();
      $(".fixed-nav li a").removeClass("on");
      $(".fixed-nav li").eq(n).find("a").addClass("on");
    });

    $(window).trigger("scroll");

    function scrollMoving(){
      if(categoryFlag) return;
      if(n == 7) categoryFlag=true;
  
      $(categoryList[n]).addClass("active");
    }
});

   


    