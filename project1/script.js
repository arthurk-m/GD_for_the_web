$(document).ready(function(){
    // $(window).scroll(function () {
    //    $('.triangle').fadeIn();
    //     if($(this).scrollTop()==0){
    //      $('.triangle').fadeOut();
    //     }
    // });
    var coral1 = $( "#coral1" )
    var coral2 = $("#coral2")
    var coral3 = $("#coral3")
    var coral4 = $("#coral4")
    var coral5 = $("#coral5")
    var coral_wrap = $("#coral_wrap")
    var coral_leaf = $("#coral_leaf")
    var coral_leaf2 = $("#coral_leaf2")
    var coral_leaf3 = $("#coral_leaf3")
    var coral_leaf4 = $("#coral_leaf4")
    var coral_leaf5 = $("#coral_leaf5")
    var rock = $("#rock")
    var rock2 = $("#rock2")
    var bubble = $("#bubble")
    var bubbles2 = $("#bubbles2")
    var fish = $("#fish")
    var fish2 = $("#fish2")
    var star = $("#star")
    var star2 = $("#star2")
    var coralimage1 = $("#coralimage1")
    var coralimage2 = $("#coralimage2")
    var coralimage3 = $("#coralimage3")
    var coralimage4 = $("#coralimage4")
    var coralimage5 = $("#coralimage5")
    var coralimage6 = $("#coralimage6")
    var jellyfish = $("#jellyfish")
    var goldfish = $("#goldfish")
    var nemo = $( "#nemo" )
    var fishswim = $("#fishswim")
    var goldfish2 = $("#goldfish2")
    var jellyfish2 = $("#jellyfish2")
    var bubblemove1 = $("#bubblemove1")
    var bubblemove2 = $("#bubblemove2")
    var bubblemove3 = $("#bubblemove3")
    var bubblemove4 = $("#bubblemove4")
    var bubblemove5 = $("#bubblemove5")
    var bubblemove6 = $("#bubblemove6")
    var bubblemove7 = $("#bubblemove7")
    var bubblemove8 = $("#bubblemove8")
    var coralstuff1 = $('#coralstuff1')
    var coralstuff2 = $('#coralstuff2')
    var coralstuff3 = $('#coralstuff3')
    var coralstuff4 = $('#coralstuff4')
    
    let things = [coralstuff3, coralstuff4, coralstuff1, coralstuff2, coral1, coral2, coral3, coral4, coral5, coral_leaf, coral_leaf2, coral_leaf3, coral_leaf4, coral_leaf5, coral_wrap, coralimage3, coralimage1, coralimage2, rock, rock2, bubble, bubbles2, fish, fish2, star, star2, coralimage5, coralimage6, jellyfish, goldfish, nemo, fishswim, goldfish2, jellyfish2, bubblemove1, bubblemove2, bubblemove3, bubblemove4, bubblemove5, bubblemove6, bubblemove7, bubblemove8];
    
    things.forEach(function(element){
      let top = (Math.random()) * $(window).height()
      let left = (Math.random()) * $(window).width()
      let z_index = Math.random() * 8000 

      element.css({"padding-top": top, 'padding-left': left, "z-index": z_index, "position": "fixed"})
    })

    $(window).click(function(){
      if($('#coralfacts').css('visibility') == 'visible'){
        // console.log("asdfasd")
        $('#coralfacts').css({"visibility": "hidden"})
      }else{
        $('#coralfacts').css({"visibility": "visible"})
      }
    })

// coral facts
$(window).scroll(function(){
  if($(document).scrollTop() == 4000){
    $('#coralfacts').css('visibility') == 'visible';
    console.log("is this working")
  }
});
  // 



});
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


var interval = 0
$(window).bind('mousewheel', function(event) {
  if (event.originalEvent.wheelDelta >= 0 && event.originalEvent.wheelDelta > 50) {
    if(interval > 15){ // scroll up
      let year = parseInt($('#year').text())
      if (year >= 1960){
        year -= 10
        $('#year').text(year)
        interval = 0
      }
     
    }
  } else { // scroll down
    if(interval > 15 && event.originalEvent.wheelDelta < -50){
      let year = parseInt($('#year').text())
      if (year <= 2050){
        year += 10
        $('#year').text(year)
        interval = 0
      }
    
    }
    console.log('Scroll down');
  }
  interval += 1

  console.log($(document).scrollTop(),"arthur you got this")

  if($(document).scrollTop() == 0){
    $('#year').text(1950)
  }
  if ($(document).scrollTop() >= 3000){
    $('#year').text(2060)
  }

});

$(window).scroll(function(){
    if($(document).scrollTop() > 1200){
      $('#coral1').hide();
    }
  });

 $(window).scroll(function(){
    if($(document).scrollTop() < 1200){
      $('#coral1').show();
    }
  });
// 
$(window).scroll(function(){
    if($(document).scrollTop() > 1400){
      $('#coral2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1400){
      $('#coral2').show();
    }
  });
// 
$(window).scroll(function(){
    if($(document).scrollTop() > 1500){
      $('#coral3').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1500){
      $('#coral3').show();
    }
  });
// 
$(window).scroll(function(){
    if($(document).scrollTop() > 1700){
      $('#coral4').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1700){
      $('#coral4').show();
    }
  });
//

$(window).scroll(function(){
    if($(document).scrollTop() > 1800){
      $('#coral5').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1800){
      $('#coral5').show();
    }
  });
//

$(window).scroll(function(){
    if($(document).scrollTop() > 2100){
      $('#coral-wrap').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2100){
      $('#coral-wrap').show();
    }
  });
//

$(window).scroll(function(){
    if($(document).scrollTop() > 2200){
      $('#coral-leaf').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2200){
      $('#coral-leaf').show();
    }
  });
//
  $(window).scroll(function(){
    if($(document).scrollTop() > 3200){
      $('#coral-leaf2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 3200){
      $('#coral-leaf2').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 2500){
      $('#coral-leaf3').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2500){
      $('#coral-leaf3').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 2700){
      $('#coral-leaf4').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2700){
      $('#coral-leaf4').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 2900){
      $('#coral-leaf5').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2900){
      $('#coral-leaf5').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 2910){
      $('#rock').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2910){
      $('#rock').show();
    }
  });
  
  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 1560){
      $('#rock2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1560){
      $('#rock2').show();
    }
  });

  //
  
  $(window).scroll(function(){
    if($(document).scrollTop() > 3000){
      $('#bubble').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 3000){
      $('#bubble').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 3100){
      $('#bubbles2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 3100){
      $('#bubbles2').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 1950){
      $('#fish').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1950){
      $('#fish').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 2850){
      $('#fish2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2850){
      $('#fish2').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 1780){
      $('#star').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1780){
      $('#star').show();
    }
  });

  //

  $(window).scroll(function(){
    if($(document).scrollTop() > 2350){
      $('#star2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2350){
      $('#star2').show();
    }
  });
//
  $(window).scroll(function(){
    if($(document).scrollTop() > 2350){
      $('#bubblemove4').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 2350){
      $('#bubblemove4').show();
    }
  });
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1875){
    $('#bubblemove3').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1875){
    $('#bubblemove3').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 2100){
    $('#bubblemove2').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 2100){
    $('#bubblemove2').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 430){
    $('#bubblemove1').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 430){
    $('#bubblemove1').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 2350){
    $('#jellyfish2').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 2350){
    $('#jellyfish2').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1940){
    $('#goldfish2').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1940){
    $('#goldfish2').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 450){
    $('#fishswim').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 450){
    $('#fishswim').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1320){
    $('#nemo').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1320){
    $('#nemo').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1760){
    $('#goldfish').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1760){
    $('#goldfish').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 345){
    $('#jellyfish').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 345){
    $('#jellyfish').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 984){
    $('#coralimage6').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 984){
    $('#coralimage6').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1500){
    $('#coralimage5').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1500){
    $('#coralimage5').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 2040){
    $('#coralimage4').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 2040){
    $('#coralimage4').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 200){
    $('#coralimage3').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 200){
    $('#coralimage3').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 350){
    $('#coralimage2').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 350){
    $('#coralimage2').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 2350){
    $('#coralimage1').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 2350){
    $('#coralimage1').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 450){
    $('#coralstuff1').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 450){
    $('#coralstuff1').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 520){
    $('#coralstuff2').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 520){
    $('#coralstuff2').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 730){
    $('#coralstuff3').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 730){
    $('#coralstuff3').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 890){
    $('#coralstuff4').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 890){
    $('#coralstuff4').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1230){
    $('#bubblemove8').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1230){
    $('#bubblemove8').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1450){
    $('#bubblemove7').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1450){
    $('#bubblemove7').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 1600){
    $('#bubblemove6').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 1600){
    $('#bubblemove6').show();
  }
});
//
$(window).scroll(function(){
  if($(document).scrollTop() > 2100){
    $('#bubblemove5').hide();
  }
});

$(window).scroll(function(){
  if($(document).scrollTop() < 2100){
    $('#bubblemove5').show();
  }
});
//