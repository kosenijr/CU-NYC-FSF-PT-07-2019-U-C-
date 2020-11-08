DROP DATABASE IF EXISTS playlistDB;
CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs(
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) ,
  artist VARCHAR(45) ,
  genre VARCHAR(45) ,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Human", "Krewella", "Dance"),
	("TRNDSTTR","Black Coast", "Dance"),
    ("Who's Next", "The Who", "Classic Rock"),
    ("Yellow Submarine", "The Beatles", "Classic Rock");

