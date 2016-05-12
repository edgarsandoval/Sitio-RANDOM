jQuery(document).ready(function($) {
	"use strict";
// Contact form
	$(function() {
	$("#redes-sociales").validate({
        ignore: ".ignore",
    	rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            'correo-electronico': {
                required: true,
                email:true
            },
            compañia: {
                required: true,
            },
            "hiddenRecaptcha": {
                 required: function() {
                    console.log("this");
                    if(grecaptcha.getResponse() == '') {
                        return true;
                     } else {
                        return false;
                     }
                 }
            }
        },
		messages: {
            nombre:
            {
                required: "Por favor, escribe un nombre valído"
            },
            apellido: {
                required: "Por favor, escribe un apellido válido"
            },
            'correo-electronico': {
                required: "Por favor escribe un correo válido",
                email: "Por favor escribe un correo válido"
            },
            compañia: {
                required: "Llena este campo, por favor",
            },
            "hiddenRecaptcha": {
                required: "reCAPTCHA no válido",
            }
        },
		submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process/redes-sociales.php",
                success: function(response) {
                    $('#redes-sociales :input').attr('disabled', 'disabled');
                    $(this).find(':input').attr('disabled', 'disabled');
                    $(this).find('label').css('cursor','default');
                    $('#success').fadeIn();
                },
                error: function() {
                    $('#error').fadeIn();
                }
            });
        }
    });
});
});