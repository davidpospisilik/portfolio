$(document).ready(function(){
   
  $(".nav-icon").click(function(){
      $(".full-nav").addClass("open");  
  }); 
    
    
  $(".nav-close").click(function(){
      $(".full-nav").removeClass("open");  
  }); 
    
  $(window).scroll(function(){
      var sc = $(window).scrollTop();
       if( sc > 100){
           $(".navigation").addClass("sticky");
       }
        else{
           $(".navigation").removeClass("sticky");
       }
  });
});