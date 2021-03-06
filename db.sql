DROP DATABASE IF EXISTS `meetupNode`;

CREATE DATABASE `meetupNode`;

USE `meetupNode`;

CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64) NOT NULL,
    `pwd` VARCHAR(64) NOT NULL
);

CREATE TABLE `events` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64) NOT NULL
);
