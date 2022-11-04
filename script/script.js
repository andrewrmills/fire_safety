// Show rotate message for mobile
// var width = $(window).width();
// var height = $(window).height();

// if (width > height) {
//   $(document).ready(function(){
//       $(".rotate").css("display", "none");
//   });
// }

// Show Tooltip
$(document).ready(function(){
  $(".bedroom").hover(function(){
    $(".bedroomToolTip").toggle();
  });

  $(".kitchen").hover(function(){
    $(".kitchenToolTip").toggle();
  });

  $(".winter").hover(function(){
    $(".winterToolTip").toggle();
  });

  $(".escape").hover(function(){
    $(".escapeToolTip").toggle();
  });

  $(".smokeAlarms").hover(function(){
    $(".smokeAlarmsToolTip").toggle();
  });

  $(".bbq").hover(function(){
    $(".bbqToolTip").toggle();
  });

  // Show content Divs
  $(".bedroom").click(function(){
    $(".bedroomDiv").animate({right: '0px'});
    $(".bedroomDiv").toggle();
  });

   $(".kitchen").click(function(){
    $(".kitchenDiv").animate({right: '0px'});
    $(".kitchenDiv").toggle();
  });

  $(".winter").click(function(){
    $(".winterDiv").animate({right: '0px'});
    $(".winterDiv").toggle();
  });

  $(".escape").click(function(){
    $(".escapeDiv").animate({right: '0px'});
    $(".escapeDiv").toggle();
  });

  $(".smokeAlarms").click(function(){
    $(".smokeAlarmsDiv").animate({right: '0px'});
    $(".smokeAlarmsDiv").toggle();
  });

  $(".bbq").click(function(){
    $(".bbqDiv").animate({right: '0px'});
    $(".bbqDiv").toggle();
  });

  // Hide displayed content again
  $(".contentHead").click(function(){
    $(".content").animate({right: '-250px'});
    $(".content").css("display", "none")
  });
});
  // Removes lawnmower after animation
$('.lawnmowerUp').bind(
 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', 
  function(e) { $(this).remove(); });