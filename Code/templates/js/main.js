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
    AxaS.gender;
    AxaS.skin;
    AxaS.hair;
    AxaS.clothes;
    
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
        validateGoLiveAmbassadorOne:    function ( ) {
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
                        maxlength: 255
                    }, 
                    eleven: {
                        required: true
                    }, 
                    twelve: {
                        required: true
                    }, 
                    thirteen: {
                        required:true
                    }, 
                    fourteen: {
                        required: false,
                        maxlength: 255
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
                    eleven: "Por favor, selecciona una opción", 
                    twelve: "Por favor, selecciona una opción", 
                    thirteen: "Por favor, selecciona una opción", 
                    fourteen: "Por favor, selecciona una opción", 
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
        validateGoLiveForms:    function ( rule, messages ) {
            
            var _rule       = ( typeof( rule ) == 'object' ) ? rule : {};
            var _message    = ( typeof( messages ) == 'object' ) ? messages : {};
            
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
                rules: _rule,
                messages: _message, 
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
            var _selector   = ( typeof( selector ) == "string" )? $( selector ) : ( ( typeof( selector ) == "object" )? selector : $( '*' ) );
            var _options    = ( typeof( options )   == "object" )? options : {};
            
            _selector.overlay( _options );
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
            
            _selector       = ( typeof( selector )  == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" )    ? _selector : $( _selector );
            
            if( !optionsScrollable || optionsScrollable == {} ) {
                optionsScrollable = {};
            }
            if( !optionsNavigator || optionsNavigator == {} ) {
                optionsNavigator = {};
            }
            if( !optionsAutoscroll || optionsAutoscroll == {} ) {
                optionsAutoscroll = {};
            }
            
            _selector.scrollable( optionsScrollable ).navigator( optionsNavigator ).autoscroll( optionsAutoscroll );
        }, 
        /**
         *
         *  @function:  !toggleClass
         *  @description:   Toggle an HTML class
         *  @params jQuery selector.- A jQuery Selector 
         *  @params String className.- A class to toggle to the target
         *  @author: @_Chucho_
         *
         */
        //  !Hace toggle de una clase a un selector específico
        toggleClass: function ( selector, className ) {
            
            _selector       = ( typeof( selector )  == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" )    ? _selector : $( _selector );
            _class          = ( typeof( className ) == "undefined" ) ? ".active" : className;
            _class          = ( typeof( _class )    == "string" )    ? _class : String( _class );
            
            if ( selector.exists() ) {
                
                _selector.toggleClass( _class );
            }
        }, 
        /**
         *
         *  @function:  !createAvatarPreview
         *  @description:   Creates a visualization of the avatar image to download
         *  @params String gender.- A string with the gender choosed
         *  @params String skin.- A string with the filename of the skin choosed
         *  @params String hair.- A string with the filename of the hair choosed
         *  @params String clothes.- A string the filename of the clothes choosed
         *  @author: @_Chucho_
         *
         */
        //  !Crea una previsualización de la imágen de avatar que se va a descargar
        createAvatarPreview:    function ( gender, skin, hair, clothes ) {
            
            _gender     = ( typeof( gender ) != "undefined" )? gender : "";
            _skin       = ( typeof( skin ) != "undefined" )? skin : "";
            _hair       = ( typeof( hair ) != "undefined" )? hair : "";
            _clothes    = ( typeof( clothes ) != "undefined" )? clothes : "";
            
            var _path   = ( _gender == "male" )? "img/imagenes_avatar/man/" : "img/imagenes_avatar/woman/";
            
            if ( _skin != "" ) {
                
                $( '#image_preview .skin' ).attr( 'src', _path + 'skin/' + _skin ).addClass( 'active' ).fadeIn( 300 );
                AxaS.skin    = _path + 'skin/' + _skin;
            }
            if ( _hair != "" ) {
                
                $( '#image_preview .hair' ).attr( 'src', _path + 'hair/' + _hair ).addClass( 'active' ).fadeIn( 300 );
                AxaS.hair    = _path + 'hair/' + _hair;
            }
            if ( _clothes != "" ) {
                
                $( '#image_preview .clothes' ).attr( 'src', _path + 'clothes/' + _clothes ).addClass( 'active' ).fadeIn( 300 );
                AxaS.clothes = _path + 'clothes/' + _clothes;
            }
            
            AxaS.gender = _gender;
        }
    };
    
    // Give the init function the AxaS prototype for later instantiation
    AxaS.fn.init.prototype = AxaS.fn;
    
    AxaS = AxaS.fn;
    
    // Expose planPiso to the global object
    
    window.AxaS  = AxaS;
    
    $( document ).on( 'ready', function ( e ) {
        
        if ( $( ".loader" ).exists() ) {
            
            $( '.alert_background' ).fadeOut( 300 );
            $( ".loader" ).fadeOut( 300 );
        }
        
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
                    
                    $( '.alert_background' ).height( '100%' );
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
        
        //  Crea una instancia de jQuery Overlay para el home de descubreone.mx
        //  Calcula la distancia entre el margen izquierdo para posicionar
        //  la capa del video. Si en menor de 0 (ocurre en iPhone) utiliza 
        //  el ancho del body en vez del ancho de la ventana para hacer 
        //  el cálculo
        if ( $( '.overlay.black' ).exists() ) {
            
            $( '.overlay.black' ).centerWidth();
            
            if ( $( '.video' ).exists() ) {
                
                var myVideo = document.getElementsByTagName( 'video' )[ 0 ];
            }
            AxaS.doOverlay( 'img[rel]', {
                effect: 'apple', 
                // custom top position
                //top: 260,
                // some mask tweaks suitable for facebox-looking dialogs
                mask: {
                    // you might also consider a "transparent" color for the mask
                    color: '#FFF',
                    // load mask a little faster
                    loadSpeed: 200,
                    // very transparent
                    opacity: 0.5
                },
                // disable this for modal dialog-type of overlays
                closeOnClick: true,
                closeOnEsc: true, 
                // load it immediately after the construction
                load: true, 
                onBeforeLoad: function ( e ) {
                    
                }, 
                onLoad: function ( e ) {
                   
                    if ( myVideo && myVideo.paused ) {
                        
                        myVideo.play();
                    }
                }, 
                onBeforeClose: function ( e ) {
                    
                    var player;
                    function onYouTubeIframeAPIReady() {
                        
                        player  = new window.YT.Player( 'ytplayer', {
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    }
                    
                    function onPlayerReady( event ) {
                        
                        event.target.playVideo();
                    }
                    
                    var done = false;
                    function onPlayerStateChange( event ) {
                        
                        if ( event.data == YT.PlayerState.PLAYING ) {
                            
                            stopVideo();
                        }
                    }
                    function stopVideo() {
                        
                        player.stopVideo();
                    }
                }, 
                onClose: function ( e ) {
                    
                    if ( myVideo ) {
                        
                        myVideo.pause();
                    }
                    /*if ( $( '#exposeMask:visible' ).is( ':visible' ) && $( 'object,embed' ).exists() ) {
                        
                        $( 'object,embed' ).css( {
                            display: "none", 
                            opacity: "0", 
                            filter: "alpha(opacity=0)", 
                            visibility: "none"
                        } );
                    }*/
                }
            } );
            
            $( window ).on( {
                resize: function ( e ) {
                    
                    $( '.overlay.black' ).centerWidth();
                },
                touchstart: function ( e ) {
                    
                    $( '.overlay.black' ).centerWidth();
                }, 
                touchend: function ( e ) {
                    
                    $( '.overlay.black' ).centerWidth();
                }
            } );
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
            if ( $( '#first_review_golive_ambassador' ).exists() || $( '#first_review_golive_manager_network' ).exists() || $( '#first_review_golive_colaboradores' ).exists() ) {
                
                AxaS.validateGoLiveAmbassadorOne();
            }
            if ( $( '#second_review_golive_ambassador' ).exists() || $( '#second_review_golive_manager_network' ).exists() || $( '#second_review_golive_colaboradores' ).exists() ) {
                
                var rules   = { 
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
                        maxlength: 255
                    }, 
                    ten: {
                        required: true
                    }, 
                    eleven: {
                        required: true
                    }, 
                    twelve: {
                        required: true
                    }, 
                    thirteen: {
                        required: false,
                        maxlength: 255
                    }
                };
                var messages    = {
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
                    eleven: "Por favor, selecciona una opción", 
                    twelve: "Por favor, selecciona una opción", 
                    thirteen: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }
                
                AxaS.validateGoLiveForms( rules, messages );
            }
            if ( 
                    $( '#third_review_golive_ambassador' ).exists() ||
                    $( '#third_review_golive_manager_network' ).exists() || 
                    $( '#third_review_golive_colaboradores' ).exists() || 
                    $( '#fourth_review_golive_ambassador' ).exists() || 
                    $( '#fourth_review_golive_manager_network' ).exists() || 
                    $( '#fourth_review_golive_colaboradores' ).exists() 
                ) {
                
                var rules   = { 
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
                        maxlength: 255
                    }, 
                    eleven: {
                        required: true
                    }, 
                    twelve: {
                        required: true
                    }, 
                    thirteen: {
                        required: true
                    }, 
                    fourteen: {
                        required: false,
                        maxlength: 255
                    }
                };
                var messages    = {
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
                    eleven: "Por favor, selecciona una opción", 
                    twelve: "Por favor, selecciona una opción", 
                    thirteen: "Por favor, selecciona una opción", 
                    fourteen: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }
                
                AxaS.validateGoLiveForms( rules, messages );
            }
        }
        
        //  Handler de contenido de textarea
        if ( $( 'textarea' ).exists() ) {
            
            $( 'textarea' ).val( 'Ninguno' );
            AxaS.toggleValue( 'textarea', "Ninguno" );
        }
        
        //  Carruseles y efectos del Home
        if ( $( '#one' ).exists() ) {
            
            AxaS.inicializeCarrousel( '#header_scrollable', {
                speed: 1000, 
                circular: true, 
                keyboard: false, 
                next: null, 
                prev: null
            }, {
                activeClass: "active", 
                navi: ".navi", 
                naviItem: "a", 
                indexed: false
            }, {
                steps: 1, 
                interval: 10000, 
                autoplay: true, 
                autopause: true
            } );
            AxaS.inicializeCarrousel( '#tips_scrollable', {
                speed: 1000, 
                circular: true, 
                keyboard: false, 
                next: ".next", 
                prev: ".prev"
            }, {
                activeClass: "active", 
                navi: ".naviTabs", 
                naviItem: "a", 
                indexed: true
            }, {
                steps: 1, 
                interval: 15000, 
                autoplay: true, 
                autopause: true
            } );
            
        }
        
        if ( $( "#avatar" ).exists() ) {
            
            //  Declaración de variables para obtención de las imágenes
            var gender, skin, hair, clothes, glasses, avatar;
            
            //  Crea la funcionalidad de tabs para cada tipo de categoría para el avatar
            $( 'ul.tabs' ).tabs("div.panes > div");
            
            //  Event handler para seleccionar el género para el avatar y mostrar
            //  los tipos de ropa, piel y cabello de acuerdo al género escogido
            $( '.gender ul li' ).on( 'click', function ( e ) {
                
                //  Revisa si hay algún género seleccionado y lo deselecciona
                if ( $( '.gender ul li.active' ).exists() ) {
                    
                    AxaS.toggleClass( $( '.gender ul li.active' ), "active" );
                    $( '.panes div' ).not( '.panes div.gender' ).children( ).hide( 300 );
                    gender  = "";
                    skin    = "";
                    hair    = "";
                    clothes = "";
                    glasses = "";
                    avatar  = "";
                    
                    $( '#image_preview img' ).fadeOut( 300, function ( ) {
                        
                        $( '#image_preview img' ).removeClass( 'active' );
                    } );
                }
                
                //  Selecciona el género escogido por el usuario y muestra los elementos
                //  correspondientes al género
                AxaS.toggleClass( $( e.currentTarget ), "active" );
                
                if ( $( '.panes .gender ul li.men' ).hasClass( 'active' ) ) {
                    
                    $( '.panes div' ).not( '.panes div.gender' ).children( '.male' ).show( 300 );
                    gender  = "male";
                } else if ( $( '.panes .gender ul li.women' ).hasClass( 'active' ) ) {
                    
                    $( '.panes div' ).not( '.panes div.gender' ).children( '.female' ).show( 300 );
                    gender  = "female";
                }
            } );
            
            //  Event handler para obtener la ruta de las imágenes de cada thumbnail
            //  y formar la previsualización
            $( '.panes div ul li' ).on( 'click', function ( e ) {
                
                e.preventDefault();
                e.stopPropagation();
                
                $( e.currentTarget ).siblings( 'li' ).removeClass( 'active' );
                $( e.currentTarget ).addClass( 'active' );
                
                var _typeOfCategorie    = $( e.currentTarget ).parent( 'ul' ).parent( 'div' ).attr( "class" );
                var _temporalValue      = $( e.currentTarget ).children( 'img' ).attr( 'rel' );
                
                switch ( _typeOfCategorie ) {
                    case "skin":
                        skin    = _temporalValue;
                        break;
                    case "hair":
                        hair    = _temporalValue;
                        break;
                    case "clothes":
                        clothes = _temporalValue;
                        break;
                    case "glasses":
                        glasses = _temporalValue;
                        break;
                    default:
                        break;
                }
                
                if ( $( e.currentTarget ).parent( 'ul' ).parent( 'div' ).hasClass( 'gender' ) ) {
                    
                    return false;
                } else {
                    
                    AxaS.createAvatarPreview( gender, skin, hair, clothes, glasses );
                }
            } );
            
            
            $( '#image_preview a' ).on( 'click', function ( e ) { 
                
                e.preventDefault();
                e.stopPropagation();
                
                var avatarData  = {};
                
                if ( gender != "" && gender != undefined ) {
                    
                    avatarData.gender   = AxaS.gender;
                } else {
                    
                    alert( "Debe seleccionar un género" );
                    return false;
                }
                if ( skin != "" && skin != undefined ) {
                    
                    avatarData.skin     = AxaS.skin;
                } else {
                    
                    alert( "Debe seleccionar un tipo de piel" );
                    return false;
                }
                if ( hair != "" && hair != undefined )
                    avatarData.hair     = AxaS.hair; 
                if ( clothes != "" && clothes != undefined ) {
                    
                    avatarData.clothes  = AxaS.clothes;
                } else {
                    
                    alert( "Debe seleccionar un tipo de ropa" );
                    return false;
                }
                if ( glasses != "" && glasses != undefined )
                    avatarData.glasses     = AxaS.glasses; 
                
                $.ajax ( '../snippets/controller.php?action=obtainAvatar', { 
                    beforeSend: function ( jqXHR, settings ) {}, 
                    cache: false, 
                    complete: function ( jqXHR, textStatus ) {}, 
                    contentType: "application/x-www-form-urlencoded", 
                    converters: { 
                        "* text":       window.String, 
                        "text html":    true, 
                        "text json":    $.parseJSON, 
                        "text xml":     $.parseXML
                    }, 
                    data: avatarData, 
                    error:  function ( jqXHR, textStatus, errorThrown ) {}, 
                    success: function ( data, textStatus, jqXHR ) {
                        
                        data    = $.parseJSON( data );
                        if ( data.success ) {
                            
                            $( "#secretIFrame" ).attr( "src", '../snippets/controller.php?action=callImage&file=' + data.file );
                        }
                    }, 
                    type: "POST"
                } );
                
            } );
        }
        
    } );
    
} )( jQuery, window );