/* FOR DEBUG ONLY!
window.onload = function(e){
	jQuery(document).ready(function($){
		function getWindowSize(){
			var ww = window.innerWidth,
				wh = window.innerHeight;
			debugPanel.text(ww+' x '+wh);
		}
		$('body').append('<div class="js-ws"></div>');
		var debugPanel = $('.js-ws');
		debugPanel.css({
			'position': 'fixed',
			'font-size': '11px',
			'bottom': 0,
			'right': '5vw',
			'background': 'rgba(0,0,0,.3)',
			'color': 'white',
			'padding': (10 / 1920 * 100) + 'vw',
			'z-index': 2000
		});
		getWindowSize();
		$(window).on('resize', getWindowSize);
	});
};*/
// FOR DEBUG ONLY!





$(function() {

	var is_touch = 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch) || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0,//'ontouchstart' in window,
		is_ios = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document),
		is_ie = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1,
		is_video_playing = false;

	function video_to_pause() {
		$('.js-testimonials-video').each( function() {
			if ( ! $(this).hasClass('vjs-paused') ) {
				var video_id = $(this).attr('id');
				videojs(video_id).pause();
				is_video_playing = false;
			}
		});
	}


	$('.js-menu-toggle').on('click', function(event) {
		event.preventDefault();
		if ($('body').hasClass('menu__open')) {
			$('body').removeClass('menu__open');
		} else {
			$('body').addClass('menu__open');
		}
	});
	$('.menu').on('click', 'a', function(event) {
		if ($('body').hasClass('menu__open')) {
			$('body').removeClass('menu__open');
		} else {
			$('body').addClass('menu__open');
		}
	});


	$('.publications__table').on('click', '.js-publication', function(event) {
		event.preventDefault();
		var btn = $(this),
			table = $(this).parents('.publications__table');
		if (table.hasClass('publications__table--open')) {
			table.removeClass('publications__table--open');
		} else {
			table.addClass('publications__table--open');			
		}
		setTimeout(function(){
			$('html, body').animate({scrollTop: table.offset().top}, 500);
		}, 300);
	});

	$('.video-js').each( function(video_index) {
	    var video_id = $(this).attr('id');
	    videojs(video_id).ready(function(){
	        this.on('play', function(e) {
	        	$(".video-js").each(function (index) {
	                if (video_index !== index) {
	                    this.player.pause();
	                }
	            });
	        });
	    });
	});
});