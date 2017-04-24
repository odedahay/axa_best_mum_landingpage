$(document).ready(function() {

	$("#phone").intlTelInput({

      nationalMode: false,
      preferredCountries: ['sg'],
      separateDialCode: false,

    });

    // var nav = $('header');
    // var distance = $('.header-sec-one').offset();
		//
    // //console.log(distance);
    // if(distance.top >= 300){
    // 	nav.addClass('effect');
    // 	nav.addClass('header_effect');
    // }
		//
    // $(window).scroll(function(){
    // 	var scroll = $(window).scrollTop();
		//
    // 	if(scroll >= 300){
    // 		nav.addClass('effect');
    // 		nav.addClass('header_effect');
		//
    // 	}else{
    // 		nav.removeClass('effect');
    // 		nav.removeClass('header_effect');
    // 	}
    // })


		// global variables
  	var errors;
  	var errorMessage;

    // Form validation
		$("#registration").on("submit", function(e) {

			var url = $(this).attr('action');
		  var type = $(this).attr('method');

			event.preventDefault();
			errors = false;

			// Clear the errors
			$('.errors').remove();

			//check name field
		  if (!nameField()){
		    errors = true;
		  }

			//check phone field
			if (!phoneField()){
		    errors = true;
		  }
			//check email field
			if (!emailField()){
		    errors = true;
		  }

			//functions list
			function nameField(){
				var name = $("#name").val();
				if (name === ""){
					//$(".error-mes").text("This is required");
					$("input[name='name']").after( "<div class='errors'>This is required</div> ");
					return false;
				}
			}

			function phoneField(){
				var phone = $("#phone").val();

				if (phone === "") {
					$(".error-phone").after( "<div class='errors'>This is required</div> ");
					return false;

				}else if(isNaN(phone) === true){

					$(".error-phone").after( "<div class='errors'>Please provide a valid phone numbers</div> ");
					return false;

				}
			}

			// email information
			function emailField(){

  			var email = $("#email").val();
  			var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				if (email === ""){
					return true;
				} else if (!emailRegEx.test(email)){
					$("input[name='email']").after( "<div class='errors'>Please provide a valid email address</div> ");
					return false;
				}
			}

			// function checkBoxField(){
			//
			// 	if ( !$('input:checkbox').is(':checked') ){
			// 		$("input[name='checkbox']").after( "<div class='errors'>Please accept Terms & Conditions</div> ");
			// 		return false;
			// 	}
			// }

			// checkbox
			if ( !$('#checkbox').is(':checked') ){

				$("input[name='checkbox']").after( "<div class='errors'>Please accept Terms & Conditions</div> ");
				return false;

			}else {
				console.log( $('#registration').serialize() );

				$.ajax({
					url:url,
					type:type,
					data:$('#registration').serialize()
				})
				.done(function(response){

					$("#registration").trigger("reset");
	      	$('#successmsg').html("<strong></strong>Your message has been successfully sent.");
	     	});

			}

			return !errors;

		});
// 	$('#registration').on('submit', function(event) {
//
// 		/* stop form from submitting normally */
// 	    event.preventDefault();
//
// 	    var name = $('#name').val();
// 	    var phone = $('#phone').val();
// 	    var email = $('#email').val();
// 	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//
// 	    var url = $(this).attr('action');
// 	    var type = $(this).attr('method');
//
// 		if (name === "") {
//
// 			$('.error-mes').html('This is required');
// 			console.log('Name is required!!!')
//
// 			return false;
//
// 		}else{
//
// 			$('.error-mes').html('');
// 		}
//
// 		//phone.match(/^\d+$/)
// 		if (phone === ""){
// 			$('.error-phone').html('This is required');
// 			console.log('Phone is required!!!')
// 			return false;
//
// 		}else if ( phone.match(/^\d+$/) ){
//
// 			$('.error-phone').html('Please enter valid number');
// 			return false;
//
// 		}else{
//
// 			$('.error-phone').html('');
// 		}
//
// 		// validate emails
// 		// if ( !re.test(email) ) {
// 		// 	$('.error-email').html('Invalid email');
// 		// }else{
// 		// 	$('.error-email').html('');
// 		// }
//
// 		// checkbox
// 		if ( !$('#checkbox').is(':checked') ){
//
// 			$('.error-check').html('Please accept Terms & Conditions');
// 			console.log('Please accept Terms & Conditions')
//
// 			return false;
//
// 		} else{
//
// 			$('.error-check').html('');
// 			console.log('Successful!!!')
// 			$.ajax({
//
// 				 url:url,
// 				 type:type,
// 				 data:{name:name, phone: phone, email:email},
// 				 success: function(data) {
// 				 	$("#registration").trigger("reset");
//
// 				 	console.log(data);
// 				 	$('#successmsg').fadeIn();
// 				 	setTimeout(function(){$('#successmsg').fadeOut("Slow");}, 3000);
// 				 }
// 			});
// 		}
//
// 	});
//
});


// header scrollling
function init() {
		window.addEventListener('scroll', function(e){
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
						shrinkOn = 300,
						header = document.querySelector("header");
				if (distanceY > shrinkOn) {
						classie.add(header,"smaller");
				} else {
						if (classie.has(header,"smaller")) {
								classie.remove(header,"smaller");
						}
				}
		});
}
window.onload = init();

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

smoothScroll.init({
	speed: 700,
	easing: 'easeInOutQuad',
	updateURL: false,
	offset:0
});
