$(function(){
	//nav开始
	$('.nav .nav-in ul li span').css('top','0px');
	$('.nav .nav-in ul li').hover(function(e) {
    	$(this).children('span').stop().animate({'top':'-80px'},350);
    },function(){
    	$(this).children('span').stop().animate({'top':'0px'},350);
	});
	
	
	
	//音乐
	$('.music').click(function(e) {
        if($('audio')[0].muted){
			$('audio')[0].muted =false;
			$(this).css('background-image','url(images/music.gif)');		
		}else{
		   $('audio')[0].muted = true;
		   $(this).css('background-image','url(images/music-stop.png)')
		}
    });
	
	//音乐
	
	/*电梯导航*/
	function myFn(par1){
		$('.nav').show();
		$('.nav .nav-in ul li').removeClass('current');
		$('.nav .nav-in ul li').children('a').html('');
		$('.nav .nav-in ul li').eq(par1+1).addClass('current');
		$('.nav .nav-in ul li').eq(par1).children('a').html($('.nav .nav-in ul li').eq(par1).attr('txt2'));
	}
		
	$(window).scroll(function(e) {
	var sT = $(window).scrollTop();
		if(sT >= $('.louCeng').eq(5).offset().top){
			myFn(5);
		}else if(sT >= $('.louCeng').eq(4).offset().top){
			myFn(4);
		}else if(sT >= $('.louCeng').eq(3).offset().top){
			myFn(3);
		}else if(sT >= $('.louCeng').eq(2).offset().top){
			myFn(2);
		}else if(sT >= $('.louCeng').eq(1).offset().top){
			myFn(1);
		}else if(sT >= $('.louCeng').eq(0).offset().top){
			myFn(0);
		}else {
			$('.nav').hide();
		}
     
	   	//$(window).scrollTop()
		if($(window).scrollTop() > $(window).height()/2){
				$('.myTop').show();
			}else{
				$('.myTop').hide();	
			}
   		 });	
		
		$('.myTop').click(function(e) {
            $('body,html').animate({'scrollTop':'0'},500);
        });
		
	$('.nav .nav-in ul li').click(function(e) {
        //alert($(this).index());
		var jump = $('.louCeng').eq($(this).index()).offset().top;//  '+jump+'
		$('body,html').stop().animate({'scrollTop':''+jump+'px'},300);

    });
	
	
	/*电梯导航*/
		var num = 0;
		var timer01 = null;
		var timerFn = function(){
			$('.banner .image ul li').eq(num).stop().fadeOut();
			num++;
			if(num >2){
				num = 0;
			}
			$('.banner .con ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('.banner .image ul li').eq(num).stop().fadeIn();
		};
		timer01 = setInterval(timerFn,2000);
		$('.banner .image ul li:first').show();	
		
		$('.banner .con ol li').click(function(e) {
		
			$(this).addClass('current').siblings().removeClass('current');
			$('.banner .image ul li').eq(num).stop().fadeOut();
			$('.banner .image ul li').eq($(this).index()).stop().fadeIn();
			num = $(this).index();
        });
		
       /*baner结束*/

	
	
	   /*case开始*/
	 $('.case .case-con .list ul li').hover(function(e) {
        $(this).children('.up').stop().animate({'top':'0px','opacity':'0.9'});
    },function(){
        $(this).children('.up').stop().animate({'top':'350px','opacity':'0.9'});
	});
	
		
	
	function fn(par1){
		   $('.fangda'+par1+'').click(function(e) {
			$('.click-out0'+par1+'').css('display','block');
		}); 
		
		$('.click-out0'+par1+' .close').click(function(e) {
			$('.click-out0'+par1+'').css('display','none');
		}); 
		
		$('.fangda'+par1+'').hover(function(e) {
			$(this).next().stop().animate({'top':'42px','opacity':'1'});
		},function(){
			$(this).next().stop().animate({'top':'42px','opacity':'0'});	
		});
		
		
		$('.right'+par1+'').click(function(e) {
	    num++;
		if(num > 5){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
         });
	
		$('.left'+par1+'').click(function(e) {
			num--;
			if(num < 0){
				num = 5;
			}
			var moveLeft = -100 * num;
			$('.out-d .pic').css('left',''+moveLeft+'%')
		});
	}
	
	    fn('0');
		fn('1');
		fn('2');
		fn('3');
		fn('4');
		fn('5');
		
	$('.uibox .ui .u-list li').hover(function(e) {
        $(this).addClass('cur').siblings().removeClass('cur');
    },function(){
	
	});
	
	
	/*$('.right1').click(function(e) {
	    num++;
		if(num > 4){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left1').click(function(e) {
	    num--;
		if(num < 0){
			num = 4;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	*/
	
	
	/*鼠标移上移出事件*/
	/*$('.fangda0').hover(function(e) {
        $(this).next().stop().animate({'top':'42px','opacity':'1'});
    },function(){
		$(this).next().stop().animate({'top':'42px','opacity':'0'});	
	});
	$('.fangda1').hover(function(e) {
        $(this).next().stop().animate({'top':'42px','opacity':'1'});
    },function(){
		$(this).next().stop().animate({'top':'42px','opacity':'0'});	
	});

	$('.fangda2').hover(function(e) {
        $(this).next().stop().animate({'top':'42px','opacity':'1'});
    },function(){
		$(this).next().stop().animate({'top':'42px','opacity':'0'});	
	});

	$('.fangda3').hover(function(e) {
        $(this).next().stop().animate({'top':'42px','opacity':'1'});
    },function(){
		$(this).next().stop().animate({'top':'42px','opacity':'0'});	
	});

	$('.fangda4').hover(function(e) {
        $(this).next().stop().animate({'top':'42px','opacity':'1'});
    },function(){
		$(this).next().stop().animate({'top':'42px','opacity':'0'});	
	});


	$('.fangda5').hover(function(e) {
        $(this).next().stop().animate({'top':'42px','opacity':'1'});
    },function(){
		$(this).next().stop().animate({'top':'42px','opacity':'0'});	
	});*/

	/*点击事件*/
	/*$('.fangda0').click(function(e) {
        $('.click-out00').css('display','block');
    }); 
	
	$('.click-out00 .close').click(function(e) {
        $('.click-out00').css('display','none');
    }); 
	
	
	$('.fangda1').click(function(e) {
        $('.click-out01').css('display','block');
    }); 
	
	$('.click-out01 .close').click(function(e) {
        $('.click-out01').css('display','none');
    }); 
 
 
	
	$('.fangda2').click(function(e) {
        $('.click-out02').css('display','block');
    }); 
	
	$('.click-out02 .close').click(function(e) {
        $('.click-out02').css('display','none');
    }); 
		
	$('.fangda3').click(function(e) {
        $('.click-out03').css('display','block');
    }); 
	
	$('.click-out03 .close').click(function(e) {
        $('.click-out03').css('display','none');
    }); 
		
	$('.fangda4').click(function(e) {
        $('.click-out04').css('display','block');
    }); 
	
	$('.click-out04 .close').click(function(e) {
        $('.click-out04').css('display','none');
    }); 
		
	$('.fangda5').click(function(e) {
        $('.click-out05').css('display','block');
    }); 
	
	$('.click-out05 .close').click(function(e) {
        $('.click-out05').css('display','none');
    }); 
		
		*/

	/*放大左右按钮点击*/
	/*$('.right0').click(function(e) {
	    num++;
		if(num > 4){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left0').click(function(e) {
	    num--;
		if(num < 0){
			num = 4;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.right1').click(function(e) {
	    num++;
		if(num > 4){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left1').click(function(e) {
	    num--;
		if(num < 0){
			num = 4;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.right2').click(function(e) {
	    num++;
		if(num > 4){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left2').click(function(e) {
	    num--;
		if(num < 0){
			num = 4;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
		
	$('.right3').click(function(e) {
	    num++;
		if(num > 5){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left3').click(function(e) {
	    num--;
		if(num < 0){
			num = 5;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.right4').click(function(e) {
	    num++;
		if(num > 5){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left4').click(function(e) {
	    num--;
		if(num < 0){
			num = 5;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
		
	$('.right5').click(function(e) {
	    num++;
		if(num > 4){
			num = 0;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });
	
	$('.left5').click(function(e) {
	    num--;
		if(num < 0){
			num = 4;
		}
		var moveLeft = -100 * num;
		$('.out-d .pic').css('left',''+moveLeft+'%')
    });*/
	/*放大左右按钮点击*/
	  /*case结束*/



 $('.uibox .ui .u-list li').mouseenter(function(e) {
        $(this).addClass('animated tada')
    }).mouseleave(function(e) {
        $(this).removeClass('animated tada')
    });



$('.uibox .ui .u-list li').click(function(e) {
    $('.wclick1').css('display','block');
});




/*top开始*/
		$('.myTop').click(function(e) {
            $('body,html').animate({'scrollTop':'0'},500);
        });
		
/*top结束*/

})









