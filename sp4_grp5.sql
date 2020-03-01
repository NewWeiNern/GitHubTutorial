-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2020 at 04:05 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sp4_grp5`
--
CREATE DATABASE IF NOT EXISTS `sp4_grp5` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sp4_grp5`;

-- --------------------------------------------------------

--
-- Table structure for table `tb_app_data`
--

CREATE TABLE `tb_app_data` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `current_kg` int(11) NOT NULL,
  `total_kg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_app_users`
--

CREATE TABLE `tb_app_users` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `pass` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_app_users`
--

INSERT INTO `tb_app_users` (`id`, `name`, `email`, `pass`) VALUES
(1, 'admin', 'admin@gmail.com', '$2y$10$YrJqp6LQfmz0j6z6ufqOg.jqrzbvoOy3fM5N5RP60Sm83JDhkR8oa'),
(2, 'NWNPoly', 'nwnpoly@gmail.com', '$2y$10$3fm5N77qJeOqd4.6Nm07jO/aWs8XAmyhCNa6hAQiKnsigxRmlOlOG');

-- --------------------------------------------------------

--
-- Table structure for table `tb_bin`
--

CREATE TABLE `tb_bin` (
  `bin_id` int(11) NOT NULL,
  `bin_code` int(8) NOT NULL,
  `bin_name` varchar(50) NOT NULL,
  `bin_json` longtext NOT NULL,
  `is_scanned` tinyint(1) NOT NULL,
  `is_generated` tinyint(1) NOT NULL,
  `is_opened` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_bin`
--

INSERT INTO `tb_bin` (`bin_id`, `bin_code`, `bin_name`, `bin_json`, `is_scanned`, `is_generated`, `is_opened`) VALUES
(1, 18467948, 'Nanyang Polytechnic', '{\"time\":1582225239,\"cgc\":\"7b53236aeb7431aa45a662b9dbd63f43\",\"code\":\"18467948\"}', 0, 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_app_data`
--
ALTER TABLE `tb_app_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_app_users`
--
ALTER TABLE `tb_app_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_bin`
--
ALTER TABLE `tb_bin`
  ADD PRIMARY KEY (`bin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_app_users`
--
ALTER TABLE `tb_app_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_bin`
--
ALTER TABLE `tb_bin`
  MODIFY `bin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
