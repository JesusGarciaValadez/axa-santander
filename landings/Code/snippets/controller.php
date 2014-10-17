                    <?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Date in the past

if ( file_exists( 'config/config.php' ) ) {
    
    define( 'CURRENT_PATH',dirname(__FILE__) );
    require_once 'config/config.php';
} else {
    
    exit('no fue posible localizar el archivo de configuración.');
}

function __autoload( $className ) {
    
    require_once LIBS_PATH . "{$className}.php";
}

require_once SNIPPETS_PATH . 'db/connection.php';

error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 1);

if ( ! empty( $_GET['action'] ) ) {
    
    $action = strip_tags( trim( $_GET[ 'action' ] ) );
    
    $data = array();
    
    try {
        
        switch ( $action ) {
            //  !Formulario Agentes 1
            case 'agentFormSubmit':
                
                $data = json_encode ( Common::sendMailFromAgent( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                break;
            //  !Formulario Agentes 4
            case 'agentFormSubmitFour': 
                
                /*$cc = array( 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );*/
                
                $doInsert   = new Review( $dbh, 'fourth_review' );
                $doInsert   = $doInsert->insertReview( $_POST, 'envio_inventario_fourth.html', 'Encuesta ONE / Cuarto Review', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'firstPoll': 
                
                $poll           = new Poll( $dbh, 'first_poll' );
                $data           = array(
                                        'crear_perfil'              => $_POST[ 'crear_perfil' ],
                                        'consideras_tu_red'         => $_POST[ 'consideras_tu_red' ],
                                        'actualizas_tu_estatus'     => $_POST[ 'actualizas_tu_estatus' ],
                                        'capacidad_para_archivos'   => $_POST[ 'capacidad_para_archivos' ],
                                        'utilidad_de_one'           => $_POST[ 'utilidad_de_one' ]
                                    );
                $validations    = array(
                    'crear_perfil' => array(
                        'requerido' => 1 ,'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La primera pregunta es obligatoria.' ) 
                    ),
                    'consideras_tu_red' => array(
                        'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La segunda pregunta es obligatoria.' ) 
                    ),
                    'actualizas_tu_estatus' => array(
                        'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La tercera pregunta es obligatoria.' ) 
                    ),
                    'capacidad_para_archivos' => array(
                        'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La cuarta pregunta es obligatoria.' ) 
                    ),
                    'utilidad_de_one' => array(
                        'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La quinta pregunta es obligatoria.' ) 
                    )
                                    );
                $template       = 'first-poll.html';
                $placeholders   = array(
                    'crear_perfil'              => $data[ 'crear_perfil' ],
                    'consideras_tu_red'         => $data[ 'consideras_tu_red' ],
                    'actualizas_tu_estatus'     => $data[ 'actualizas_tu_estatus' ],
                    'capacidad_para_archivos'   => $data[ 'capacidad_para_archivos' ],
                    'utilidad_de_one'           => $data[ 'utilidad_de_one' ]
                                    );
                $subject        = '¡Queremos conocer tu opinión! / ONE';
                $receiver       = 'jgarcia@cmvasfalto.com.mx';
                $cc             = array( 
                        array( 
                            'mail'  => 'jgarcia@cmvasfalto.com.mx',
                            'name'  => 'Jesús'
                            ),
                        array( 
                            'mail'  => 'mramirez@cmvasfalto.com.mx',
                            'name'  => 'Mariel'
                            ) 
                                    );
                mam
                $result         = $poll->insert( 
                                                $data,  // Información que se va a guardar
                                                $validations,   // Reglas de validación
                                                $template,      // Template html para el envio de correo
                                                $placeholders,  // Placeholders para el template
                                                $subject,  // Subject del correo
                                                $receiver,    //  Receptor(es) del correo
                                                $cc    // CC
                                            );
                $data           = json_encode ( $result );
                break;
        }
        echo $data;
        
    } catch ( Exception $e ) {
        //  !Cachar excepciones
        switch ( $e->getCode() ) {
            
            case 5910 :
                echo 'DATA BASE ERROR: '.$e->getMessage();
                $message = 'Lo sentimos, ocurrió un error inesperado al tratar de guardar los datos.';
                break;
                
            case 5810 :
                echo 'MAILER ERROR: '. $e->getMessage();
                $message = 'Lo sentimos, ocurrió un error inesperado al tratar de enviar el correo.';
                break;
            default : $message = $e->getMessage();
        }
        
        $data = array ('success' => false , 'message' => $message ) ;
        echo json_encode( $data );
    }
}