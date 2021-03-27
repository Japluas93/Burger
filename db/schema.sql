-- Drops the "burgers_db" if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE database burgers_db;
-- Makes it so all of the following code will affect "burgers_db" --
USE burgers_db;

-- Table "burgers"--
-- "id" is a numeric column that cannot contain null and will automatically increment as new rows are created. --
-- "burger_name" is a string column which cannot contain null --
-- "devoured" is a boolean column --

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);