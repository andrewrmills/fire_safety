// Show Bedroom
$(document).ready(function(){
    $(".bedroom").click(function(){
      $(".bedroomDiv").animate({right: '0px'});
    //   $(".bedroomDiv").css("display", "block")
      $(".bedroomDiv").toggle();
    });
  });
// Show Kitchen
  $(document).ready(function(){
    $(".kitchen").click(function(){
      $(".kitchenDiv").animate({right: '0px'});
      $(".kitchenDiv").toggle();
    });
  });
  // Show Laundry
  $(document).ready(function(){
    $(".winter").click(function(){
      $(".winterDiv").animate({right: '0px'});
      $(".winterDiv").toggle();
    });
  });
  // Show Escape
  $(document).ready(function(){
    $(".escape").click(function(){
      $(".escapeDiv").animate({right: '0px'});
      $(".escapeDiv").toggle();
    });
  });
  // Show Smoke Alarms
  $(document).ready(function(){
    $(".smokeAlarms").click(function(){
      $(".smokeAlarmsDiv").animate({right: '0px'});
      $(".smokeAlarmsDiv").toggle();
    });
  });
//   Hide displayed content again
  $(document).ready(function(){
    $(".exit").click(function(){
      $(".content").animate({right: '-250px'});
      $(".content").css("display", "none")
    });
  });