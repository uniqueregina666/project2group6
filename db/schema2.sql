-- Create the burgers_db database --
CREATE DATABASE Jobs_db;

USE Jobs_db;

-- Create a Frontend table with the required fields --
CREATE TABLE Front_End
(
	id int NOT NULL AUTO_INCREMENT,
	Front_End VARCHAR (255),
  last_name VARCHAR(255),
  first_name VARCHAR (255),
  title VARCHAR (225),
  street VARCHAR (255),
  city VARCHAR (255),
  state VARCHAR (255),
  zip VARCHAR (225),
  email VARCHAR (225),
  experience VARCHAR (225),
  PRIMARY KEY (id)
);

CREATE TABLE Back_End
(
	id int NOT NULL AUTO_INCREMENT,
	Back_End VARCHAR (225),
  last_name VARCHAR(255),
  first_name VARCHAR (255),
  title VARCHAR (225),
  street VARCHAR (255),
  city VARCHAR (255),
  state VARCHAR (255),
  zip VARCHAR (225) ,
  email VARCHAR (225),
  experience VARCHAR (225),
  PRIMARY KEY (id)
);


