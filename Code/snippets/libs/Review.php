<?php
//require_once LIBS_PATH.'filter.input.php';
//require_once LIBS_PATH.'mailer.php';
//require_once LIBS_PATH.'ParserTemplate.php';

class Review extends Model {
    
    private $_PDOConn = null;
    
    public function __construct( $conn, $db_table )  {
        $this->_tableName = $db_table;
        $this->_primaryKey = 'review_id';
        $this->setMysqlConn( $conn );
        $this->_PDOConn = $conn;
    }
    
    /**
     * Devuelve el array de configuracion
     *
     * @return array
     */
    public static function getConfig() {
        
        return parse_ini_file( LIBS_PATH.'pp.config.ini' , true ) ;
    }
        
    public function insertReview ( $info, $template, $subject, $correo, $cc = array() ) {
        
        //  Validación de los datos
        $parameters = array(
            'one' => array(
                'requerido' => 1 ,'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La primera pregunta es obligatoria.' ) ),
            'two' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La segunda pregunta es obligatoria.') ),
            'three' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La tercera pregunta es obligatoria.') ),
            'four' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La cuarta pregunta es obligatoria.') ),
            'five' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La quinta pregunta es obligatoria.') ),
            'six' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La sexta pregunta es obligatoria.') ),
            'seven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La séptima pregunta es obligatoria.') ),
            'eight' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La octava pregunta es obligatoria.') ),
            'nine' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La novena pregunta es obligatoria.') ),
            'ten' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La décima pregunta es obligatoria.') )
        );
        
        $form = new Validator( $info, $parameters );
        
        // Si el formulario no es válido
        if ( !$form->validate() ) {
            
            $response = array( 
                'success' => 'false',
                'message'=> $form->getMessage() 
            );
        } else {
            
            try {
                
                $this->_PDOConn->beginTransaction();
                
                $success    = $this->insert( $info );
                
                if ( $success ) {
                    
                    $emails = explode( ',' , $correo );
                    $to     = array();
                    
                    foreach ($emails as $email) {
                        
                        $params = array(
                            'mail' => array(
                                'requerido' => 1 ,'validador' => 'esEmail', 'mensaje' => utf8_encode( 'El correo no es válido.' ) )
                        );
                        
                        $destinatario = array(
                            'name' => $email,
                            'mail' => $email
                        );
                        
                        $form   = new Validator( $destinatario, $params );
                        if ( ( $form->validate() ) === false ) {
                            
                            throw new Exception('El correo ' . $email . ' no es válido.');
                        }
                        $to[] = $destinatario;
                    }
                    
                    $vars = array(
                        'one' => $_POST['one']
                        , 'two' => $_POST['two'] 
                        , 'three' => $_POST['three'] 
                        , 'four' => $_POST['four'] 
                        , 'five' => $_POST['five'] 
                        , 'six' => $_POST['six'] 
                        , 'seven' => $_POST['seven'] 
                        , 'eight' => $_POST['eight'] 
                        , 'nine' => $_POST['nine'] 
                        , 'ten' => $_POST['ten'] 
                    );
                    $tpl = ParserTemplate::parseTemplate( $template, $vars );
                    
                    $_cc    = $cc;
                    
                    if ( Mailer::sendMail( $subject, $tpl, $to , '' , $_cc ) ) {
                        
                        $response       = array (
                            'success' => 'true',
                            'message' => utf8_encode( 'Muchas gracias por contestar esta encuesta.' )
                        );
                    } else {
                        
                        $response = array (
                            'success'=>'false',
                            'message'=>utf8_encode( 'El servicio de correo no esta disponible' )
                        );
                    }
                } else {
                    
                    $response = array(
                        'success' => 'false', 
                        'message' => utf8_encode('No fue posible guardar la información.')
                    );
                }
                
                $this->_PDOConn->commit();
                
            } catch ( PDOException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de DB no esta disponible' );
            } catch ( phpmailerException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de correo no esta disponible' );
            }
        }
        return $response;
    }
    
    public function insertReviewFirstDoubles ( $info, $template, $subject, $correo, $cc = array() ) {
        
        //  Validación de los datos
        $parameters = array(
            'one' => array(
                'requerido' => 1 ,'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La primera pregunta es obligatoria.' ) ),
            'two' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La segunda pregunta es obligatoria.') ),
            'three' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La tercera pregunta es obligatoria.') ),
            'four' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La cuarta pregunta es obligatoria.') ),
            'five' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La quinta pregunta es obligatoria.') ),
            'six' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La sexta pregunta es obligatoria.') ),
            'seven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La séptima pregunta es obligatoria.') ),
            'eight' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La octava pregunta es obligatoria.') ),
            'nine' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La novena pregunta es obligatoria.') ),
            'ten' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La décima pregunta es obligatoria.') ), 
            'eleven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La onceava pregunta es obligatoria.') ),
            'twelve' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La doceava pregunta es obligatoria.') )
        );
        
        $form = new Validator( $info, $parameters );
        
        // Si el formulario no es válido
        if ( !$form->validate() ) {
            
            $response = array( 
                'success' => 'false',
                'message'=> $form->getMessage() 
            );
        } else {
            
            try {
                
                $this->_PDOConn->beginTransaction();
                
                $info[ 'date_answer' ] = date( 'd-m-Y H:i:s' );
                
                $success    = $this->insert( $info );
                
                if ( $success ) {
                    
                    $emails = explode( ',' , $correo );
                    $to     = array();
                    
                    foreach ($emails as $email) {
                        
                        $params = array(
                            'mail' => array(
                                'requerido' => 1 ,'validador' => 'esEmail', 'mensaje' => utf8_encode( 'El correo no es válido.' ) )
                        );
                        
                        $destinatario = array(
                            'name' => $email,
                            'mail' => $email
                        );
                        
                        $form   = new Validator( $destinatario, $params );
                        if ( ( $form->validate() ) === false ) {
                            
                            throw new Exception('El correo ' . $email . ' no es válido.');
                        }
                        $to[] = $destinatario;
                    }
                    
                    $vars = array(
                        'one' => $_POST['one']
                        , 'two' => $_POST['two'] 
                        , 'three' => $_POST['three'] 
                        , 'four' => $_POST['four'] 
                        , 'five' => $_POST['five'] 
                        , 'six' => $_POST['six'] 
                        , 'seven' => $_POST['seven'] 
                        , 'eight' => $_POST['eight'] 
                        , 'nine' => $_POST['nine'] 
                        , 'ten' => $_POST['ten'] 
                        , 'eleven' => $_POST['eleven'] 
                        , 'twelve' => $_POST['twelve'] 
                    );
                    $tpl = ParserTemplate::parseTemplate( $template, $vars );
                    
                    $_cc    = $cc;
                    
                    if ( Mailer::sendMail( $subject, $tpl, $to , '' , $_cc ) ) {
                        
                        $response       = array (
                            'success' => 'true',
                            'message' => utf8_encode( 'Muchas gracias por contestar esta encuesta.' )
                        );
                    } else {
                        
                        $response = array (
                            'success'=>'false',
                            'message'=>utf8_encode( 'El servicio de correo no esta disponible' )
                        );
                    }
                } else {
                    
                    $response = array(
                        'success' => 'false', 
                        'message' => utf8_encode('No fue posible guardar la información.')
                    );
                }
                
                $this->_PDOConn->commit();
                
            } catch ( PDOException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de DB no esta disponible' );
            } catch ( phpmailerException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de correo no esta disponible' );
            }
        }
        return $response;
    }
    public function insertReviewSecondDoubles ( $info, $template, $subject, $correo, $cc = array() ) {
        
        //  Validación de los datos
        $parameters = array(
            'one' => array(
                'requerido' => 1 ,'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La primera pregunta es obligatoria.' ) ),
            'two' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La segunda pregunta es obligatoria.') ),
            'three' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La tercera pregunta es obligatoria.') ),
            'four' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La cuarta pregunta es obligatoria.') ),
            'five' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La quinta pregunta es obligatoria.') ),
            'six' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La sexta pregunta es obligatoria.') ),
            'seven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La séptima pregunta es obligatoria.') ),
            'eight' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La octava pregunta es obligatoria.') ),
            'nine' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La novena pregunta es obligatoria.') ),
            'ten' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La décima pregunta es obligatoria.') ), 
            'eleven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La onceava pregunta es obligatoria.') )
        );
        
        $form = new Validator( $info, $parameters );
        
        // Si el formulario no es válido
        if ( !$form->validate() ) {
            
            $response = array( 
                'success' => 'false',
                'message'=> $form->getMessage() 
            );
        } else {
            
            try {
                
                $this->_PDOConn->beginTransaction();
                
                $info[ 'date_answer' ] = date( 'd-m-Y H:i:s' );
                
                $success    = $this->insert( $info );
                
                if ( $success ) {
                    
                    $emails = explode( ',' , $correo );
                    $to     = array();
                    
                    foreach ($emails as $email) {
                        
                        $params = array(
                            'mail' => array(
                                'requerido' => 1 ,'validador' => 'esEmail', 'mensaje' => utf8_encode( 'El correo no es válido.' ) )
                        );
                        
                        $destinatario = array(
                            'name' => $email,
                            'mail' => $email
                        );
                        
                        $form   = new Validator( $destinatario, $params );
                        if ( ( $form->validate() ) === false ) {
                            
                            throw new Exception('El correo ' . $email . ' no es válido.');
                        }
                        $to[] = $destinatario;
                    }
                    
                    $vars = array(
                        'one' => $_POST['one']
                        , 'two' => $_POST['two'] 
                        , 'three' => $_POST['three'] 
                        , 'four' => $_POST['four'] 
                        , 'five' => $_POST['five'] 
                        , 'six' => $_POST['six'] 
                        , 'seven' => $_POST['seven'] 
                        , 'eight' => $_POST['eight'] 
                        , 'nine' => $_POST['nine'] 
                        , 'ten' => $_POST['ten'] 
                        , 'eleven' => $_POST['eleven'] 
                    );
                    $tpl = ParserTemplate::parseTemplate( $template, $vars );
                    
                    $_cc    = $cc;
                    
                    if ( Mailer::sendMail( $subject, $tpl, $to , '' , $_cc ) ) {
                        
                        $response       = array (
                            'success' => 'true',
                            'message' => utf8_encode( 'Muchas gracias por contestar esta encuesta.' )
                        );
                    } else {
                        
                        $response = array (
                            'success'=>'false',
                            'message'=>utf8_encode( 'El servicio de correo no esta disponible' )
                        );
                    }
                } else {
                    
                    $response = array(
                        'success' => 'false', 
                        'message' => utf8_encode('No fue posible guardar la información.')
                    );
                }
                
                $this->_PDOConn->commit();
                
            } catch ( PDOException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de DB no esta disponible' );
            } catch ( phpmailerException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de correo no esta disponible' );
            }
        }
        return $response;
    }
    public function insertReviewThirdDoubles ( $info, $template, $subject, $correo, $cc = array() ) {
        
        //  Validación de los datos
        $parameters = array(
            'one' => array(
                'requerido' => 1 ,'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode( 'La primera pregunta es obligatoria.' ) ),
            'two' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La segunda pregunta es obligatoria.') ),
            'three' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La tercera pregunta es obligatoria.') ),
            'four' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La cuarta pregunta es obligatoria.') ),
            'five' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La quinta pregunta es obligatoria.') ),
            'six' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La sexta pregunta es obligatoria.') ),
            'seven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La séptima pregunta es obligatoria.') ),
            'eight' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La octava pregunta es obligatoria.') ),
            'nine' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La novena pregunta es obligatoria.') ),
            'ten' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La décima pregunta es obligatoria.') ), 
            'eleven' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La onceava pregunta es obligatoria.') ),
            'twelve' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La doceava pregunta es obligatoria.') ), 
            'thirteen' => array(
                'requerido' => 1, 'validador' => 'esAlfaNumerico', 'mensaje' => utf8_encode('La treceava pregunta es obligatoria.') )
        );
        
        $form = new Validator( $info, $parameters );
        
        // Si el formulario no es válido
        if ( !$form->validate() ) {
            
            $response = array( 
                'success' => 'false',
                'message'=> $form->getMessage() 
            );
        } else {
            
            try {
                
                $this->_PDOConn->beginTransaction();
                
                $info[ 'date_answer' ] = date( 'd-m-Y H:i:s' );
                
                $success    = $this->insert( $info );
                
                if ( $success ) {
                    
                    $emails = explode( ',' , $correo );
                    $to     = array();
                    
                    foreach ($emails as $email) {
                        
                        $params = array(
                            'mail' => array(
                                'requerido' => 1 ,'validador' => 'esEmail', 'mensaje' => utf8_encode( 'El correo no es válido.' ) )
                        );
                        
                        $destinatario = array(
                            'name' => $email,
                            'mail' => $email
                        );
                        
                        $form   = new Validator( $destinatario, $params );
                        if ( ( $form->validate() ) === false ) {
                            
                            throw new Exception('El correo ' . $email . ' no es válido.');
                        }
                        $to[] = $destinatario;
                    }
                    
                    $vars = array(
                        'one' => $_POST['one']
                        , 'two' => $_POST['two'] 
                        , 'three' => $_POST['three'] 
                        , 'four' => $_POST['four'] 
                        , 'five' => $_POST['five'] 
                        , 'six' => $_POST['six'] 
                        , 'seven' => $_POST['seven'] 
                        , 'eight' => $_POST['eight'] 
                        , 'nine' => $_POST['nine'] 
                        , 'ten' => $_POST['ten'] 
                        , 'eleven' => $_POST['eleven'] 
                        , 'twelve' => $_POST['twelve'] 
                        , 'thirteen' => $_POST['thirteen'] 
                    );
                    $tpl = ParserTemplate::parseTemplate( $template, $vars );
                    
                    $_cc    = $cc;
                    
                    if ( Mailer::sendMail( $subject, $tpl, $to , '' , $_cc ) ) {
                        
                        $response       = array (
                            'success' => 'true',
                            'message' => utf8_encode( 'Muchas gracias por contestar esta encuesta.' )
                        );
                    } else {
                        
                        $response = array (
                            'success'=>'false',
                            'message'=>utf8_encode( 'El servicio de correo no esta disponible' )
                        );
                    }
                } else {
                    
                    $response = array(
                        'success' => 'false', 
                        'message' => utf8_encode('No fue posible guardar la información.')
                    );
                }
                
                $this->_PDOConn->commit();
                
            } catch ( PDOException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de DB no esta disponible' );
            } catch ( phpmailerException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de correo no esta disponible' );
            }
        }
        return $response;
    }
    public function insertGoLive ( $info, $validations = array(), $template, $placeholders, $subject, $correo, $cc = array() ) {
        
        //  Validación de los datos
        $parameters = $validations;
        
        $form = new Validator( $info, $parameters );
        
        // Si el formulario no es válido
        if ( !$form->validate() ) {
            
            $response = array( 
                'success' => 'false',
                'message'=> $form->getMessage() 
            );
        } else {
            
            try {
                
                $this->_PDOConn->beginTransaction();
                
                $info[ 'date_answer' ] = date( 'd-m-Y H:i:s' );
                
                $success    = $this->insert( $info );
                
                if ( $success ) {
                    
                    $emails = explode( ',' , $correo );
                    $to     = array();
                    
                    foreach ($emails as $email) {
                        
                        $params = array(
                            'mail' => array(
                                'requerido' => 1 ,'validador' => 'esEmail', 'mensaje' => utf8_encode( 'El correo no es válido.' ) )
                        );
                        
                        $destinatario = array(
                            'name' => $email,
                            'mail' => $email
                        );
                        
                        $form   = new Validator( $destinatario, $params );
                        if ( ( $form->validate() ) === false ) {
                            
                            throw new Exception('El correo ' . $email . ' no es válido.');
                        }
                        $to[] = $destinatario;
                    }
                    
                    $vars = $placeholders;
                    $tpl = ParserTemplate::parseTemplate( $template, $vars );
                    
                    $_cc    = $cc;
                    
                    if ( Mailer::sendMail( $subject, $tpl, $to , '' , $_cc ) ) {
                        
                        $response       = array (
                            'success' => 'true',
                            'message' => utf8_encode( 'Muchas gracias por contestar esta encuesta.' )
                        );
                    } else {
                        
                        $response = array (
                            'success'=>'false',
                            'message'=>utf8_encode( 'El servicio de correo no esta disponible' )
                        );
                    }
                } else {
                    
                    $response = array(
                        'success' => 'false', 
                        'message' => utf8_encode('No fue posible guardar la información.')
                    );
                }
                
                $this->_PDOConn->commit();
                
            } catch ( PDOException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de DB no esta disponible' );
            } catch ( phpmailerException $e ) {
                
                $this->_PDOConn->rollBack();
                $response   = array ( 'success'=>'false', 'msg'=>'el servicio de correo no esta disponible' );
            }
        }
        return $response;
    }
}
