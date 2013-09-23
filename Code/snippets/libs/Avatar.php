<?php

class Avatar {
    
    /**
     *  @var string _head. Name of the image that represents the head of the avatar
     */
    private $_head;
    /**
     *  @var string _shirt. Name of the image that represents the shirt of the avatar
     */
    private $_shirt;
    /**
     *  @var string _pants. Name of the image that represents the pants of the avatar
     */
    private $_pants;
    /**
     *  @var string _baseImage. Name of the base image that act like a canvas
     */
    private $_baseImage;
    /**
     *  @var string _avatarSilouette. Name of the image that represents the silouette 
     *                                of the avatar in resample method.
     */
    private $_avatarSilouette;
    /**
     *  @var string _avatarShirt. Name of the image that represents the shirt of the 
     *                            avatar in resample method.
     */
    private $_avatarShirt;
    /**
     *  @var string _avatarHead. Name of the image that represents the head of the avatar
     *                           in resample method.
     */
    private $_avatarHead;
    /**
     *  @var string _avatarPants. Name of the image that represents the pants of the avatar 
     *                            in resample method.
     */
    private $_avatarPants;
    
    /**
     *  
     *  @method __contruct() Obtain a series of names for the files wich will based the avatar
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @param  string putHead. Name of the head image
     *  @param  string putShirt. Name of the shirt image
     *  @param  string putPants. Name of the pants image
     *
     */
    public function __construct ( $putHead = "avatar_cara.png", $putShirt = "avatar_playera.png", $putPants = "avatar_pantalones.png" ) {
        
        $this->_head    = ( !empty( $putHead ) && is_string( $putHead ) && file_exists( IMAGE_PATH . $putHead ) ) ? IMAGE_PATH . $putHead : IMAGE_PATH . "avatar_cara.png";
        $this->_shirt   = ( !empty( $putShirt ) && is_string( $putShirt ) && file_exists( IMAGE_PATH . $putShirt ) ) ? IMAGE_PATH . $putShirt : IMAGE_PATH . "avatar_playera.png";
        $this->_pants   = ( !empty( $putPants ) & is_string( $putPants ) && file_exists( IMAGE_PATH . $putPants ) ) ? IMAGE_PATH . $putPants : IMAGE_PATH . "avatar_pantalones.png";
        
    }
    
    /**
     *  
     *  @method createAvatar() Create an avatar based on various png images
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @see    imagecreatetruecolor( width, height )
     *  @see    imagecolorallocatealpha( image, red, green, blue, alpha )
     *  @see    imagecreatefrompng( filename )
     *  @see    imagecopyresampled( resource $dst_image, resource $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_w, int $dst_h, int $src_w, int $src_h )
     *
     */
    public function createAvatar () {
        
        $this->_setBaseImage();
        
        //  Cargamos la primera imagen(silueta base )
        $this->_avatarSilouette    = imagecreatefrompng( IMAGE_PATH . "avatar.png" );
        //  Configuramos la imagen base (posición, altura y crop coordinates)
        imagecopyresampled( $this->_baseimage, $this->_avatarSilouette, 0, 8, 0, 0, 105, 217, 105, 217 );
        
        //  Cargamos la segunda imagen(playera)
        $this->_avatarShirt        = imagecreatefrompng( $this->_shirt );
        //  Juntamos la segunda imagen con la imagen base
        imagecopyresampled( $this->_baseimage, $this->_avatarShirt, 12, 110, 0, 0, 81, 69, 81, 69 );
        
        //  Cargamos la primera imagen(cabeza)
        $this->_avatarHead         = imagecreatefrompng( $this->_head );
        //  Unimos la primera imagen con la imagen base
        imagecopyresampled( $this->_baseimage, $this->_avatarHead, 0, 5, 0, 0, 108, 115, 108, 115 );
        
        //  Cargamos la segunda imagen(pantalones)
        $this->_avatarPants        = imagecreatefrompng( $this->_pants );
        //  Juntamos la tercera imagen con la imagen base
        imagecopyresampled( $this->_baseimage, $this->_avatarPants, 16, 150, 0, 0, 73, 68, 73, 68 );
        
        $this->_forceImageOutput();
        //$this->_forceRedirectToImage();
        
        $this->_cleanMemory();
    }
    
    /**
     *  
     *  @method _setBaseImage() Set the parameters of the canvas
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @var    string _baseimage. Name of the background image (canvas)
     *  @var    string transparent. Color and alpha setting for background canvas
     *  @see    resource magecreatetruecolor( string $filename )
     *  @see    bool imagesavealpha( resource $image , bool $saveflag )
     *  @see    bool imagealphablending( resource $image , bool $blendmode )
     *  @see    int colorallocatealpha( resource $image , int $red , int $green , int $blue , int $alpha )
     *  @see    bool imageFill( resource $image , int $x , int $y , int $color )
     *
     */
    private function _setBaseImage () {
        
        //  Creamos la base de la imagen definiendo ancho y alto ( w, h )
        $this->_baseimage   = imagecreatetruecolor( 108, 217 ) or die( 'Cannot Initialize new GD image stream' );
        
        //  Configuración del lienzo definiendo canal alpha
        imagesavealpha( $this->_baseimage, true );
        imagealphablending( $this->_baseimage, true );
        $transparent        = imagecolorallocatealpha( $this->_baseimage, 0, 0, 0, 127 );
        imagefill( $this->_baseimage, 0, 0, $transparent );
    }
    
    /**
     *  
     *  @method _forceImageOutput() Force the output in form of an image
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @var    string _baseimage. Name of the background image (canvas)
     *  @see    bool imagepng( resource $image [, string $filename [, int $quality [, int $filters ]]] )
     *
     */
    private function _forceImageOutput () {
        
        //  Forma Uno
        //  Le decimos al navegador que el contenido es una imágen
        header( "Content-Type: image/png" );
        
        $cachefile  = IMAGE_PATH . 'mi_avatar.png';
        if ( !file_exists( $cachefile ) ) {
            
            $im = generateimage();
            imagepng( $this->_baseimage, $cachefile, 2 );
            imagedestroy ( $im );
        }
        
        $fp = fopen( $cachefile, 'rb' );
        fpassthru( $fp );
    }
    
    /**
     *  
     *  @method _forceRedirectToImage() Force the output in form of an image
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @var    string _baseimage. Name of the background image (canvas)
     *  @see    bool imagepng( resource $image [, string $filename [, int $quality [, int $filters ]]] )
     *
     */
    private function _forceRedirectToImage () {
        
        //  Forma Dos
        //  Le decimos al navegador que el contenido es una imágen
        imagepng( $this->_baseimage, IMAGE_PATH . 'mi_avatar.png', 2 );
        
        header( 'location:' . LOCAL_URL . 'Code' . DIRECTORY_SEPARATOR . 'snippets' . DIRECTORY_SEPARATOR . 'libs' . DIRECTORY_SEPARATOR . 'avatar' . DIRECTORY_SEPARATOR . 'mi_avatar.png' );
    }
    
    /**
     *  
     *  @method _cleanMemory() Cleans the memory used by the images
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @param  string _avatarShirt. Name of the head image
     *  @param  string _avatarPants. Name of the shirt image
     *  @param  string _avatarHead. Name of the pants image
     *  @param  string _baseimage. Name of the background image (canvas)
     *
     */
    private function _cleanMemory () {
        
        //  Limpiamos la memoria utilizada con las imagenes y los colores
        imagedestroy( $this->_avatarShirt );
        imagedestroy( $this->_avatarPants );
        imagedestroy( $this->_avatarHead );
        imagedestroy( $this->_baseimage );
    }
}

?>