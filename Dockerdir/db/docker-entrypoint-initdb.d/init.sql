-- Adminer 4.8.0 MySQL 5.5.5-10.5.10-MariaDB-1:10.5.10+maria~focal dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;


DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`
(
    `name`     varchar(20) NOT NULL,
    `book_id` int(11)     NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`book_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `libraries`;
CREATE TABLE `libraries`
(
    `name`     varchar(20) NOT NULL,
    `library_id` int(11)     NOT NULL,
    library_FK   int(11)     NOT NULL,
    PRIMARY KEY `PK` (`library_id`),
    KEY `FK` (library_FK),
    CONSTRAINT `library_ibfk_2` FOREIGN KEY (library_FK) REFERENCES `books` (`book_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;


-- 2021-05-25 17:30:28
