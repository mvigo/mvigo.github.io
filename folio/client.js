
$(document).ready(function() {
    
  $(".contentContainer").hover(function () {
     $(this).find(".label2").toggleClass("label2hover");
     $(this).find(".label1").toggleClass("label1hover");
     $(this).find(".label3").toggleClass("label3hover");
     $(this).find(".image1").toggleClass("image1Hover");
       $(this).find(".imageContainer").toggleClass("imageContainerHover");
});


  
  
  $("#svg1, #menubutton, .menuSelectTest, #menuMobileSelect, #closeMobile").click(function(){
    $(".menuTest").toggleClass("visible");
      $("#svg1").css("opacity","1");
     
    $("#line3").toggleClass("linerotate1").css("transition", "0.5s");
    $("#line2").toggleClass("linerotate2").css("transition", "0.5s");
    $("#line1").toggleClass("linerotate3").css("transition", "0.5s");
    
    $(".menuSelectTest").toggleClass("menuSelectTestShow");
    
    console.log("ok");
  });
   



  
  
  
 setTimeout(function(){ 
    
  $(".line").css("opacity","1");
 }, 3000);
  
     
$(window).scroll(function(){
  
 if (!$(".menuTest").hasClass("visible")) {
    

  
  var scrollPos = $(document).scrollTop();
  var wHeight = $(window).height();
  var half = wHeight/2 + scrollPos;

 if (100 < scrollPos){
   $("#svg1").css("opacity","0.3");
 } else {
   $("#svg1").css("opacity","1");
 }
 }
});

    
    
    
    
    
});