<?php
try {
    
    $dbh = new PDO( 'mysql:host=localhost;dbname=axa_reportes_mailing', 'descubreone', '6|,>xk<z$i' );
    $dbh->exec("SET CHARACTER SET utf8");
} catch ( PDOException $e ){
    
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}