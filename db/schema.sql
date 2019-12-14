-- SCHEMA FOR APP

-- This line checks to see if there is an existing database, then deletes it
DROP DATABASE IF EXISTS tacos_db;
-- This line creates the database
CREATE DATABASE tacos_db;
-- Here we tell mysql which database to use
USE tacos_db;

-- END OF DATABASE CREATION

-- TABLE CREATION INSIDE DATABASE

CREATE TABLE tacos
(
    id INT NOT NULL
    AUTO_INCREMENT,
    taco_name VARCHAR
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY
    (id)
);

-- END OF TABLE CREATION