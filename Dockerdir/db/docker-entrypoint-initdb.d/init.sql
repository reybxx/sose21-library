CREATE TABLE IF NOT EXISTS `libraries` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

INSERT INTO `libraries` (`id`, `name`) VALUES
(1, 'Main Library'),
(2, 'Berlin Library'),
(3, 'Central Library');

CREATE TABLE IF NOT EXISTS `books` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(200) NOT NULL,
    `library_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `name` (`title`),
    KEY `FK_books_libraries` (`library_id`),
    CONSTRAINT `FK_books_libraries` FOREIGN KEY (`library_id`) REFERENCES `libraries` (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=4576 DEFAULT CHARSET=utf8mb4;

INSERT INTO `books` (`id`, `title`, `library_id`) VALUES
(1, 'The old X', 3),
(2, 'B', 1),
(3, 'C', 2),
(4, 'D', 1),
(5, 'E', 3),
(6, 'foo', 3);
