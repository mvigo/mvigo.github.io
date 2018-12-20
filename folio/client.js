// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html



$(document).ready(function() {

  
  $("#image1, #label1").hover(function () {
    $("#label12").toggleClass("label2 label2hover");
    $("#label11").toggleClass("label1 label1hover");
    $("#label13").toggleClass("label3 label3hover");
    $("#image1").toggleClass("image1 image1Hover");
});
  
    $("#image2, #label2").hover(function () {
    $("#label22").toggleClass("label2 label2hover");
    $("#label21").toggleClass("label1hover");
    $("#label23").toggleClass("label3hover");
    $("#image2").toggleClass("image1Hover");
});
  
    $("#image3, #label3").hover(function () {
    $("#label32").toggleClass("label2 label2hover");
    $("#label31").toggleClass("label1hover");
    $("#label33").toggleClass("label3hover");
    $("#image3").toggleClass("image1Hover");
});
  
    $("#image4, #label4").hover(function () {
    $("#label42").toggleClass("label2 label2hover");
    $("#label41").toggleClass("label1hover");
    $("#label43").toggleClass("label3hover");
    $("#image4").toggleClass("image1Hover");
});
  
    $("#image5, #label5").hover(function () {
    $("#label52").toggleClass("label2 label2hover");
    $("#label51").toggleClass("label1hover");
    $("#label53").toggleClass("label3hover");
    $("#image5").toggleClass("image1Hover");
});
  
      $("#image6, #label6").hover(function () {
    $("#label62").toggleClass("label2 label2hover");
    $("#label61").toggleClass("label1hover");
    $("#label63").toggleClass("label3hover");
    $("#image6").toggleClass("image1Hover");
});
  
  
      $("#image7, #label7").hover(function () {
    $("#label72").toggleClass("label2 label2hover");
    $("#label71").toggleClass("label1hover");
    $("#label73").toggleClass("label3hover");
    $("#image7").toggleClass("image1Hover");
});
  
  
      $("#image8, #label8").hover(function () {
    $("#label82").toggleClass("label2 label2hover");
    $("#label81").toggleClass("label1hover");
    $("#label83").toggleClass("label3hover");
    $("#image8").toggleClass("image1Hover");
});
  
   
      $("#image9, #label9").hover(function () {
    $("#label92").toggleClass("label2 label2hover");
    $("#label91").toggleClass("label1hover");
    $("#label93").toggleClass("label3hover");
    $("#image9").toggleClass("image1Hover");
});
  
  
  
  
  
  
  $(".sticky2, #menubutton").click(function(){
    $(".menuTest").toggleClass("visible");
    console.log("ok");
  });
  

  

  
  
  
 
  
     
      
 
     
    

     



  
  
  
  
$(window).scroll(function(){
  
 
  var scrollPos = $(document).scrollTop();
  var wHeight = $(window).height();
  var half = wHeight/2 + scrollPos;
   console.log(half);
 if (half > 550){
   $("#svg1").css("opacity","1");
 } else {
   $("#svg1").css("opacity","0");
 }
  
  var rangeStart1 = 740 - (wHeight/2.5);
  var rangeEnd1 = 740 + (wHeight/2.5);
  if (half < rangeEnd1){
  $("#content1").addClass("Active");
  $("#line1").css("fill","black").css("transition", "2s");
  }else { 
  $("#content1").removeClass("Active");  
  $("#line1").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart2 = 1150 - (wHeight/2.5);
  var rangeEnd2 = 1150 + (wHeight/2.5);
  if(half > rangeStart2 && half < rangeEnd2  ){
  $("#content2").addClass("Active");
  $("#line2").css("fill","black").css("transition", "2s");
  }else { 
  $("#content2").removeClass("Active"); 
  $("#line2").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart3 = 1550 - (wHeight/2.5);
  var rangeEnd3 = 1550 + (wHeight/2.5);
  if(half > rangeStart3 && half < rangeEnd3 ){
  $("#content3").addClass("Active");
  $("#line3").css("fill","black").css("transition", "2s");
  }else { 
  $("#content3").removeClass("Active");  
  $("#line3").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart4 = 1930 - (wHeight/2.5);
  var rangeEnd4 = 1930 + (wHeight/2.5);
  if(half > rangeStart4 && half < rangeEnd4 ){
  $("#content4").addClass("Active");
  $("#line4").css("fill","black").css("transition", "2s");
  }else { 
  $("#content4").removeClass("Active");  
  $("#line4").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart5 = 2330 - (wHeight/2.5);
  var rangeEnd5 = 2330 + (wHeight/2.5);
  if(half > rangeStart5 && half < rangeEnd5 ){
  $("#content5").addClass("Active");
  $("#line5").css("fill","black").css("transition", "2s");
  }else { 
  $("#content5").removeClass("Active");  
  $("#line5").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart6 = 2750 - (wHeight/2.5);
  var rangeEnd6 = 2750 + (wHeight/2.5);
  if(half > rangeStart6 && half < rangeEnd6 ){
  $("#content6").addClass("Active");
  $("#line6").css("fill","black").css("transition", "2s");
  }else { 
  $("#content6").removeClass("Active");  
  $("#line6").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart7 = 3150 - (wHeight/2.5);
  var rangeEnd7 = 3150 + (wHeight/2.5);
  if(half > rangeStart7 && half < rangeEnd7 ){
  $("#content7").addClass("Active");
  $("#line7").css("fill","black").css("transition", "2s");
  }else { 
  $("#content7").removeClass("Active");  
  $("#line7").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart8 = 3550 - (wHeight/2.5);
  var rangeEnd8 = 3550 + (wHeight/2.5);
  if(half > rangeStart8 && half < rangeEnd8 ){
  $("#content8").addClass("Active");
  $("#line8").css("fill","black").css("transition", "2s");
  }else { 
  $("#content8").removeClass("Active");  
  $("#line8").css("fill","lightgrey").css("transition", "2s");
  }
  
  var rangeStart9 = 3940 - (wHeight/2.5);
  var rangeEnd9 = 3940 + (wHeight/2.5);
  if(half > rangeStart9 && half < rangeEnd9 ){
  $("#content9").addClass("Active");
  $("#line9").css("fill","black").css("transition", "2s");
  }else { 
  $("#content9").removeClass("Active");  
  $("#line9").css("fill","lightgrey").css("transition", "2s");
  }
  
});

  
});
