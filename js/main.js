(function ($) {
"use strict";

// PRELOADER JS CODE
jQuery(window).on('load',function(){
	jQuery(".loader-box").fadeOut(500);
});
// END PRELOADER JS CODE

// meanmenu
$('.menu_bar').meanmenu({
	meanMenuContainer: '#menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('#testimonial-slider');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.testimonial-wrap:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.testimonial-wrap[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		centerMode: true,
	 	centerPadding: '60px',
		slidesToShow: 1,
		fade: true,
		arrows: true,
		prevArrow: '<i class="fas fa-chevron-left"></i>',
		nextArrow: '<i class="fas fa-chevron-right"></i>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
// $('#testimonial-slider').owlCarousel({
//     loop:true,
//     margin:0,
// 	items:1,
// 	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//     nav:false,
// 	dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         767:{
//             items:3
//         },
//         992:{
//             items:3
//         }
//     }
// })


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


var mixer = mixitup('.product_wrap');

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="far fa-arrow-alt-circle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

// progress-bar
jQuery(document).ready(function () {

	jQuery('.progress-bar').each(function () {
		jQuery(this).find('.progress-content').animate({
			width: jQuery(this).attr('data-percentage')
		}, 2000);

		jQuery(this).find('.progress-number-mark').animate({
			left: jQuery(this).attr('data-percentage')
		}, {
			duration: 2000,
			step: function (now, fx) {
				var data = Math.round(now);
				jQuery(this).find('.percent').html(data + '%');
			}
		});
	});
});


})(jQuery);