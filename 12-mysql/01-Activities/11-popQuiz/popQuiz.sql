DROP DATABASE IF EXISTS popQuiz_DB;
CREATE DATABASE popQuiz_DB;

USE popQuiz_DB;

CREATE TABLE questions (
id INT NOT NULL
AUTO_INCREMENT,
topic VARCHAR
(50) NOT NULL,
difficulty INT
NOT NULL,
PRIMARY KEY
(id)
)

INSERT INTO questions 
(topic, difficulty)
VALUES
("earlier", 9),
("recent", 5),
("now", 3);