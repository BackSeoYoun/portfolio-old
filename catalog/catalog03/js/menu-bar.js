$(function(){
    $("#main01").mouseenter(function(){
        $("#sub01").slideDown();
        $("#sub02").slideUp();
        $("#sub03").slideUp();
        $("#under-bar").width("130px");
        $("#under-bar").css("left", "170px");        
    });
    $("#main02").mouseenter(function(){
        $("#sub02").slideDown();
        $("#sub01").slideUp();
        $("#sub03").slideUp();
        $("#under-bar").width("184px");
        $("#under-bar").css("left", "390px");
    });
    $("#logo").mouseenter(function(){
        $("#under-bar").width("0px");
        $("#under-bar").css("left", "716px");
    });
    $("#main03").mouseenter(function(){
        $("#under-bar").width("56px");
        $("#under-bar").css("left", "892px");
        $("#sub01").slideUp();
        $("#sub02").slideUp();
        $("#sub03").slideUp();
    });
    $("#main04").mouseenter(function(){
        $("#sub03").slideDown();
        $("#sub01").slideUp();
        $("#sub02").slideUp();
        $("#under-bar").width("112px");
        $("#under-bar").css("left", "1112px");
    });

    $("#sub01").mouseleave(function(){
        $("#sub01").slideUp();
    });
    $("#sub02").mouseleave(function(){
        $("#sub02").slideUp();
    });
    $("#sub03").mouseleave(function(){
        $("#sub03").slideUp();
    });

    $("#sub01").mouseenter(function(){
        $("#under-bar").width("130px");
        $("#under-bar").css("left", "170px");        
    });
    $("#sub02").mouseenter(function(){
        $("#under-bar").width("184px");
        $("#under-bar").css("left", "390px");
    });
    $("#sub03").mouseenter(function(){
        $("#under-bar").width("112px");
        $("#under-bar").css("left", "1112px");
    });
    $("nav").mouseleave(function(){
        $("#under-bar").width("130px");
        $("#under-bar").css("left", "170px");   
        $(".sub-container").slideUp();
    });
});