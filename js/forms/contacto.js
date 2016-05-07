jQuery(document).ready(function($) {
	"use strict";
// Contact form
	$(function() {
	$("#contact").validate({
    	rules: {
            nombre: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            asunto: {
                required: true
            },
			mensaje: {
                required: true
            }
        },
		messages: {
            nombre: {
                required: "Por favor, escribe tu nombre",
                minlength: "Por favor, escribe tu nombre correctamente"
            },
            email: {
                required: "Por favor, escribe un e-mail válido"
            },
            asunto: {
                required: "Escribe algún asunto",
                minlength: "Ausnto muuuy corto. :("
            },
			 mensaje: {
                required: "Escribe tu mensaje",
                minlength: "Mensaje muuuy corto. :("
            }
        },
		submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process/contacto.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
});