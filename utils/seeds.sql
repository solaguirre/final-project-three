DROP DATABASE IF EXISTS p3users_db;
CREATE DATABASE p3users_db;
USE p3users_db;

CREATE TABLE users (
  id int AUTO_INCREMENT,
  user_name varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  tickets INT NOT NULL,
  PRIMARY KEY(id)
);




DROP DATABASE IF EXISTS raffles_db;
CREATE DATABASE raffles_db;
USE raffles_db;

CREATE TABLE raffles (
  id int AUTO_INCREMENT,
  item_name varchar(300) NOT NULL,
  item_code varchar(60) NOT NULL,
  max_entries INT NOT NULL,
  current_entries INT NOT NULL,
  winning_user_id INT NOT NULL,
  PRIMARY KEY(id)
);





DROP DATABASE IF EXISTS card_db;
CREATE DATABASE card_db;
USE card_db;

CREATE TABLE card_info (
  id int AUTO_INCREMENT,
  cvc INT NOT NULL,
  expiry_date INT NOT NULL,
  cardholder_name varchar(50) NOT NULL,
  card_number INT NOT NULL,
  PRIMARY KEY(id)
);