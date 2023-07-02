$(function(){
    $(".main-menu-container").mouseover(function(){
        $(".sub-menu-container").slideDown(300);
        $(".main-menu-container li>ul").slideDown(300);
    });
    $(".main-menu-container").mouseleave(function(){
        $(".sub-menu-container").slideUp(300);
        $(".main-menu-container li>ul").slideUp(300);
    });
});