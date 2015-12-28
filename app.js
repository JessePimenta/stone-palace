$(document).ready(function () {

var animationName = 'animated pulse';
var animationFlash = 'animated flash';
var secondAnimation = 'animated jello'
var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      $('.castle').on('click',function() {
    $( this ).addClass(secondAnimation).one(animationend,function(){
    $( this ).removeClass(secondAnimation);
      });
    });


    $('.exhibition').on('mouseleave',function(){
      $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
    })
    $('.max').hover(function(){
      $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
    })
    $('.datesNTime').hover(function(){
      $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
    })
    $('.lildude').hover(function(){
      $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
    })
	});
