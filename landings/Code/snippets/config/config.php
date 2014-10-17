<?php
//error_reporting(E_ERROR);
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 1);
date_default_timezone_set('America/Mexico_City');

define( 'BASE_PATH', dirname(dirname(dirname((dirname(__FILE__))))) . DIRECTORY_SEPARATOR );
define( 'SITE_URL', 'http://www.descubreone.mx/landings/' );
define( 'BASE_URL', 'http://www.descubreone.mx/landings/' );
define( 'LOCAL_URL', 'http://localhost/Axa_Seguros/landings/' );
define( 'CODE_PATH', BASE_PATH . 'Code' . DIRECTORY_SEPARATOR );
define( 'SNIPPETS_PATH', CODE_PATH . 'snippets' . DIRECTORY_SEPARATOR );
define( 'CLASSES_PATH', SNIPPETS_PATH . 'classes'. DIRECTORY_SEPARATOR );
define( 'LIBS_PATH', SNIPPETS_PATH . 'libs' . DIRECTORY_SEPARATOR );
define( 'TEMPLATES_PATH', LIBS_PATH . 'templates' . DIRECTORY_SEPARATOR );
if ( !defined( "IMAGE_PATH" ) ) 
    define( "IMAGE_PATH", CODE_PATH . 'templates' . DIRECTORY_SEPARATOR ) ;

//require_once LIBS_PATH . 'Common.php';

function _convertUTF8 ( &$item , $keys ){
    $item = utf8_encode($item);
}
?>
