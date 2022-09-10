DROP DATABASE if exists users_db;

CREATE DATABASE users_db;

CREATE TABLE `Users` (

                       `id` bigint not null auto_increment,
                       `userName` varchar(75) not null,
                       `email` varchar(100) not null,
                       `password` varchar(100) not null,
                       PRIMARY KEY (`id`)

)