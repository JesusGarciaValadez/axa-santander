<?php

class Avatar {
    
    /**
     *  @var string _head. Name of the image that represents the head of the avatar
     */
    private $_skin;
    /**
     *  @var string _shirt. Name of the image that represents the hair of the avatar
     */
    private $_hair;
    /**
     *  @var string _pants. Name of the image that represents the clothes of the avatar
     */
    private $_clothes;
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
     *  @var string _avatarSkin. Name of the image that represents the head of the 
     *                            avatar in resample method.
     */
    private $_avatarSkin;
    /**
     *  @var string _avatarHair. Name of the image that represents the hair of the avatar
     *                           in resample method.
     */
    private $_avatarHair;
    /**
     *  @var string _avatarClothes. Name of the image that represents the clothes of the avatar 
     *                            in resample method.
     */
    private $_avatarClothes;
    /**
     *  @var string _file. Name of the image that represents  avatar 
     *                            in resample method.
     */
    private $_file;
    
    /**
     *  
     *  @method __contruct() Obtain a series of names for the files wich will based the avatar
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @param  string putSkin. Name of the skin image
     *  @param  string putHair. Name of the hair image
     *  @param  string putClothes. Name of the clothes image
     *
     */
    public function __construct ( $putSkin = "img/avatar_cara.png", $putHair = "", $putClothes = "img/avatar_pantalones.png" ) {
        
        $this->_skin    = ( !empty( $putSkin ) && is_string( $putSkin ) && file_exists( IMAGE_PATH . $putSkin ) ) ? IMAGE_PATH . $putSkin : IMAGE_PATH . "avatar_cara.png";
        if ( !empty( $putHair ) ) {
            
            $this->_hair    = ( !empty( $putHair ) && is_string( $putHair ) && file_exists( IMAGE_PATH . $putHair ) ) ? IMAGE_PATH . $putHair : IMAGE_PATH . "avatar_playera.png";
        }
        $this->_clothes = ( !empty( $putClothes ) & is_string( $putClothes ) && file_exists( IMAGE_PATH . $putClothes ) ) ? IMAGE_PATH . $putClothes : IMAGE_PATH . "avatar_pantalones.png";
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
        
        /*//  Cargamos la primera imagen(silueta base )
        $this->_avatarSilouette    = imagecreatefrompng( IMAGE_PATH . "avatar.png" );
        //  Configuramos la imagen base (posición, altura y crop coordinates)
        imagecopyresampled( $this->_baseimage, $this->_avatarSilouette, 0, 8, 0, 0, 105, 217, 105, 217 );*/
        
        //  Cargamos la segunda imagen(Skin)
        $this->_avatarSkin      = imagecreatefrompng( $this->_skin );
        //  Juntamos la segunda imagen con la imagen base
        imagecopyresampled( $this->_baseImage, $this->_avatarSkin, 0, 0, 0, 0, 230, 203, 230, 203 );
        
        if ( !empty( $this->_hair ) ) {
            
            //  Cargamos la primera imagen(hair)
            $this->_avatarHair      = imagecreatefrompng( $this->_hair );
            //  Unimos la primera imagen con la imagen base
            imagecopyresampled( $this->_baseImage, $this->_avatarHair, 0, 0, 0, 0, 230, 203, 230, 203 );
        }
        
        //  Cargamos la segunda imagen(clothes)
        $this->_avatarClothes   = imagecreatefrompng( $this->_clothes );
        //  Juntamos la tercera imagen con la imagen base
        imagecopyresampled( $this->_baseImage, $this->_avatarClothes, 0, 0, 0, 0, 230, 203, 230, 203 );
        
        //$this->_forceImageOutput();
        $this->_forceRedirectToImage();
        
        $this->_cleanMemory();
        
        return $this->_file;
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
        $this->_baseImage   = imagecreatetruecolor( 230, 203 ) or die( 'Cannot Initialize new GD image stream' );
        
        //  Configuración del lienzo definiendo canal alpha
        //imagealphablending( $this->_baseImage, true );
        //  Cambiar a true settea el background a negro
        imagesavealpha( $this->_baseImage, false );
        //$transparent        = imagecolorallocatealpha( $this->_baseImage, 0, 0, 0, 127 );
        
        //imagefill( $this->_baseImage, 0, 0, $transparent );*/
        
        $colourBlack = imagecolorallocatealpha( $this->_baseImage, 0, 0, 0, 0 );
        //$colourWhite = imagecolorallocatealpha( $this->_baseImage, 222, 222, 222, 0 );
        imagecolortransparent( $this->_baseImage, $colourBlack );
        // imagecolortransparent( $this->_baseImage, $colourWhite );
    }
    
    /**
     *  
     *  @method _forceImageOutput() Force the output in form of an image
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @var    string _baseimage. Name of the background image (canvas)
     *  @see    bool imagepng( resource $image [, string $filename [, int $quality [, int $filters ]]] )
     *  @see    resource fopen ( string $filename , string $mode [, bool $use_include_path = false [, resource $context ]] )
     *  @see    void passthru ( string $command [, int &$return_var ] )
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
        //header( 'location:' . LOCAL_URL . 'Code' . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'img' . DIRECTORY_SEPARATOR . 'imagenes_avatar' . DIRECTORY_SEPARATOR . 'mi_avatar.png' );
        $this->_file   = IMAGE_PATH . 'img' . DIRECTORY_SEPARATOR . 'imagenes_avatar' . DIRECTORY_SEPARATOR . 'mi_avatar.png';
        
        imagepng( $this->_baseImage, $this->_file, 2 );
        //readfile( $this->_file );
        /*header( 'Content-Type: image/png' );
        imagepng( $this->_baseImage );*/
    }
    
    /**
     *  
     *  @method _cleanMemory() Cleans the memory used by the images
     *  @author Jesús Antonio García Valadez @_Chucho_
     *  @param  string _avatarSkin. Name of the skin image
     *  @param  string _avatarHair. Name of the hair image
     *  @param  string _avatarClothes. Name of the clothes image
     *  @param  string _baseimage. Name of the background image (canvas)
     *
     */
    private function _cleanMemory () {
        
        //  Limpiamos la memoria utilizada con las imagenes y los colores
        imagedestroy( $this->_avatarSkin );
        if ( !empty( $this->_avatarHair ) ) {
            
            imagedestroy( $this->_avatarHair );
        }
        imagedestroy( $this->_avatarClothes );
        imagedestroy( $this->_baseImage );
    }
}

?>