$(document).ready(function() {

	$("#phone").intlTelInput({
     
      nationalMode: false,
      preferredCountries: ['sg'],
      separateDialCode: false,
     
    });

    // header scrollling

    var nav = $('.navbar-fixed-top');
    var distance = $('.navbar-fixed-top').offset();

    //console.log(distance);
    if(distance.top >= 300){
    	nav.addClass('effect');
    	nav.addClass('header_effect');
    }
    
    $(window).scroll(function(){
    	var scroll = $(window).scrollTop();
    	
    	if(scroll >= 300){
    		nav.addClass('effect');
    		nav.addClass('header_effect');

    	}else{
    		nav.removeClass('effect');
    		nav.removeClass('header_effect');
    	}
    })

    // Form validation

	$('#registration').on('submit', function(event) {

		/* stop form from submitting normally */
	    event.preventDefault();

	    var name = $('#name').val();
	    var phone = $('#phone').val();
	    var email = $('#email').val();
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	    var url = $(this).attr('action');
	    var type = $(this).attr('method');
	   
		if (name === "") {

			$('.error-mes').html('This is required');
			console.log('Name is required!!!')

			return false;

		}else{

			$('.error-mes').html('');
		}

		//phone.match(/^\d+$/)
		if (phone === ""){
			$('.error-phone').html('This is required');
			console.log('Phone is required!!!')
			return false;

		}else if ( phone.match(/^\d+$/) ){

			$('.error-phone').html('Please enter valid number');
			return false;

		}else{
			
			$('.error-phone').html('');
		}

		// validate emails
		// if ( !re.test(email) ) {
		// 	$('.error-email').html('Invalid email');
		// }else{
		// 	$('.error-email').html('');
		// }

		// checkbox  
		if ( !$('#checkbox').is(':checked') ){

			$('.error-check').html('Please accept Terms & Conditions');
			console.log('Please accept Terms & Conditions')

			return false;

		} else{

			$('.error-check').html('');
			console.log('Successful!!!')
			$.ajax({  

				 url:url,  
				 type:type,  
				 data:{name:name, phone: phone, email:email},
				 success: function(data) {
				 	$("#registration").trigger("reset");  

				 	console.log(data);
				 	$('#successmsg').fadeIn();
				 	setTimeout(function(){$('#successmsg').fadeOut("Slow");}, 3000);  
				 }  
			});
		}
		
	});

});

smoothScroll.init({
	speed: 700,
	easing: 'easeInOutQuad',
	updateURL: false,
	offset:0
});
