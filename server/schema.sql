DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL primary key AUTO_INCREMENT,
  room_name TEXT NOT NULL,
  user_id int,
  created_at DATETIME not null,
  message_text TEXT NOT NULL
);

CREATE TABLE users (
  id int primary key AUTO_INCREMENT,
  user_name varchar(20) NOT NULL UNIQUE
);



/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u mta630 < server/schema.sql
 *  to create the database and the tables.*/

