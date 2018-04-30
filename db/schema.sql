DROP DATABASE IS EXISTS jobsearch_db;
CREATE DATABASE jobsearch_db;

USE jobsearch_db;

CREATE TABLE `jobs` ( 
	`id` Int( 10 ) AUTO_INCREMENT NOT NULL,
	`userID` Int( 10 ) NULL,
	`jobtitle` VarChar( 4255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`location` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`company` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`contact` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`email` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`phone` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`webpage` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`createdAt` DateTime NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB;