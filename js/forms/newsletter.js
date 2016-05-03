jQuery(document).ready(function($) {
	"use strict";
    // Newsletter form
	$(function() {
	$("#newsletter").validate({
    	rules: {
            email: {
                required: true,
                email: true
            },
        },
		messages: {
            email: {
                required: "Por favor escribe un correo válido"
            },
        },
		submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process/newsletter.php",
                success: function() {
                    $('#newsletter :input').attr('disabled', 'disabled');
                    $('#newsletter').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#news-success').fadeIn();
                    });
                },
                error: function(response) {
                    console.log($(form).serialize());
                    $('#newsletter').fadeTo( "slow", 0.15, function() {
                        $('#news-error').fadeIn();
                    });
                }
            });
        }
    });
});
});