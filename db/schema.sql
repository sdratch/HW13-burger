DROP DATABASE IF EXISTs burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INTEGER NOT NULL auto_increment,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY(id)
)