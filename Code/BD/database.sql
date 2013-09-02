SET NAMES 'utf8';

SET CHARACTER SET 'utf8';

CREATE DATABASE IF NOT EXISTS `axa_reportes_mailing`;

CREATE TABLE IF NOT EXISTS `fourth_review` 
( review_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 60 ) NOT NULL, 
  two VARCHAR( 60 ) NOT NULL, 
  three VARCHAR( 60 ) NOT NULL, 
  four VARCHAR( 60 ) NOT NULL, 
  five VARCHAR( 60 ) NOT NULL, 
  six VARCHAR( 60 ) NOT NULL, 
  seven VARCHAR( 60 ) NOT NULL, 
  eight VARCHAR( 60 ) NOT NULL, 
  nine VARCHAR( 60 ) NOT NULL, 
  ten VARCHAR( 140 ) DEFAULT 'Ninguno', 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

