CREATE DATABASE IF NOT EXISTS Etherbot;
USE Etherbot;

CREATE TABLE IF NOT EXISTS Users(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    total numeric(32,0)
)

INSERT INTO USERS (username, total) VALUES('Etherbot', 0);
