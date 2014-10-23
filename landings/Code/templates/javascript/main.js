//  @codekit-prepend "plugins.js";
/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
( function ( $, window, document, undefined ) {
    //  Revisa la disponibilidad de localStorage
    var storage, deviceWidth, isPortable, typeOfDevice, minDeviceWidth  = 320, maxDeviceWidth = 568, timeLapseOfCarrousel    = 6000;
    if( 'localStorage' in window && window.localStorage !== null ) {
        storage = localStorage;
    } else {
        try {
            if ( localStorage.getItem ) {
                storage = localStorage;
            }
        } catch( e ) {
            storage = {};
        }
    }

    //  When DOM is loaded
    $( function ( ) {

        window.navigator.userAgent = userAgent    = ( window.navigator.userAgent );
        //( deviceWidth >= minDeviceWidth && deviceWidth <= maxDeviceWidth ) ? isPortable  = true : isPortable  = false;
        ( userAgent.indexOf( 'iPhone ' ) || userAgent.indexOf( 'Android' ) ) ? isPortable  = true : isPortable  = false;

        window.typeOfDevice = typeOfDevice  = ( isPortable ) ? "mobile" : "desktop";

        window.isPortable   = isPortable;

        if ( isPortable ) { //  Si es un móvil...


        } //  Si es un móvil...
    } );

    //  When page is finished loaded
    $( 'document' ).ready( function ( e ) {

        //  Añade div's para maquetar los radio buttons
        if ( $( '.input input[type="radio"]' ).exists() ) {
            $( '.input input[type="radio"]' ).uniform();
        }

        //  Cuando se hace click en el radio, añade la clase checked al contenedor
        //  para darle un background gris
        if ( $( '.radio span').exists() ) {

            $( '.radio span').on( 'click', function ( e ) {
                var radio  = $( e.currentTarget );

                $( '.input.checked' ).removeClass( 'checked' );
                radio.parents( '.input' ).addClass( 'checked' );
            } );
        }

        //  Validación del formulario de primera encuesta
        if ( $( '.first-poll form' ).exists() ) {

           var rules, messages, submitFunction, invalidFunction;
            rules       = {
                crear_perfil: {
                    required: true
                },
                consideras_tu_red:  {
                    required: true
                },
                actualizas_tu_estatus:  {
                    required: true
                },
                capacidad_para_archivos:  {
                    required: true
                },
                utilidad_de_one:  {
                    required: true
                }
            };
            messages    = {
                crear_perfil: "Selecciona una opción.",
                consideras_tu_red: "Selecciona una opción.",
                actualizas_tu_estatus: "Selecciona una opción.",
                capacidad_para_archivos: "Selecciona una opción.",
                utilidad_de_one: "Selecciona una opción.",
                required: "This file is required", 
                minlength: "Por favor, haga su respuesta más amplia.", 
                maxlength: "Por favor, acorte su respuesta", 
                email: "Write a valid email",
                number: "Escriba solo números", 
                digits: "Escriba solo números", 
            };
            submitFunction = function( form ){
                // Form submit
                $( form ).ajaxSubmit ( {
                    //    Before submitting the form
                    beforeSubmit: function showRequestLogin( arr, form, options ) {
                        if ( $( '.error' ).exists() ) {
                            $('.error').remove();
                        }
                    },
                    //  !Function for handle data from server
                    success: function showResponseLogin( responseText, statusText, xhr, form ) {
                        
                        //console.log(responseText.success);
                        responseText    = $.parseJSON( responseText );
                        
                        if( responseText && ( responseText.success === 'true' || responseText.success === true ) ) {
                            
                            $( 'form' ).fadeOut( 300, function () {
                                
                                var _finished   = '<p class="thanks">Gracias por ayudarnos a seguir mejorando.</p>';
                                
                                $( 'form' ).first()
                                           .empty()
                                           .append( _finished );
                                $( 'form' ).fadeIn( 150 );
                            } )
                        }
                    }, 
                    resetForm: false, 
                    clearForm: false, 
                    //   If something is wrong
                    error: function( jqXHR, textStatus, errorThrown ) {
                        //console.log(textStatus);
                        //console.log(errorThrown);
                        if ( $( '.alert_box' ).exists() ) {
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p></p>';
                            AxaS.openAlert( _title, _markup );
                        } else {
                            alert( 'Hubo un error enviando la informacion. ¿Puedes enviarla nuevamente?' );
                        }
                    }, 
                    cache: false
                });
            };
            invalidFunction    = function( form, validator ) {
                var errors = validator.numberOfInvalids();
                if ( errors ) {
                    var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                    //message.appendTo( .parents( '.question_wrapper' )
                    //.find( 'p' ) );
                }
            };

            AXAEncuestas.validateContactForm ( rules, messages, submitFunction, invalidFunction );
        }
    } );
} ) ( jQuery, window, document );