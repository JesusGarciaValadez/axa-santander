<?php

if ( !defined( "IMAGE_PATH" ) ) 
    define( "IMAGE_PATH", dirname(__FILE__) . DIRECTORY_SEPARATOR . 'avatar' . DIRECTORY_SEPARATOR ) ;

class Avatar {
    
    private $_head;
    private $_shirt;
    private $_pants;
    
    public function __construct ( $putHead, $putShirt, $putPants ) {
        
        $this->_head    = ( !empty( $putHead ) && is_string( $putHead ) ) ? IMAGE_PATH . $putHead : "avatar_cara.png";
        $this->_shirt   = ( !empty( $putShirt ) && is_string( $putShirt ) ) ? IMAGE_PATH . $putShirt : "avatar_playera.png";
        $this->_pants   = ( !empty( $putPants ) & is_string( $putPants ) ) ? IMAGE_PATH . $putPants : "avatar_pantalones.png";
    }
    
    /**
     *
     *  IMageCreateTrueColor( width, height )
     *  ImageColorAllocate( image, red, green, blue )
     *  ImageCreatreFromPng( filename )
     *  imagecopymerge ( resource $dst_im , resource $src_im , int $dst_x , int $dst_y , int $src_x , int $src_y , int $src_w , int $src_h , int $pct )
     *
     */
    
    public function createAvatar () {
        
        //Creamos la base de la imagen donde colocaremos luego las otras dos
        $baseimagen     = imagecreatetruecolor( 105, 217 ) or die( 'Cannot Initilize new GD image stream' );
        //Le damos un color a la base, en este caso se utiliza el negro
        $black          = imagecolorallocate( $baseimagen, 250, 250, 250 );
        
        //Cargamos la segunda imagen(pantalones)
        $avatarPants    = imagecreatefrompng( $this->_pants );
        
        //Juntamos la tercera imagen con la imagen base
        imagecopymerge( $baseimagen, $avatarPants, 16, 149, 0, 0, 73, 68, 100 );
        
        //Cargamos la segunda imagen(cuerpo)
        $avatarShirt    = imagecreatefrompng( $this->_shirt );
        
        //Juntamos la segunda imagen con la imagen base
        imagecopymerge( $baseimagen, $avatarShirt, 10, 100, 0, 0, 81, 69, 100 );
        
        //Cargamos la primera imagen(cabecera)
        $avatarHead     = imagecreatefrompng( $this->_head );
        
        //Unimos la primera imagen con la imagen base
        imagecopymerge( $baseimagen, $avatarHead, 0, 0, 0, 0, 108, 115, 100 );
        
        //Mostramos la imagen en el navegador
        header( "Content-Type: image/png" );
        
        //ImagePng( image, filename, quality, filters )
        imagepng( $baseimagen );
        
        //Limpiamos la memoria utilizada con las imagenes
        imagedestroy( $logo );
        imagedestroy( $ts_viewer );
        imagedestroy( $baseimagen );
    }
}

$avatar = new Avatar( "avatar_cara.png", "avatar_playera.png", "avatar_pantalones.png");
$avatar->createAvatar();

?>