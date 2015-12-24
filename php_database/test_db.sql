-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 24, 2014 at 04:42 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test_db`
--
CREATE DATABASE IF NOT EXISTS `test_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `test_db`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `Student_Id` int(10) NOT NULL,
  `Student_Name` varchar(50) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Date_of_Birth` text NOT NULL,
  `Address` text NOT NULL,
  `Contact` text NOT NULL,
  
  PRIMARY KEY (`Student_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_student`
--

INSERT INTO `tbl_student` (`Student_Id`, `Student_Name`, `Gender`, `Date_of_Birth`, `Address`, `Contact`) VALUES
(2, 'Baby', 'Felmale', '5/Jun/2011', ' DD ', 'VB.NET'),
(3, 'Kon Train', 'Male', '4/May/2012', 'SR', 'C++'),
(4, 'Talarng', 'Male', '5/Jul/2008', ' SR ', 'Graphic Design'),
(5, 'Kh', 'Felmale', '9/Dec/2008', 'PP', 'C#'),
(6, 'Rachana', 'Felmale', '7/Jul/1994', 'BMC', 'C'),
(7, 'Sary', 'Male', '7/Jun/1990', 'Battambang', 'PHP & MySQL'),
(8, 'Takhei', 'Male', '5/Jul/1991', 'Siem Reap ', 'C#');
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
