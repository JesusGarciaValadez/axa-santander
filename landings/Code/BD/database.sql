SET NAMES 'utf8';

SET CHARACTER SET 'utf8';

CREATE DATABASE IF NOT EXISTS `axa_polls`;

CREATE TABLE IF NOT EXISTS `first_poll` 
( poll_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  crear_perfil VARCHAR( 140 ) NOT NULL,
  consideras_tu_red VARCHAR( 140 ) NOT NULL,
  actualizas_tu_estatus VARCHAR( 140 ) NOT NULL,
  utilidad_de_one VARCHAR( 140 ) NOT NULL,
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( poll_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `first_review_manager_network` 
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
  eleven VARCHAR( 60 ) NOT NULL, 
  twelve VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `second_review_ambassador` 
( review_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 60 ) NOT NULL, 
  two VARCHAR( 60 ) NOT NULL, 
  three VARCHAR( 60 ) NOT NULL, 
  four VARCHAR( 60 ) NOT NULL, 
  five VARCHAR( 60 ) NOT NULL, 
  six VARCHAR( 60 ) NOT NULL, 
  seven VARCHAR( 60 ) NOT NULL, 
  eight VARCHAR( 60 ) NOT NULL, 
  nine VARCHAR( 140 ) DEFAULT 'Ninguno', 
  ten VARCHAR( 60 ) NOT NULL, 
  eleven VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `second_review_manager_network` 
( review_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 60 ) NOT NULL, 
  two VARCHAR( 60 ) NOT NULL, 
  three VARCHAR( 60 ) NOT NULL, 
  four VARCHAR( 60 ) NOT NULL, 
  five VARCHAR( 60 ) NOT NULL, 
  six VARCHAR( 60 ) NOT NULL, 
  seven VARCHAR( 60 ) NOT NULL, 
  eight VARCHAR( 60 ) NOT NULL, 
  nine VARCHAR( 140 ) DEFAULT 'Ninguno', 
  ten VARCHAR( 60 ) NOT NULL, 
  eleven VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `third_review_ambassador` 
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
  eleven VARCHAR( 60 ) NOT NULL, 
  twelve VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `third_review_manager_network` 
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
  eleven VARCHAR( 60 ) NOT NULL, 
  twelve VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `fourth_review_ambassador` 
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
  ten VARCHAR( 60 ) NOT NULL, 
  eleven VARCHAR( 140 ) DEFAULT 'Ninguno', 
  twelve VARCHAR( 60 ) NOT NULL, 
  thirteen VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `fourth_review_manager_network` 
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
  ten VARCHAR( 60 ) NOT NULL, 
  eleven VARCHAR( 140 ) DEFAULT 'Ninguno', 
  twelve VARCHAR( 60 ) NOT NULL, 
  thirteen VARCHAR( 140 ) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_review PRIMARY KEY ( review_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `first_review_golive_ambassador` 
( golive_am_one_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_golive_am_one PRIMARY KEY ( golive_am_one_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `first_review_golive_manager_network` 
( golive_mn_one_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_golive_mn_one PRIMARY KEY ( golive_mn_one_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `first_review_golive_colaboradores` 
( golive_cl_one_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer DATE NOT NULL, 
  CONSTRAINT pk_golive_cl_one PRIMARY KEY ( golive_cl_one_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `second_review_golive_ambassador` 
( golive_am_two_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 255) DEFAULT 'Ninguno', 
  ten VARCHAR( 140 ) NOT NULL, 
  eleven VARCHAR( 2 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_am_two PRIMARY KEY ( golive_am_two_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `second_review_golive_manager_network` 
( golive_mn_two_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 255) DEFAULT 'Ninguno', 
  ten VARCHAR( 140 ) NOT NULL, 
  eleven VARCHAR( 2 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_mn_two PRIMARY KEY ( golive_mn_two_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `second_review_golive_colaboradores` 
( golive_cl_two_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 255) DEFAULT 'Ninguno', 
  ten VARCHAR( 140 ) NOT NULL, 
  eleven VARCHAR( 2 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_cl_two PRIMARY KEY ( golive_cl_two_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `third_review_golive_ambassador` 
( golive_am_three_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_am_three PRIMARY KEY ( golive_am_three_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `third_review_golive_manager_network` 
( golive_mn_three_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_mn_three PRIMARY KEY ( golive_mn_three_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `third_review_golive_colaboradores` 
( golive_cl_three_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_cl_three PRIMARY KEY ( golive_cl_three_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `fourth_review_golive_ambassador` 
( golive_am_fourth_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_am_fourth PRIMARY KEY ( golive_am_fourth_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `fourth_review_golive_manager_network` 
( golive_mn_fourth_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_mn_fourth PRIMARY KEY ( golive_mn_fourth_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';

CREATE TABLE IF NOT EXISTS `fourth_review_golive_colaboradores` 
( golive_cl_fourth_id SMALLINT UNSIGNED AUTO_INCREMENT, 
  one VARCHAR( 140 ) NOT NULL, 
  two VARCHAR( 140 ) NOT NULL, 
  three VARCHAR( 140 ) NOT NULL, 
  four VARCHAR( 140 ) NOT NULL, 
  five VARCHAR( 140 ) NOT NULL, 
  six VARCHAR( 140 ) NOT NULL, 
  seven VARCHAR( 140 ) NOT NULL, 
  eight VARCHAR( 140 ) NOT NULL, 
  nine VARCHAR( 140 ) NOT NULL, 
  ten VARCHAR( 255 ) DEFAULT 'Ninguno', 
  eleven VARCHAR( 140 ) NOT NULL, 
  twelve VARCHAR( 2 ) NOT NULL, 
  thirteen VARCHAR( 2) NOT NULL, 
  fourteen VARCHAR( 255) DEFAULT 'Ninguno', 
  date_answer VARCHAR( 140 ) NOT NULL, 
  CONSTRAINT pk_golive_cl_fourth PRIMARY KEY ( golive_cl_fourth_id ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';