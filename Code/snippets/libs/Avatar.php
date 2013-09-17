<?php

if ( !defined( "IMAGE_PATH" ) ) {
    
    define( "IMAGE_PATH", dirname(__FILE__) + DIRECTORY_SEPARATOR + 'avatar' + DIRECTORY_SEPARATOR );
}

echo 'pipo' + DIRECTORY_SEPARATOR + "huevos";

class Avatar {
    
    private $_head;
    private $_shirt;
    private $_pants;
    
    function __construct ( $putHead = "avatar_cara.png", $putShirt = "avatar_playera.png", $putPants = "avatar_pantalones.png" ) {
        
        $this->_head    = IMAGE_PATH + $putHead;
        $this->_shirt   = IMAGE_PATH + $putShirt;
        $this->_pants   = IMAGE_PATH + $putPants;
    }
    
    function createAvatar () {
        
        $baseImage  = ImageCreateTrueColor( 300, 210 );
        
    }
}

?>