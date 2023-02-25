$.fn.DeeboProgressIsInViewport = function(content) {
	"use strict";
	return $(this).offset().top - content.outerHeight();
};
/*
 * Copyright (c) 2021 Frenify
 * Author: Frenify
 * This file is made for CURRENT TEMPLATE
*/


(function($){
  "use strict";
  
  
	var FrenifyDeebo = {

		init: function(){
			FrenifyDeebo.BgImg();
			FrenifyDeebo.imgToSVG();
			FrenifyDeebo.resume();
			FrenifyDeebo.anchor();
			FrenifyDeebo.darklight();
		},
		
		darklight: function(){
			$('.deebo_fn_switcher_wrap input').on('change',function(){
				var checkBox = $(this);
				if(checkBox.is(':checked')){
					setTimeout(function(){
						document.documentElement.classList.add('dark');
						document.body.classList.remove('light');
						localStorage.theme = 'dark'
					},500);
				}else{
					setTimeout(function(){
						document.documentElement.classList.remove('dark');
						document.body.classList.add('light');
						localStorage.theme = 'light'
					},500);
				}
				return false;
			});
		},
		
		anchor: function(){

			$('.anchor').on('click',function(){
				var selector = '.cv__content';
				if($(window).width() <= 1040){
					selector = 'body,html';
				}
				if($.attr(this, 'href') !== '#'){
					$(selector).animate({
						scrollTop: $($.attr(this, 'href')).offset().top
					}, 800);
				}

				return false;
			});	
		},

		isotope: function(){
			$('.grid').masonry({
				itemSelector: '.grid-item',
			});	
		},
		
		resume: function(){
			$('.deebo_fn__cv .cv__content').scrollTop(0);
			$('body').addClass('resume-opened');
		},

		imgToSVG: function(){
			$('img.fn__svg').each(function(){
				var img 		= $(this);
				var imgClass	= img.attr('class');
				var imgURL		= img.attr('src');

				$.get(imgURL, function(data) {
					var svg 	= $(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						svg 	= svg.attr('class', imgClass+' replaced-svg');
					}
					img.replaceWith(svg);

				}, 'xml');

			});	
		},

	  	BgImg: function(){
			var div = $('*[data-bg-img]');
			div.each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-bg-img');
				var dataBg	= element.data('bg-img');
				if(typeof(attrBg) !== 'undefined'){
					element.css({backgroundImage:'url('+dataBg+')'});
				}
			});
		},
    
  	};
  	
	
	// READY Functions
	$(document).ready(function(){FrenifyDeebo.init();});
	
	// RESIZE Functions
	$(window).on('resize',function(){
		FrenifyDeebo.isotope();
		setTimeout(function(){
			FrenifyDeebo.isotope();
		},1010);
	});
	
	// LOAD Functions
	$(window).on('load',function(){
		
		setTimeout(function(){
			
		},10);
	});
  	
})(jQuery);