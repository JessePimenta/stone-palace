$(document).ready(function () {

var animationName = 'animated pulse';
var animationFlash = 'animated flash';
var secondAnimation = 'animated jello'
var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


//castle moon bounce action
      $('.castle').on('click',function() {
    $( this ).addClass(secondAnimation).one(animationend,function(){
    $( this ).removeClass(secondAnimation);

      });
    });

// exhibition pulse
    $('.exhibition').on('mouseleave',function(){
      $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
    })
  // stonePalace animation
    // $('.stonePalace').on('click',function(){
    //   $(this).addClass(animationName).one(animationend,function(){
    //   $(this).removeClass(animationName)
    //   $(this).appendTo('.max')
    // });
    // })
// name pulse
    $('.max').hover(function(){
      $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
    })
// info pulse
    $('.datesNTime').hover(function(){
      $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
    })
// lil dude jello bounce
    $('.lildude').hover(function(){
      $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
    })

// multiple dudes
    $('.lildude').on("click",function(){
      $(this).appendTo(".max")
      console.log('works');
    })

// draggable stuff inside container
    var $draggable =
    $('.draggable').draggabilly({
      containment: true
})
	});
