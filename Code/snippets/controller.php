<?php
/*
session_start();
session_name('axa_session');
*/

/*error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 1);*/


!defined( 'BASE_PATH' ) ? define(  'BASE_PATH' , __DIR__.DIRECTORY_SEPARATOR ) : '' ;
!defined( 'LIBS_PATH' ) ? define(  'LIBS_PATH' , BASE_PATH.DIRECTORY_SEPARATOR.'libs'.DIRECTORY_SEPARATOR ) : '';
!defined( 'BASE_URL') ? define( 'BASE_URL' , "http://www.descubreone.mx/encuesta/") : '';
!defined( 'MODX_CORE_PATH' ) ? define(  'MODX_CORE_PATH' , BASE_PATH.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'core'.DIRECTORY_SEPARATOR ) : '';
!defined( 'MODX_CONFIG' )  ? define(  'MODX_CONFIG' , MODX_CORE_PATH.'config'.DIRECTORY_SEPARATOR)  :  '';

//require_once LIBS_PATH . 'DBQueries.php';
//require_once BASE_PATH . 'Administracion.php';
require_once LIBS_PATH . 'Common.php';

class Controller {

    private static function setArguments( $arguments ) {
        
        if ( ! empty( $arguments ) ) {
            
            $_REQUEST = $arguments;
        }
    }
    
    public static function request( $option , $json = true ,$arguments = array() ) {
        $data = array();
        self::setArguments( $arguments );
        
        try {
            switch ( $option ) {
                case 'agentFormSubmit':
                    
                    $data = json_encode ( Common::sendMailFromAgent( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                    break;
                case 'agentFormSubmitTwo': 
                    
                    $data = json_encode ( Common::sendMailFromAgentSecond( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                    break;
                case 'agentFormSubmitThree': 
                    
                    $data = json_encode ( Common::sendMailFromAgentThird( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                    break;
            }
            return $data;
            
        } catch ( Exception $e ){
            switch ( $e->getCode() ) {
                
                case 5910 :
                    echo 'DATA BASE ERROR: '.$e->getMessage();
                    $message = 'Lo sentimos, ocurrió un error inesperado al tratar de guardar los datos.';
                    break;
                    
                case 5810 :
                    echo 'MAILER ERROR: '.$e->getMessage();
                    $message = 'Lo sentimos, ocurrió un error inesperado al tratar de enviar el correo.';
                    break;
                default : $message = $e->getMessage();
            }
            $data = array ('success' => false , 'message' => $message ) ;
            return $json ? json_encode( $data ) : $data ;
        }
    }
}

if ( ! empty( $_GET['action'] ) ) {
    echo Controller::request( FilterInput::FilterValue( $_GET['action'] , 'string' ) );
}