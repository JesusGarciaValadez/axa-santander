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
        
        //  Creamos la base de la imagen definiendo ancho y alto ( w, h )
        $baseimagen         = imagecreatetruecolor( 108, 217 ) or die( 'Cannot Initialize new GD image stream' );
        
        //  Configuración del lienzo definiendo canal alpha
        imagesavealpha( $baseimagen, true );
        imagealphablending( $baseimagen, true );
        $transparent        = imagecolorallocatealpha( $baseimagen, 0, 0, 0, 127 );
        imagefill( $baseimagen, 0, 0, $transparent );
        
        //  Cargamos la primera imagen(silueta base )
        $avatarSilouette    = imagecreatefrompng( IMAGE_PATH . "avatar.png" );
        //  Configuramos la imagen base (posición, altura y crop coordinates)
        imagecopyresampled( $baseimagen, $avatarSilouette, 0, 8, 0, 0, 105, 217, 105, 217 );
        
        //  Cargamos la segunda imagen(cuerpo)
        $avatarShirt        = imagecreatefrompng( $this->_shirt );
        //  Juntamos la segunda imagen con la imagen base
        imagecopyresampled( $baseimagen, $avatarShirt, 15, 110, 0, 0, 81, 69, 81, 69 );
        
        //  Cargamos la primera imagen(cabeza)
        $avatarHead         = imagecreatefrompng( $this->_head );
        //  Unimos la primera imagen con la imagen base
        imagecopyresampled( $baseimagen, $avatarHead, 0, 5, 0, 0, 108, 115, 108, 115 );
        
        //  Cargamos la segunda imagen(pantalones)
        $avatarPants        = imagecreatefrompng( $this->_pants );
        //  Juntamos la tercera imagen con la imagen base
        imagecopyresampled( $baseimagen, $avatarPants, 16, 145, 0, 0, 73, 68, 73, 68 );
        
        //  Le decimos al navegador que el contenido es una imágen
        header( "Content-Type: image/png" );
        
        //  Mostramos la imagen en el mavegador
        //  imagepng( image, filename, quality, filters )
        imagepng( $baseimagen );
        
        //  Limpiamos la memoria utilizada con las imagenes y los colores
        imagedestroy( $avatarShirt );
        imagedestroy( $avatarPants );
        imagedestroy( $avatarHead );
        imagedestroy( $baseimagen );
    }
}

$avatar = new Avatar( "avatar_cara.png", "avatar_playera.png", "avatar_pantalones.png");
$avatar->createAvatar();

?>