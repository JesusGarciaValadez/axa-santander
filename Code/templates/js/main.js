/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
( function( $, window, undefined ) {
    
    var _AxaS    = window._AxaS, 
    
    // Use the correct document accordingly with window argument (sandbox)
    document = window.document,
    location = window.location,
    navigator = window.navigator,
    
    // Map over planPiso in case of overwrite
    _AxaS    = window.AxaS;
    
    // Define a local copy of AxaS
    AxaS = function() {
        if ( !( this instanceof AxaS ) ) {
            
            // The AxaS object is actually just the init constructor 'enhanced'
            return new AxaS.fn.init();
        }
        return AxaS.fn.init();
    };
    
    AxaS.overlay;
    
    //  Object prototyping
    AxaS.fn = AxaS.prototype = {
        /**
         *
         *  @function:  !constructor
         *  @description:   Constructor method
         *  @author: @_Chucho_
         *
         */
        //  Método constructor
        constructor:    AxaS, 
        /**
         *
         *  @function:  !init
         *  @description:   Inicializer method
         *  @author: @_Chucho_
         *
         */
        //  !Método inicializador
        init:   function ( ) {
            console.log('Hi');
        }, 
        /**
         *
         *  @function:  !validateContact
         *  @description:   Makes the validation of the contact form
         *  @see:   http://bassistance.de/jquery-plugins/jquery-plugin-validation/ || 
         *          http://docs.jquery.com/Plugins/Validation
         *  @author: @_Chucho_
         *
         */
        //  !Validación del formulario de contacto.
        validateFormOne:    function ( ) {
            var formActive = $( 'form' ).validate( { 
                onfocusout: false,
                onclick: true, 
                onkeyup: false,
                onsubmit: true, 
                focusCleanup: true, 
                focusInvalid: false, 
                errorClass: "error", 
                validClass: "valid", 
                errorElement: "label", 
                ignore: "", 
                /*showErrors: function( errorMap, errorList ) {
                    $('#message').empty().removeClass();
                    $("#message").html('<p>Error al ingresar la información.</p><p>Verifique que sus datos están correctos o que no falte ningún dato.</p><p>Por favor, vuelvalo a intentar.</p>');
                    $('#message').addClass('wrong').show('fast', function(){
                        $('#message').show('fast');
                    });
                    this.defaultShowErrors();
                },*/
                errorPlacement: function(error, element) {
                    error.prependTo( element.parent() );
                },
                //debug:true, 
                rules: { 
                    one: {
                        required: true
                    }, 
                    two: {
                        required: true
                    }, 
                    three: {
                        required: true
                    }, 
                    four: {
                        required: true
                    }, 
                    five: {
                        required: true
                    }, 
                    six: {
                        required: false,
                        maxlength: 140
                    }, 
                    seven: {
                        required: true
                    }, 
                    eight: {
                        required: true
                    }, 
                    nine: {
                        required: true
                    }, 
                    ten: {
                        required: true
                    }, 
                },
                messages: {
                    one: "Por favor, selecciona una opción", 
                    two: "Por favor, selecciona una opción", 
                    three: "Por favor, selecciona una opción", 
                    four: "Por favor, selecciona una opción", 
                    five: "Por favor, selecciona una opción", 
                    seven: "Por favor, selecciona una opción", 
                    eight: "Por favor, selecciona una opción", 
                    nine: "Por favor, selecciona una opción", 
                    ten: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }, 
                ignore: 'textarea', 
                highlight: function( element, errorClass, validClass ) {
                    $( element ).parent().addClass( 'error_wrapper' );
                },
                unhighlight: function(element, errorClass){
                    $( element ).parent().removeClass( 'error_wrapper' );
                }, 
                submitHandler: function(form){
                    // Form submit
                    $( form ).ajaxSubmit({
                        //    Before submitting the form
                        beforeSubmit: function showRequestLogin(arr, form, options){
                            
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                                
                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        //  !Function for handle data from server
                        success: function showResponseLogin( responseText, statusText, xhr, form ) {
                            
                            //console.log(responseText.success);
                            responseText    = $.parseJSON( responseText );
                            
                            if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                                
                                $( '.alert_box' ).addClass( 'thank_you_message' );
                                var _title      = 'Gracias';
                                var _markup     = '<p>Muchas gracias por haber contestado esta encuesta.</p>';
                                AxaS.openAlert( _title, _markup );
                                $( 'input[type="radio"]' ).removeAttr( 'checked');
                                $( 'textarea' ).val( "" );
                            } else {
                                
                                $( '.alert_box' ).addClass( 'error_message' );
                                var _title  = 'Error';
                                var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>';
                                AxaS.openAlert( _title, _markup );
                            }
                            AxaS.smoothScroll( 'body' );
                        }, 
                        resetForm: false, 
                        clearForm: false, 
                        //   If something is wrong
                        error: function( jqXHR, textStatus, errorThrown ) {
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p>Hubo un error al contestar la encuesta. Por favor, reporta este error.</p>';
                            AxaS.openAlert( _title, _markup );
                        }, 
                        cache: false
                    });
                }, 
                /*invalidHandler: function(form, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                        $("div#summary").html(message);
                        $("div#summary").show();
                    } else {
                        $("div#summary").hide();
                    }
                }*/
            } ); 
        }, 
        validateFormThird:    function ( ) {
            var formActive = $( 'form' ).validate( { 
                onfocusout: false,
                onclick: true, 
                onkeyup: false,
                onsubmit: true, 
                focusCleanup: true, 
                focusInvalid: false, 
                errorClass: "error", 
                validClass: "valid", 
                errorElement: "label", 
                ignore: "", 
                /*showErrors: function( errorMap, errorList ) {
                    $('#message').empty().removeClass();
                    $("#message").html('<p>Error al ingresar la información.</p><p>Verifique que sus datos están correctos o que no falte ningún dato.</p><p>Por favor, vuelvalo a intentar.</p>');
                    $('#message').addClass('wrong').show('fast', function(){
                        $('#message').show('fast');
                    });
                    this.defaultShowErrors();
                },*/
                errorPlacement: function(error, element) {
                    error.prependTo( element.parent() );
                },
                //debug:true, 
                rules: { 
                    one: {
                        required: true
                    }, 
                    two: {
                        required: true
                    }, 
                    three: {
                        required: true
                    }, 
                    four: {
                        required: true
                    }, 
                    five: {
                        required: true
                    }, 
                    six: {
                        required: true
                    }, 
                    seven: {
                        required: true
                    }, 
                    eight: {
                        required: true
                    }, 
                    nine: {
                        required: true
                    }, 
                    ten: {
                        required: false,
                        maxlength: 140
                    }, 
                },
                messages: {
                    one: "Por favor, selecciona una opción", 
                    two: "Por favor, selecciona una opción", 
                    three: "Por favor, selecciona una opción", 
                    four: "Por favor, selecciona una opción", 
                    five: "Por favor, selecciona una opción", 
                    six: "Por favor, selecciona una opción", 
                    seven: "Por favor, selecciona una opción", 
                    eight: "Por favor, selecciona una opción", 
                    nine: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }, 
                ignore: 'textarea', 
                highlight: function( element, errorClass, validClass ) {
                    $( element ).parent().addClass( 'error_wrapper' );
                },
                unhighlight: function( element, errorClass ) {
                    $( element ).parent().removeClass( 'error_wrapper' );
                }, 
                submitHandler: function( form ) {
                    // Form submit
                    $( form ).ajaxSubmit( {
                        //    Before submitting the form
                        beforeSubmit: function showRequestLogin( arr, form, options ) {
                            
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                                
                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        //  !Function for handle data from server
                        success: function showResponseLogin( responseText, statusText, xhr, form ) {
                            
                            //console.log(responseText.success);
                            responseText    = $.parseJSON( responseText );
                            
                            if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                                
                                $( '.alert_box' ).addClass( 'thank_you_message' );
                                var _title      = 'Gracias';
                                var _markup     = '<p>Muchas gracias por haber contestado esta encuesta.</p>';
                                AxaS.openAlert( _title, _markup );
                                $( 'input[type="radio"]' ).removeAttr( 'checked');
                                $( 'textarea' ).val( "" );
                                $( form ).fadeOut( 300 );
                            } else {
                                
                                $( '.alert_box' ).addClass( 'error_message' );
                                var _title  = 'Error';
                                var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>';
                                AxaS.openAlert( _title, _markup );
                            }
                            AxaS.smoothScroll( 'body' );
                        }, 
                        resetForm: false, 
                        clearForm: false, 
                        //   If something is wrong
                        error: function( jqXHR, textStatus, errorThrown ) {
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>';
                            AxaS.openAlert( _title, _markup );
                        }, 
                        cache: false
                    } );
                }, 
                /*invalidHandler: function(form, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                        $("div#summary").html(message);
                        $("div#summary").show();
                    } else {
                        $("div#summary").hide();
                    }
                }*/
            } ); 
        }, 
        validateFormDoublesOne:    function ( ) {
            var formActive = $( 'form' ).validate( { 
                onfocusout: false,
                onclick: true, 
                onkeyup: false,
                onsubmit: true, 
                focusCleanup: true, 
                focusInvalid: false, 
                errorClass: "error", 
                validClass: "valid", 
                errorElement: "label", 
                ignore: "", 
                /*showErrors: function( errorMap, errorList ) {
                    $('#message').empty().removeClass();
                    $("#message").html('<p>Error al ingresar la información.</p><p>Verifique que sus datos están correctos o que no falte ningún dato.</p><p>Por favor, vuelvalo a intentar.</p>');
                    $('#message').addClass('wrong').show('fast', function(){
                        $('#message').show('fast');
                    });
                    this.defaultShowErrors();
                },*/
                errorPlacement: function(error, element) {
                    error.prependTo( element.parent() );
                },
                //debug:true, 
                rules: { 
                    one: {
                        required: true
                    }, 
                    two: {
                        required: true
                    }, 
                    three: {
                        required: true
                    }, 
                    four: {
                        required: true
                    }, 
                    five: {
                        required: true
                    }, 
                    six: {
                        required: true
                    }, 
                    seven: {
                        required: true
                    }, 
                    eight: {
                        required: true
                    }, 
                    nine: {
                        required: true
                    }, 
                    ten: {
                        required: false,
                        maxlength: 140
                    }, 
                    eleven: {
                        required: true
                    }, 
                    twelve: {
                        required: false,
                        maxlength: 140
                    }
                },
                messages: {
                    one: "Por favor, selecciona una opción", 
                    two: "Por favor, selecciona una opción", 
                    three: "Por favor, selecciona una opción", 
                    four: "Por favor, selecciona una opción", 
                    five: "Por favor, selecciona una opción", 
                    six: "Por favor, selecciona una opción", 
                    seven: "Por favor, selecciona una opción", 
                    eight: "Por favor, selecciona una opción", 
                    nine: "Por favor, selecciona una opción", 
                    eleven: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números"
                }, 
                ignore: 'textarea', 
                highlight: function( element, errorClass, validClass ) {
                    $( element ).parent().addClass( 'error_wrapper' );
                },
                unhighlight: function( element, errorClass ) {
                    $( element ).parent().removeClass( 'error_wrapper' );
                }, 
                submitHandler: function( form ) {
                    // Form submit
                    $( form ).ajaxSubmit( {
                        //    Before submitting the form
                        beforeSubmit: function showRequestLogin( arr, form, options ) {
                            
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                                
                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        //  !Function for handle data from server
                        success: function showResponseLogin( responseText, statusText, xhr, form ) {
                            
                            //console.log(responseText.success);
                            responseText    = $.parseJSON( responseText );
                            
                            if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                                
                                $( '.alert_box' ).addClass( 'thank_you_message' );
                                var _title      = 'Gracias';
                                var _markup     = '<p>Muchas gracias por haber contestado esta encuesta.</p>';
                                AxaS.openAlert( _title, _markup );
                                $( 'input[type="radio"]' ).removeAttr( 'checked');
                                $( 'textarea' ).val( "" );
                                $( form ).fadeOut( 300 );
                            } else {
                                
                                $( '.alert_box' ).addClass( 'error_message' );
                                var _title  = 'Error';
                                var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>';
                                AxaS.openAlert( _title, _markup );
                            }
                            AxaS.smoothScroll( 'body' );
                        }, 
                        resetForm: false, 
                        clearForm: false, 
                        //   If something is wrong
                        error: function( jqXHR, textStatus, errorThrown ) {
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>';
                            AxaS.openAlert( _title, _markup );
                        }, 
                        cache: false
                    } );
                }, 
                /*invalidHandler: function(form, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                        $("div#summary").html(message);
                        $("div#summary").show();
                    } else {
                        $("div#summary").hide();
                    }
                }*/
            } ); 
        }, 
        validateFormDoublesTwo:    function ( ) {
            var formActive = $( 'form' ).validate( { 
                onfocusout: false,
                onclick: true, 
                onkeyup: false,
                onsubmit: true, 
                focusCleanup: true, 
                focusInvalid: false, 
                errorClass: "error", 
                validClass: "valid", 
                errorElement: "label", 
                ignore: "", 
                /*showErrors: function( errorMap, errorList ) {
                    $('#message').empty().removeClass();
                    $("#message").html('<p>Error al ingresar la información.</p><p>Verifique que sus datos están correctos o que no falte ningún dato.</p><p>Por favor, vuelvalo a intentar.</p>');
                    $('#message').addClass('wrong').show('fast', function(){
                        $('#message').show('fast');
                    });
                    this.defaultShowErrors();
                },*/
                errorPlacement: function(error, element) {
                    error.prependTo( element.parent() );
                },
                //debug:true, 
                rules: { 
                    one: {
                        required: true
                    }, 
                    two: {
                        required: true
                    }, 
                    three: {
                        required: true
                    }, 
                    four: {
                        required: true
                    }, 
                    five: {
                        required: true
                    }, 
                    six: {
                        required: true
                    }, 
                    seven: {
                        required: true
                    }, 
                    eight: {
                        required: true
                    }, 
                    nine: {
                        required: false,
                        maxlength: 140
                    }, 
                    ten: {
                        required: true
                    }, 
                    eleven: {
                        required: false,
                        maxlength: 140
                    }
                },
                messages: {
                    one: "Por favor, selecciona una opción", 
                    two: "Por favor, selecciona una opción", 
                    three: "Por favor, selecciona una opción", 
                    four: "Por favor, selecciona una opción", 
                    five: "Por favor, selecciona una opción", 
                    six: "Por favor, selecciona una opción", 
                    seven: "Por favor, selecciona una opción", 
                    eight: "Por favor, selecciona una opción", 
                    ten: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }, 
                ignore: 'textarea', 
                highlight: function( element, errorClass, validClass ) {
                    $( element ).parent().addClass( 'error_wrapper' );
                },
                unhighlight: function( element, errorClass ) {
                    $( element ).parent().removeClass( 'error_wrapper' );
                }, 
                submitHandler: function( form ) {
                    // Form submit
                    $( form ).ajaxSubmit( {
                        //    Before submitting the form
                        beforeSubmit: function showRequestLogin( arr, form, options ) {
                            
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                                
                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        //  !Function for handle data from server
                        success: function showResponseLogin( responseText, statusText, xhr, form ) {
                            
                            //console.log(responseText.success);
                            responseText    = $.parseJSON( responseText );
                            
                            if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                                
                                $( '.alert_box' ).addClass( 'thank_you_message' );
                                var _title      = 'Gracias';
                                var _markup     = '<p>Muchas gracias por haber contestado esta encuesta.</p>';
                                AxaS.openAlert( _title, _markup );
                                $( 'input[type="radio"]' ).removeAttr( 'checked');
                                $( 'textarea' ).val( "" );
                                $( form ).fadeOut( 300 );
                            } else {
                                
                                $( '.alert_box' ).addClass( 'error_message' );
                                var _title  = 'Error';
                                var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>';
                                AxaS.openAlert( _title, _markup );
                            }
                            AxaS.smoothScroll( 'body' );
                        }, 
                        resetForm: false, 
                        clearForm: false, 
                        //   If something is wrong
                        error: function( jqXHR, textStatus, errorThrown ) {
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>';
                            AxaS.openAlert( _title, _markup );
                        }, 
                        cache: false
                    } );
                }, 
                /*invalidHandler: function(form, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                        $("div#summary").html(message);
                        $("div#summary").show();
                    } else {
                        $("div#summary").hide();
                    }
                }*/
            } ); 
        }, 
        validateFormDoublesThree:    function ( ) {
            var formActive = $( 'form' ).validate( { 
                onfocusout: false,
                onclick: true, 
                onkeyup: false,
                onsubmit: true, 
                focusCleanup: true, 
                focusInvalid: false, 
                errorClass: "error", 
                validClass: "valid", 
                errorElement: "label", 
                ignore: "", 
                /*showErrors: function( errorMap, errorList ) {
                    $('#message').empty().removeClass();
                    $("#message").html('<p>Error al ingresar la información.</p><p>Verifique que sus datos están correctos o que no falte ningún dato.</p><p>Por favor, vuelvalo a intentar.</p>');
                    $('#message').addClass('wrong').show('fast', function(){
                        $('#message').show('fast');
                    });
                    this.defaultShowErrors();
                },*/
                errorPlacement: function(error, element) {
                    error.prependTo( element.parent() );
                },
                //debug:true, 
                rules: { 
                    one: {
                        required: true
                    }, 
                    two: {
                        required: true
                    }, 
                    three: {
                        required: true
                    }, 
                    four: {
                        required: true
                    }, 
                    five: {
                        required: true
                    }, 
                    six: {
                        required: true
                    }, 
                    seven: {
                        required: true
                    }, 
                    eight: {
                        required: true
                    }, 
                    nine: {
                        required: true
                    }, 
                    ten: {
                        required: false,
                        maxlength: 140
                    }, 
                    eleven: {
                        required: false,
                        maxlength: 140
                    }, 
                    twelve: {
                        required: true
                    }, 
                    thirteen: {
                        required: false,
                        maxlength: 140
                    }
                },
                messages: {
                    one: "Por favor, selecciona una opción", 
                    two: "Por favor, selecciona una opción", 
                    three: "Por favor, selecciona una opción", 
                    four: "Por favor, selecciona una opción", 
                    five: "Por favor, selecciona una opción", 
                    six: "Por favor, selecciona una opción", 
                    seven: "Por favor, selecciona una opción", 
                    eight: "Por favor, selecciona una opción", 
                    nine: "Por favor, selecciona una opción", 
                    ten: "Por favor, selecciona una opción", 
                    twelve: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }, 
                ignore: 'textarea', 
                highlight: function( element, errorClass, validClass ) {
                    $( element ).parent().addClass( 'error_wrapper' );
                },
                unhighlight: function( element, errorClass ) {
                    $( element ).parent().removeClass( 'error_wrapper' );
                }, 
                submitHandler: function( form ) {
                    // Form submit
                    $( form ).ajaxSubmit( {
                        //    Before submitting the form
                        beforeSubmit: function showRequestLogin( arr, form, options ) {
                            
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                                
                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        //  !Function for handle data from server
                        success: function showResponseLogin( responseText, statusText, xhr, form ) {
                            
                            //console.log(responseText.success);
                            responseText    = $.parseJSON( responseText );
                            
                            if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                                
                                $( '.alert_box' ).addClass( 'thank_you_message' );
                                var _title      = 'Gracias';
                                var _markup     = '<p>Muchas gracias por haber contestado esta encuesta.</p>';
                                AxaS.openAlert( _title, _markup );
                                $( 'input[type="radio"]' ).removeAttr( 'checked');
                                $( 'textarea' ).val( "" );
                                $( form ).fadeOut( 300 );
                            } else {
                                
                                $( '.alert_box' ).addClass( 'error_message' );
                                var _title  = 'Error';
                                var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>';
                                AxaS.openAlert( _title, _markup );
                            }
                            AxaS.smoothScroll( 'body' );
                        }, 
                        resetForm: false, 
                        clearForm: false, 
                        //   If something is wrong
                        error: function( jqXHR, textStatus, errorThrown ) {
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>';
                            AxaS.openAlert( _title, _markup );
                        }, 
                        cache: false
                    } );
                }, 
                /*invalidHandler: function(form, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                        $("div#summary").html(message);
                        $("div#summary").show();
                    } else {
                        $("div#summary").hide();
                    }
                }*/
            } ); 
        }, 
        /**
         *
         *  @function:  doOverlay
         *  @description:  Make and overlay effect
         *  @params jQuery selector.- A jQuery Selector 
         *  @params Object options.- A JSON object with the options to make a 
         *                           target element a jqdock Element
         *  @author: @_Chucho_
         *  @see:   http://jquerytools.org
         *
         */
        //  !Hace un efecto de overlay sobre un elemento determinado
        doOverlay:  function ( selector, options ) {
            
            selector.overlay( options );
        }, 
        //  !Abre un cuadro de diálogo con un mensaje
        openAlert:  function ( title, markupMessage ) {
            
            var _title      = ( title == "" || title == undefined ) ? "Error" : title;
            var _message    = ( markupMessage == "" || markupMessage == undefined ) ? "<p>Hubo un error inesperado.</p>" : markupMessage;
            
            $( '.alert_box h2' ).text( _title );
            $( '.alert_box' ).append( _message );
            //planPiso.overlay.load();
            $( '.alert_trigger' ).click( );
            $( '.alert_box' ).centerHeight( );
            $( '.alert_box' ).centerWidth( );
            $( '.alert_background' ).fadeIn( 50, function (  ) {
                
                $( '.alert_box' ).fadeIn( 100 );
            } );
        }, 
        /**
         *
         *  @function:  !closeAlert
         *  @description:   Close an alert box with a message
         *  @see:   http://bassistance.de/jquery-plugins/jquery-plugin-validation/ || 
         *          http://docs.jquery.com/Plugins/Validation
         *  @author: @_Chucho_
         *
         */
        //  !Cierra un cuadro de diálogo con un mensaje
        closeAlert:  function ( ) {
            
            planPiso.overlay.close();
            /*$( '.alert_box' ).fadeOut( 'fast' );
            $( '.alert_background' ).fadeOut( 'fast' );
            $( '.alert_box h4' ).text( '' );
            $( '.alert_box p' ).remove( );
            $( '.alert_box form' ).remove( );
            $( '.alert_box table' ).remove( );
            $( '.alert_box div' ).remove( );
            $( '.alert_box button' ).remove( );*/
        }, 
        /**
         *
         *  @function:  !smoothScroll
         *  @description:   Do smooth scroll for the anchors in menu
         *  @params jQuery selector.- A jQuery Selector 
         *  @params Number durationInSec.- A number to indicate the duration of 
         *                                 the animation
         *  @see:   http://flesler.blogspot.com/2007/10/jqueryscrollto.html
         *  @author: @_Chucho_
         *
         */
        //  !Realiza el efecto para dar la impresión de scroll "suavizado"
        smoothScroll:   function ( selector, durationInSec ) {
            
            _selector       = ( typeof( selector ) == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" ) ? _selector : $( _selector );
            
            _durationInSec  = ( durationInSec == "" ) ? 1000 : durationInSec;
            _durationInSec  = ( typeof( _durationInSec ) == "string" ) ? parseInt( _durationInSec ) : _durationInSec;
            _durationInSec  = ( typeof( _durationInSec ) != "number" ) ? parseInt( _durationInSec ) : _durationInSec;
            
            _scrollYOffset  = _selector.offset().top;
            _scrollYOffset  = Math.ceil ( Number( _scrollYOffset ) );
            
            $.scrollTo( _scrollYOffset, {
                duration: _durationInSec, 
                axis: 'y'
            } );
        }, 
        /**
         *
         *  @function:  !toggleValue
         *  @description:   Does toggle if the input have a value or if doesn't
         *  @params jQuery selector.- A jQuery Selector 
         *  @params String valueChange.- A String with the value to change or preserve
         *  @author: @_Chucho_
         *
         */
        //  !Revisa si el valor de un input es el original o no y lo preserva o 
        //  respeta el nuevo valor.
        toggleValue:    function ( selector, valueChange ) {
            
            _selector       = ( typeof( selector ) == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" ) ? _selector : $( _selector );
            
            _valueChange  = ( valueChange == "" ) ? 400 : valueChange;
            _valueChange  = ( typeof( _valueChange ) == "string" ) ? parseInt( _valueChange ) : _valueChange;
            _valueChange  = ( typeof( _valueChange ) != "number" ) ? parseInt( _valueChange ) : _valueChange;
            
            var _placeholder;
            
            if ( _selector.attr( 'placeholder' ) != undefined ) {
                
                _placeholder = String ( _selector.attr( 'placeholder' ) ).toLowerCase();
            } else {
                
                _placeholder = String ( _selector.val( ) ).toLowerCase();
            }
            
            if ( ( _placeholder == "" ) || ( _placeholder == _valueChange ) ) {
                
                _selector.css( { 
                    color: '#aaa'
                } );
            }
            
            _selector.on( {
                blur: function ( e ) {
                    
                    _comment = String( $( e.currentTarget ).val() ).toLowerCase();
                    if ( ( _comment == _placeholder ) || ( _comment == "" ) ) {
                        
                        $( e.currentTarget ).val( "Ninguno" ).css( {
                            color: '#aaa'
                        } );
                        return false;
                    }
                },
                focus: function ( e ) {
                    
                    _comment = String( $( e.currentTarget ).val() ).toLowerCase();
                    if ( _comment == _placeholder ) {
                        
                        $( e.currentTarget ).val( '' ).css( { color: '#666' } );
                        return false;
                    }
                }
            } );
        }, 
        /**
         *
         *  @function:  !managerTimelineFill
         *  @description:   Carrousel inicializer
         *  @params jQuery slider.- A jQuery Selector 
         *  @params String progressBar.- A class to add to target
         *  @params Object ui.- An object with css properties to apply to the jQuery selector
         *  @params Number leftOffset.- A number to indicate the duration of the animation
         *  @params Number rightOffset.- A number to indicate the duration of the animation
         *  @see:   http://jquerytools.org
         *  @author: @_Chucho_
         *
         */
        //  !Inicializador de un carrusel jQuery Tools
        inicializeCarrousel:    function ( selector, optionsScrollable, optionsNavigator, optionsAutoscroll ) {
        
            if( !optionsScrollable || optionsScrollable == {} ) {
                optionsScrollable = {};
            }
            if( !optionsNavigator || optionsNavigator == {} ) {
                optionsNavigator = {};
            }
            if( !optionsAutoscroll || optionsAutoscroll == {} ) {
                optionsAutoscroll = {};
            }
            $( selector ).scrollable( optionsScrollable ).navigator( optionsNavigator ).autoscroll( optionsAutoscroll );
        }, 
    };
    
    // Give the init function the AxaS prototype for later instantiation
    AxaS.fn.init.prototype = AxaS.fn;
    
    AxaS = AxaS.fn;
    
    // Expose planPiso to the global object
    
    window.AxaS  = AxaS;
    
    $( document ).on( 'ready', function ( e ) {
        
        //  !Crea una instancia de jQuery Overlay
        if ( $( '.alert_box' ).exists() ) {
            
            AxaS.doOverlay( $( 'a.alert_trigger' ), {
                effect: 'apple',
                close: $( '.alert_box a.close' ),
                closeOnClick: true,
                closeOnEsc: true, 
                speed: 'normal',
                fixed: false,
                onBeforeLoad: function ( e ) {
                    
                    $( '.alert_box' ).centerWidth();
                    $( '.alert_box' ).centerHeight();
                },
                onLoad: function() {
                    $( '.alert_background' ).fadeIn( 100 );
                },
                onBeforeClose:  function ( ){
                    
                    $( '.alert_box' ).fadeOut( 10, function ( ) {
                        
                        $( '.alert_background' ).fadeOut( 10 );
                        $( '.alert_box h4' ).text( '' );
                        $( '.alert_box p' ).remove( );
                        $( '.alert_box form' ).remove( );
                        $( '.alert_box table' ).remove( );
                        $( '.alert_box div' ).remove( );
                        $( '.alert_box button' ).remove( );
                        $( '.alert_box div.confirm' ).remove( );
                    } );
                },
                onClose: function ( e ) {
                    
                }
            } );
            
            AxaS.overlay    = $( '.alert_trigger' ).data( 'overlay' );
            
            $( '.alert_background' ).height( $( 'body' ).height() );
        }
        
        // Validación de los formularios
        if ( $( 'form' ).exists() ) {
            
            if ( $( '#first_review' ).exists() || $( '#second_review' ).exists() ) {
                
                AxaS.validateFormOne();
            }
            if ( $( '#third_review' ).exists() || $( '#fourth_review' ).exists() ) {
                
                AxaS.validateFormThird();
            }
            if ( $( '#first_review_ambassador' ).exists() || $( '#first_review_manager_network' ).exists() ) {
                
                AxaS.validateFormDoublesOne();
            }
            if ( $( '#second_review_ambassador' ).exists() || $( '#second_review_manager_network' ).exists() ) {
                
                AxaS.validateFormDoublesTwo();
            }
            if ( $( '#third_review_ambassador' ).exists() || $( '#third_review_manager_network' ).exists() ) {
                
                AxaS.validateFormDoublesOne();
            }
            if ( $( '#fourth_review_ambassador' ).exists() || $( '#fourth_review_manager_network' ).exists() ) {
                
                AxaS.validateFormDoublesThree();
            }
        }
        
        //  Handler de contenido de textarea
        if ( $( 'textarea' ).exists() ) {
            
            $( 'textarea' ).val( 'Ninguno' );
            AxaS.toggleValue( 'textarea', "Ninguno" );
        }
        
        //  Carruseles y efectos del Home
        if ( $( '#wrapper_one' ).exists() ) {
            
            AxaS.inicializeCarrousel( $( '#header_scrollable' ), {
                speed: 1000, 
                circular: true, 
                keyboard: false, 
                next: '', 
                prev: ''
            }, {
                steps: 1, 
                interval: 5000, 
                autoplay: true, 
                autopause: true
            }, {
                navi: ".navi"
            } );
            AxaS.inicializeCarrousel( $( '#tips_scrollable' ), {
                speed: 1000, 
                circular: true, 
                keyboard: false, 
                next: ".next", 
                prev: ".prev"
            }, {
                steps: 1, 
                interval: 1000, 
                autoplay: true, 
                autopause: true
            }, {} );
            
            
        }
    } );
    
} )( jQuery, window );