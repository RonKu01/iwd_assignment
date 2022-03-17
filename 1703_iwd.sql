-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2022 at 06:56 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iwd`
--
CREATE DATABASE IF NOT EXISTS `iwd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `iwd`;

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointmentID` int(11) NOT NULL,
  `patID` int(11) NOT NULL,
  `doctorID` int(11) NOT NULL,
  `appointmentType` varchar(255) NOT NULL,
  `appointmentTime` time NOT NULL,
  `appointmentDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

CREATE TABLE `consultation` (
  `consultID` int(11) NOT NULL,
  `appointmentID` int(11) NOT NULL,
  `patID` int(11) NOT NULL,
  `doctorID` int(11) NOT NULL,
  `dignosis` varchar(255) NOT NULL,
  `treatment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctorID` int(11) NOT NULL,
  `loginID` int(11) NOT NULL,
  `specialisationID` int(11) NOT NULL,
  `doctorName` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctorID`, `loginID`, `specialisationID`, `doctorName`, `year`, `status`) VALUES
(1, 33, 0, 'asd', 123, ''),
(2, 34, 0, 'doctor1', 123, ''),
(3, 35, 0, 'doctor2', 789, ''),
(4, 36, 0, 'doctor3', 1234, ''),
(5, 37, 0, 'doctor4', 567, '');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackID` int(11) NOT NULL,
  `doctorID` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `loginID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`loginID`, `username`, `password`, `role`) VALUES
(21, 'test', '123', 'Patient'),
(22, 'ron', 'ron', 'Patient'),
(23, 'fai', 'fai', 'Patient'),
(24, 'test', 'test', 'Patient'),
(25, 'test', 'test', 'Patient'),
(26, 'fai', 'fai', 'Patient'),
(27, 'ali', 'ali', 'Patient'),
(28, 'abu', 'abu', 'Patient'),
(29, 'asdasd', '', 'Patient'),
(30, 'jlwelrjwelrjl', 'test', 'Patient'),
(31, 'tyler1', 'test', 'Patient'),
(32, 'asd', 'asd', 'Patient'),
(33, 'asd', 'asd', 'Doctor'),
(34, 'doctor', 'doctor', 'Doctor'),
(35, 'doctor2', 'doctor', 'Doctor'),
(36, 'doctor3', 'doctor', 'Doctor'),
(37, 'doctor4', 'doctor', 'Doctor'),
(38, 'test1', 'test', 'Patient'),
(39, 'admin', 'admin', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patID` int(11) NOT NULL,
  `loginID` int(11) NOT NULL,
  `patName` varchar(255) NOT NULL,
  `patDob` date NOT NULL,
  `patAddress` varchar(255) NOT NULL,
  `patHistory` text NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patID`, `loginID`, `patName`, `patDob`, `patAddress`, `patHistory`, `status`) VALUES
(1, 27, 'ali', '2022-03-17', 'test test', '', ''),
(2, 28, 'abu', '2022-03-17', 'test test test', '', ''),
(3, 29, 'asdasd', '2022-03-25', '', '', ''),
(4, 30, 'klqwjejqwklej', '2022-03-25', 'tetst', '', ''),
(5, 31, 'tyler1', '2022-03-24', 'tyler1', '', ''),
(6, 32, 'asd', '2022-03-11', 'asd', '', ''),
(7, 38, 'test1', '2022-03-18', 'test1', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `specialisation`
--

CREATE TABLE `specialisation` (
  `specialisationID` int(11) NOT NULL,
  `specialisationName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `specialisation`
--

INSERT INTO `specialisation` (`specialisationID`, `specialisationName`) VALUES
(1, 'Psychiatrist'),
(2, 'Urologist'),
(3, 'Dermatologist'),
(4, 'Gastroenterologist'),
(5, 'Infectious diseases'),
(6, 'Gynecologist'),
(7, 'ENT Specialist'),
(8, 'Fertility Specialist'),
(9, 'Orthopedics');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointmentID`);

--
-- Indexes for table `consultation`
--
ALTER TABLE `consultation`
  ADD PRIMARY KEY (`consultID`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctorID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackID`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`loginID`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patID`);

--
-- Indexes for table `specialisation`
--
ALTER TABLE `specialisation`
  ADD PRIMARY KEY (`specialisationID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointmentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `consultation`
--
ALTER TABLE `consultation`
  MODIFY `consultID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `loginID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `specialisation`
--
ALTER TABLE `specialisation`
  MODIFY `specialisationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
