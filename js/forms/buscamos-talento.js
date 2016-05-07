jQuery(document).ready(function($) {
	"use strict";
// Contact form
	$(function() {
	$("#buscamos-talento").validate({
    	rules: {
            area: {
                required: true
            },
            timepo: {
                required: true
            },
            nombre: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            numero: {
                required: true,
                minlength: 8
            },
        },
		messages: {
            area:
            {
                required: "Por favor, selecciona un área"
            },
            tiempo: {
                required: "Por favor, llena este campo"
            },
            nombre: {
                required: "Por favor, escribe tu nombre",
                minlength: "Por favor, escribe un nombre valido"
            },
            email: {
                required: "Por favor escribe un correo válido"
            },
            numero: {
                required: "Escribre un numero, sino no podremos comunicarnos. :(",
                minlength: "Numero incorrecto"
            },
        },
		submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process/buscamos-talento.php",
                success: function(response) {
                    console.log(response);
                    $('#buscamos-talento :input').attr('disabled', 'disabled');
                    $('#buscamos-talento').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#buscamos-talento').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
});