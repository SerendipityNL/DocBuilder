-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 09, 2013 at 12:51 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `angular-todo`
--
CREATE DATABASE `angular-todo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `angular-todo`;

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE IF NOT EXISTS `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `name`, `title`, `done`, `sort`, `created_at`, `updated_at`) VALUES
(1, 'Vincent Bremer', 'Building Angular todo list', 0, 0, '2013-04-09 10:18:33', '2013-04-09 10:18:33'),
(2, 'Douwe de Haan', 'Setup Doctopus repository', 1, 0, '2013-04-09 10:18:33', '2013-04-09 10:18:33'),
(3, 'Tjerk Dijkstra', 'Drag and drop on GRID', 0, 2, '2013-04-09 10:18:33', '2013-04-09 10:18:33'),
(4, 'Edwin ten Wolde', 'Creating the bootstrap CSS', 3, 0, '2013-04-09 10:18:33', '2013-04-09 10:18:33');
