$('#menu-toggle').click(function(){
  
    $('#menu').slideToggle(300);
  })
  
  $(window).resize(function(){
    
    console.log(window.innerWidth)
    
    // if(window.innerWidth > 660) {
    //   $("#menu").show();
    // } else {
    //   $("#menu").hide();
    // }
    
    if(window.innerWidth < 660) {
      $("#menu").hide();
    } else {
      $("#menu").show()
    }
  })