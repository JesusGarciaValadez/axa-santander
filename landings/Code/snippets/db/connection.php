<?php
try {
    
    $dbh = new PDO( 'mysql:host=localhost;dbname=axa_poll', '_4x4-P0ll-Y1sus_', '2qLNezHfZUnBKcYm' );
    $dbh->exec("SET CHARACTER SET utf8");
} catch ( PDOException $e ){
    
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}