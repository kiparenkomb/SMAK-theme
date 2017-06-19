import HP from './helpers';

(function ($) {

// function stickyMenu() {

	$(document).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#navbar').addClass('navbar-small');
		} else {
			$('#navbar').removeClass('navbar-small');
		}
	});
// }

	// SLIDER SECTION HOME
	$('.text-slider').slick({
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			speed: 900,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			draggable: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});

	// ANIMATIONS
	$('.service-item:even').viewportChecker({
		classToAdd: 'fadeInDown',
		// repeat: true,
		offset: -150,
	});
	$('.service-item:odd').viewportChecker({
		classToAdd: 'fadeInUp',
		// repeat: true,
		offset: -150,
	});
	$('.process-item').viewportChecker({
		classToAdd: 'fadeInLeft',
		repeat: true,
		// offset: -150,
	});
	
	// $('.about__item:nth-child(odd)').viewportChecker({
	// 	classToAdd: 'fadeInLeft',
	// });
	// $('.about__item:nth-child(even)').viewportChecker({
	// 	classToAdd: 'fadeInRight',
	// });
	// $('.info-box').viewportChecker({
	// 	classToAdd: 'info-visible',
	// });








}(jQuery));