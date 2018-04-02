$(function() {
	// slider

	$(".top-slider").owlCarousel({
		'items': 1,
		'loop': true,
		'autoplay': true,
		'animateOut': 'fadeOut',
  		'animateIn': 'fadeIn',
	});

	// popup
	$('.contact-us').on('click', function () {
		$('.contact-form-holder').fadeIn();
		$('.contact-form-holder').css('display', 'flex');
		$('body').addClass('freez');
	});
	$('.contact-form-holder').on('click', function (e) {
		if (e.target.classList.value == 'contact-form-holder' || e.target.classList.value == 'close-form') {
			$('.contact-form-holder').fadeOut();
			$('body').removeClass('freez');	
		}
	});
	// phone mask

	$('#phone').mask('+38 (099) 999-99-99');
	//validation
});
	var checkField = {
		'name': /^[^@\\\/\<\>\_\|\;\:\.\/#/^/*/(/)/+/=]{3,30}$/g,
		'phone': /^\+38\s\(0\d{2}\)\s\d{3}\-\d{2}\-\d{2}$/g,
		'email': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
		'status': false // validation status before submit
	};

	checkIt('#name', checkField.name);
	checkIt('#phone', checkField.phone);
	checkIt('#email', checkField.email);


	function checkIt(id, reg) {
		$(id).blur(function () {
			if (!reg.test($(id).val())) {
				checkField.status = false;
				$(id).css('borderColor', 'red');
			} else {
				$(id).css('borderColor', 'green');
				checkField.status = true;
			}
		});
	}
	

