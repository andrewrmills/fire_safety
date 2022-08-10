// Show Tooltip
$(document).ready(function(){
  $(".bedroom").hover(function(){
    $(".bedroomToolTip").toggle();
  });
});
$(document).ready(function(){
  $(".kitchen").hover(function(){
    $(".kitchenToolTip").toggle();
  });
});
$(document).ready(function(){
  $(".winter").hover(function(){
    $(".winterToolTip").toggle();
  });
});
$(document).ready(function(){
  $(".escape").hover(function(){
    $(".escapeToolTip").toggle();
  });
});
$(document).ready(function(){
  $(".smokeAlarms").hover(function(){
    $(".smokeAlarmsToolTip").toggle();
  });
});
$(document).ready(function(){
  $(".bbq").hover(function(){
    $(".bbqToolTip").toggle();
  });
});
// Show content Divs
$(document).ready(function(){
    $(".bedroom").click(function(){
      $(".bedroomDiv").animate({right: '0px'});
      $(".bedroomDiv").toggle();
    });
  });

  $(document).ready(function(){
    $(".kitchen").click(function(){
      $(".kitchenDiv").animate({right: '0px'});
      $(".kitchenDiv").toggle();
    });
  });

  $(document).ready(function(){
    $(".winter").click(function(){
      $(".winterDiv").animate({right: '0px'});
      $(".winterDiv").toggle();
    });
  });

  $(document).ready(function(){
    $(".escape").click(function(){
      $(".escapeDiv").animate({right: '0px'});
      $(".escapeDiv").toggle();
    });
  });

  $(document).ready(function(){
    $(".smokeAlarms").click(function(){
      $(".smokeAlarmsDiv").animate({right: '0px'});
      $(".smokeAlarmsDiv").toggle();
    });
  });

  $(document).ready(function(){
    $(".bbq").click(function(){
      $(".bbqDiv").animate({right: '0px'});
      $(".bbqDiv").toggle();
    });
  });
  //   Hide displayed content again
  $(document).ready(function(){
    $(".contentHead").click(function(){
      $(".content").animate({right: '-250px'});
      $(".content").css("display", "none")
    });
  });
  // Removes lawnmower after animation
  $('.lawnmowerUp').bind(
    'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', 
    function(e) { $(this).remove(); });