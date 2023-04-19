// JavaScript Document

function toggleDiv(divNum) {
    
    
    $(".slide").animate({right:'-2000'},350);
    if($("#div"+divNum)) {
        
        $("#div"+divNum).animate({right:'0'},350,function(){$("#close").show();});
    }
}

$(document).ready(function(){
   $("#close").on("click",function(e){
      $(".slide").animate({right:'-2000'},350);
      
   })

})	