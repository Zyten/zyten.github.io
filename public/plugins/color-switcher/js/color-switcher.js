( function( $ ) {
    "use strict";

    $('.toggle-switcher').click(function(e){
    	e.preventDefault();
    	$('#color-switcher').toggleClass('opensw');
    });

    $('#color-switcher ul a').click(function(e){
    	e.preventDefault();
    	var colorSet = $(this).attr('href').substring(1);
    	$('link#switch').attr('href','public/styles/'+colorSet+'.css');
    });

} )( jQuery );