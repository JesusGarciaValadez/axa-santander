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
            case 'agentFormSubmit':
                
                $data = json_encode ( Common::sendMailFromAgent( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                break;
            case 'agentFormSubmitTwo': 
                
                $data = json_encode ( Common::sendMailFromAgentSecond( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                break;
            case 'agentFormSubmitThree': 
                
                $data = json_encode ( Common::sendMailFromAgentThird( 'AndreaValeria.Mendoza@axa.com.mx', $_POST ) );
                break;
            case 'agentFormSubmitFour': 
                
                $cc = array( 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'fourth_review' );
                $doInsert   = $doInsert->insertReview( $_POST, 'envio_inventario_fourth.html', 'Encuesta ONE / Cuarto Review', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'ambassadorFormSubmitOne': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'first_review_ambassador' );
                $doInsert   = $doInsert->insertReviewFirstDoubles( $_POST, 'envio_inventario_first_doubles.html', 'Encuesta ONE / Primer Review Ambassador', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'managerNetworkFormSubmitOne': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'first_review_manager_network' );
                $doInsert   = $doInsert->insertReviewFirstDoubles( $_POST, 'envio_inventario_first_doubles.html', 'Encuesta ONE / Primer Review Manager Network', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'ambassadorFormSubmitTwo': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'second_review_ambassador' );
                $doInsert   = $doInsert->insertReviewSecondDoubles( $_POST, 'envio_inventario_second_doubles.html', 'Encuesta ONE / Segundo Review Ambassador', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'managerNetworkFormSubmitTwo': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'second_review_manager_network' );
                $doInsert   = $doInsert->insertReviewSecondDoubles( $_POST, 'envio_inventario_second_doubles.html', 'Encuesta ONE / Segundo Review Manager Network', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'ambassadorFormSubmitThree': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'third_review_ambassador' );
                $doInsert   = $doInsert->insertReviewFirstDoubles( $_POST, 'envio_inventario_third_doubles.html', 'Encuesta ONE / Tercer Review Ambassador', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'managerNetworkFormSubmitThree': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico') );
                
                $doInsert   = new Review( $dbh, 'third_review_manager_network' );
                $doInsert   = $doInsert->insertReviewFirstDoubles( $_POST, 'envio_inventario_third_doubles.html', 'Encuesta ONE / Tercer Review Manager Network', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'ambassadorFormSubmitFourth': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico'), 
                    array(
                        'mail'  => 'mramirez@cmvasfalto.com.mx', 
                        'name'  => 'Mariel')
                    );
                
                $doInsert   = new Review( $dbh, 'fourth_review_ambassador' );
                $doInsert   = $doInsert->insertReviewThirdDoubles( $_POST, 'envio_inventario_fourth_ambassador.html', 'Encuesta ONE / Cuarto Review Ambassador', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'managerNetworkFormSubmitFourth': 
                
                $cc = array( 
                    array( 
                        'mail'  => 'jgarcia@cmvasfalto.com.mx', 
                        'name'  => 'Jesús'), 
                    array(
                        'mail'  => 'vdavila@cmv.com.mx', 
                        'name'  => 'Vico'), 
                    array(
                        'mail'  => 'mramirez@cmvasfalto.com.mx', 
                        'name'  => 'Mariel')
                    );
                
                $doInsert   = new Review( $dbh, 'fourth_review_manager_network' );
                
                $doInsert   = $doInsert->insertReviewThirdDoubles( $_POST, 'envio_inventario_fourth_manager_network.html', 'Encuesta ONE / Cuarto Review Manager Network', 'AndreaValeria.Mendoza@axa.com.mx', $cc );
                $data       = json_encode ( $doInsert );
                break;
            case 'obtainAvatar': 
                
                $skin       = ( isset( $_POST[ 'skin' ] ) && !empty( $_POST[ 'skin' ] ) ) ? ( string ) $_POST[ 'skin' ] : "avatar_cara.png";
                $hair       = ( isset( $_POST[ 'hair' ] ) && !empty( $_POST[ 'hair' ] ) ) ? ( string ) $_POST[ 'hair' ] : "avatar_playera.png";
                $clothes    = ( isset( $_POST[ 'clothes' ] ) && !empty( $_POST[ 'clothes' ] ) ) ? ( string ) $_POST[ 'clothes' ] : "avatar_pantalones.png";
                
                $avatar = new Avatar( $skin, $hair, $clothes );
                $result = $avatar->createAvatar();
                if ( file_exists( $result ) ) {
                    
                    $data   = json_encode( array(  
                        "success" => true, 
                        "message" => "Avatar enviado", 
                        "file" => "img/imagenes_avatar/mi_avatar.png" ) );
                } else {
                    
                    $data   = json_encode( array(  
                        "success" => false, 
                        "message" => "No se creó el avatar" ) );
                }
                
                break;
            case 'callImage':
                $file   = imagecreatefrompng( IMAGE_PATH . $_GET[ 'file' ] );
                header("Pragma: public");
                header("Expires: 0");
                header("Cache-Control: must-revalidate, post-check=0, pre-check=0"); 
                //header("Content-Type: application/force-download");
                //header("Content-Type: application/octet-stream");
                //header("Content-Type: application/download");
                header( "Content-Disposition: attachment;filename=mi_avatar.png" );
                header("Content-Transfer-Encoding: binary ");
                header( 'Content-Type: image/png' );
                imagepng( $file );
                break;
        }
        echo $data;
        
    } catch ( Exception $e ) {
        
        switch ( $e->getCode() ) {
            
            case 5910 :
                echo 'DATA BASE ERROR: '.$e->getMessage();
                $message = 'Lo sentimos, ocurrió un error inesperado al tratar de guardar los datos.';
                break;
                
            case 5810 :
                var_dump($e->getMessage());
                echo 'MAILER ERROR: '. $e->getMessage();
                $message = 'Lo sentimos, ocurrió un error inesperado al tratar de enviar el correo.';
                break;
            default : $message = $e->getMessage();
        }
        
        $data = array ('success' => false , 'message' => $message ) ;
        echo json_encode( $data );
    }
}