--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists userinfo;
SET foreign_key_checks = 1;

SET foreign_key_checks = 0;
DROP TABLE if exists usermatches;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE userinfo (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `firstname` VARCHAR(255) NOT NULL, 
    `lastname` VARCHAR(255) NOT NULL, 
    `age` INT, 
    `location` VARCHAR(255) NOT NULL,
    `wins` INT,
    `losses` INT, 
    `draws` INT,
    `imageUrl` VARCHAR(255) NOT NULL,
     PRIMARY KEY (`id`)
    );

    CREATE TABLE usermatches ( 
    `id` INT NOT NULL AUTO_INCREMENT,
    `player1id` INT NOT NULL,
    `player2id` INT NOT NULL,
    `accept` BOOLEAN NOT NULL,
    `decline` BOOLEAN NOT NULL,
    PRIMARY KEY (`id`)
    );


--
-- Add initial data
--
INSERT INTO `userinfo` (firstname, lastname, age, location, wins,
losses, draws, imageUrl)
    VALUES ('Lucy', 'Mahon', 30, 'Las Palmas', 5, 3, 1, 'https://i.imgur.com/bURG75Y.jpg'), 
    ('Pipa', 'the cat', 2, 'Las Palmas', 6, 2, 1, 'https://i.imgur.com/AwPJZvT.jpg'), 
    ('Paddy', 'Cooge', 8, 'Las Palmas', 5, 1, 3, 'https://i.imgur.com/iPUgpC4.jpg') ;
    


 INSERT INTO `usermatches` (player1id, player2id, accept, decline)
    VALUES (1, 2, true, false);  

