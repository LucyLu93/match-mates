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
    `age` INT NOT NULL, 
    `location` VARCHAR(255) NOT NULL,
    `wins` INT NOT NULL,
    `losses` INT NOT NULL, 
    `draws` INT NOT NULL,
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
losses, draws)
    VALUES ('Lucy', 'Mahon', 30, 'Lanzarote', 5, 3, 1);
    
INSERT INTO `userinfo` (firstname, lastname, age, location, wins,
losses, draws)   
    VALUES ('Pipa', 'the cat', 2, 'Lanzarote', 6, 2, 1);

 INSERT INTO `usermatches` (player1id, player2id, accept, decline)
    VALUES (1, 2, true, false);  

