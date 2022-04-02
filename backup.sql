-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql6.freemysqlhosting.net
-- Generation Time: Apr 02, 2022 at 06:36 AM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6479845`
--
CREATE DATABASE IF NOT EXISTS `sql6479845` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sql6479845`;

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
  `appointmentDate` date NOT NULL,
  `purpose` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `meetingID` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`appointmentID`, `patID`, `doctorID`, `appointmentType`, `appointmentTime`, `appointmentDate`, `purpose`, `status`, `meetingID`, `token`) VALUES
(1, 5, 1, 'online', '14:00:00', '2022-03-21', 'test', 'Accept', 'gchs-9f2b-kzg5', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4NDUyOTM3LCJleHAiOjE2NDg0NTM1Mzd9.h5QUZs_wldnMAlZYlvK8ukYHtYZ5ivNy0LlAx'),
(2, 5, 1, 'visit', '12:32:00', '2022-03-22', '', 'Decline', '0', ''),
(3, 5, 1, 'visit', '14:00:00', '2022-03-21', 'asd', 'Accept', 'id4z-bzcb-5oig', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4MjA0MTQ0LCJleHAiOjE2NDgyMDQ3NDR9.QYYNGracnwjLLl9rbXhg27DpkXy7oCvK78eTU'),
(4, 6, 1, 'visit', '12:23:00', '2022-03-16', 'asdasd', 'Decline', '0', ''),
(5, 0, 1, 'online', '12:00:00', '2022-03-21', 'asd', 'Pending', '0', ''),
(6, 0, 1, 'online', '12:00:00', '2022-03-21', 'asd', 'Pending', '0', ''),
(7, 0, 1, 'online', '14:00:00', '2022-03-21', 'asd', 'Pending', '0', ''),
(8, 1, 1, 'online', '12:00:00', '2022-03-21', 'asd', 'Accept', '3git-au2g-lay9', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4NDczMjQyLCJleHAiOjE2NDg0NzM4NDJ9.wRheLS-BanX5peyzEsyKrtYp-BAc13lBNaCJa'),
(9, 1, 19, 'visit', '12:30:00', '2022-03-21', 'testing', 'Pending', '0', ''),
(10, 1, 1, 'online', '12:32:00', '2022-03-16', 'testing', 'Done', '74wz-xtri-u2vx', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4Mjc1ODY5LCJleHAiOjE2NDgyNzY0Njl9.R5U-7yy-tdSkRl3Q50daOYdHLy2Nh1KBBYLGN'),
(11, 2, 1, 'visit', '11:30:00', '2022-03-24', 'testing testing testing', 'Done', 'o37v-jiqb-gdln', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4Mjc0OTU2LCJleHAiOjE2NDgyNzU1NTZ9.-a4MuL_28x7JReueEMnciQ8B6DDWM5Dxgs3hx'),
(12, 1, 2, 'online', '14:00:00', '2022-03-23', 'testing', 'Pending', '', ''),
(13, 1, 2, 'online', '14:00:00', '2022-03-29', 'asd', 'Accept', '8g8b-imwt-29x1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4MTA0MzM5LCJleHAiOjE2NDgxMDQ5Mzl9.5QjW-IsN_oIiwMwCx3foy9uel3lSSFeWh3oBd'),
(14, 1, 30, 'online', '12:00:00', '0000-00-00', 'asd', 'Pending', '', ''),
(15, 1, 2, 'online', '20:00:00', '2022-03-24', 'test', 'Pending', '', ''),
(16, 4, 3, 'online', '20:00:00', '2022-03-27', 'asd', 'Done', 'uofm-9bca-vxek', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4MjYyNjIwLCJleHAiOjE2NDgyNjMyMjB9.LI0RWi6lujOSHY-S47yoRLtJhoU12jhSIeQXT'),
(17, 4, 3, 'online', '12:00:00', '0000-00-00', 'test', 'Pending', '', ''),
(18, 4, 3, 'online', '09:00:00', '2022-03-28', 'test', 'Done', 'o6x6-gr6h-qfst', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4MzUzNTI2LCJleHAiOjE2NDgzNTQxMjZ9.shRz46qPV0mV56wiMERtj4kZ_fSSyhqzBnNwV'),
(19, 4, 3, 'online', '12:00:00', '2022-03-28', 'test', 'Done', '5fmi-nlzg-1mfx', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4NzEyMzA0LCJleHAiOjE2NDg3MTI5MDR9.Mm8RuVzG2qfY342L0I9sH8H3JLqxBV1yzB6NF'),
(20, 4, 3, 'online', '12:00:00', '2022-03-29', 'test', 'Done', '7dwv-t1bu-dn11', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4MzUwMjg0LCJleHAiOjE2NDgzNTA4ODR9.PfCWoKkKMFmsdnSGTLjONaGJU2UxWto7K8-fi'),
(21, 4, 2, 'online', '12:00:00', '2022-04-01', 'test', 'Pending', '', ''),
(22, 4, 2, 'online', '12:00:00', '2022-04-02', 'test', 'Cancelled', '', ''),
(23, 1, 1, 'online', '12:00:00', '2022-04-01', 'consulation', 'Accept', 'xgcy-lp8o-9p9d', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4ODcwODI1LCJleHAiOjE2NDg4NzE0MjV9.0Hj5MemeAONvAHR-O1DGU2j_Eo_iqbumyI31W'),
(24, 1, 1, 'online', '12:00:00', '2022-04-01', 'consulation', 'Accept', 'h2o8-yoe4-eq4h', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4NzExMjE2LCJleHAiOjE2NDg3MTE4MTZ9.StG2PxjuK0kYmqj3b8bsE4EHM18kD0JB3uizt'),
(25, 5, 2, 'online', '12:00:00', '2022-04-01', 'Cannot Sleep', 'Done', '4paw-r52z-03ej', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4NzEyNTYzLCJleHAiOjE2NDg3MTMxNjN9.-QmT_K2afCxuM6DUL4cM0JYAx_yHCYeB_QFlS'),
(26, 3, 5, 'online', '12:00:00', '2022-04-05', 'test', 'Accept', '8ym4-ut5r-x25r', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNjQ4ODY4MjQwLCJleHAiOjE2NDg4Njg4NDB9.5ZLF9sl6JuCGRT-FuT0-939gNAN8qd-jjfHuW');

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

CREATE TABLE `consultation` (
  `consultID` int(11) NOT NULL,
  `appointmentID` int(11) NOT NULL,
  `dignosis` varchar(255) NOT NULL,
  `treatment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `consultation`
--

INSERT INTO `consultation` (`consultID`, `appointmentID`, `dignosis`, `treatment`) VALUES
(2, 16, 'test', 'test'),
(3, 11, 'abcd', 'abcd'),
(4, 10, 'testabc', 'testabc'),
(5, 20, 'abc', 'abc'),
(6, 18, 'abc', 'abc'),
(7, 19, 'having problem sleeping', 'penadol'),
(8, 25, 'patient cannot sleep well', 'panadol');

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
  `qualifications` varchar(255) NOT NULL,
  `conditionConsulted` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctorID`, `loginID`, `specialisationID`, `doctorName`, `year`, `qualifications`, `conditionConsulted`) VALUES
(1, 2, 1, 'Dr Tee Bee Chin', 30, 'MBBS (Manipal), M Psych Med (UM) UM', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(2, 3, 1, 'Dr Lim Wai Jenn', 21, 'MD (UKM), Mmed. Psych (UKM), Subspeciality & Fellowship in Child & Adolescent Psychiatry (Singapore)', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(3, 4, 1, 'Dr Khoo Yee Laim', 14, 'MD (Jefferson, USA), ABPN Psychiatry (USA), ABPN Child & Adolescent Psychiatry (USA), Fellowship in Intensive Structural Family Therapy (USA)', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(4, 11, 2, 'Dr Hemanth Kumar Ramasamy', 24, 'MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH) , Board Certified Urologist (M’sia) , FRCS (Urology) Glasgow , Fellowship in Uro Oncology (Australia)', 'Penis Pain, Vesicoureteral Reflux, Men\'s health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,        Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,        Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer'),
(5, 12, 2, 'Dr Muhilan Parameswaran', 23, 'MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Urologist (M’sia) , FRCS (Urology) (Glasg) , Fellow Laparoscopic Surgery (India) , Fellowship in Urology (Austria)', 'Penis Pain, Vesicoureteral Reflux, Men\'s health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,        Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,        Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer'),
(6, 13, 2, 'Dr Lim Chei Seng', 40, ' MBBS (MAHE) , M.Surgery (UKM) , CMIA', 'Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.),    Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,    Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion'),
(7, 14, 3, 'Dr Nur Ashikin Ahmad', 19, 'MD (UPM), MRCP (UK) Advance Master Dermatology (UKM)', 'Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis, Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin'),
(8, 15, 3, 'Puan Sri Datuk Dr Suraiya Hani Hussain', 45, 'MBBS (UM), MRCP (UK), FRCP (UK), DIP (DERMATOLOGY) (UK)', 'Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,    Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins,     Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin'),
(9, 16, 3, 'Dr Tan Leng Leng', 23, 'MBBS (UM) , MRCP (UK) , FRCP (Edinburgh) , AM (Mal) , Advanced Master of Dermatology (UKM)', 'Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis, Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin'),
(10, 17, 4, 'Dr Aw Tui lar (T.I. Wong)', 37, 'MBChB (UK) , MRCPsych (UK)', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania,    Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal,   Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(11, 18, 4, 'Dr Khoo Yee Laim', 24, 'MD (USM), MPM (UM), MASTER OF PSYCHOLOGY, MEDICINE (UM)', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania,    Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal,   Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(12, 19, 4, 'Dr Bong Jan Ling', 30, 'MB ChB (Dundee), MMed Sci (Nottingham), FRCP (UK), CCST (UK)', 'Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,    Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins,     Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin'),
(13, 20, 5, 'Dr Shirley Tan Lan Eng', 24, 'MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH), FRCS  Glasgow , Fellowship in Uro Oncology (Australia)', 'Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.),    Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,    Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis'),
(14, 21, 5, 'Dr Nurul Yaqeen Mohd Esa', 23, 'MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Urologist (M’sia) , FRCS (Glasg) , Fellow Laparoscopic Surgery (India) , Fellowship in Infection (Austria)', 'Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.),    Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,    Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis'),
(15, 22, 5, 'Dr Usha Rani George', 40, 'MBBS(Mal), FRCS(Glasgow), AM(Mal)', 'Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.),    Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,    Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis'),
(16, 23, 6, 'Dr Navdeep Singh Pannu', 22, 'M.B.B.S. (India), M.MED, O&G (Malaya), M.R.C.O.G. (London), A.M. (Malaysia), Fellow International College of Surgeons (U.S.A.) Cert.', 'Lactational, Vulvar Cancer, Ectopic Pregnancy, Menopause, Period Pain, Polyps, Listeriosis, HPV, Vaginal Prolapse,    Pregnancy And Heart Disease, Bleeding Problems, Dysmenorrhoea, Rubella, Ovarian Cysts, Ovarians Cysts, White Discharge, Genital Sores, Irregular Menstruation, Twins, Genital Injury, UTI and Amenorrhoea'),
(17, 24, 6, 'Dr Chong Kuoh Ren', 20, 'MBBS (UM), MRCOG (UK), F.MAS, D.MAS, M.Cert. Reproductive Medicine & IVF (NHS', 'Lactational, Vulvar Cancer, Ectopic Pregnancy, Menopause, Period Pain, Polyps, Listeriosis, HPV, Vaginal Prolapse,    Pregnancy And Heart Disease, Bleeding Problems, Dysmenorrhoea, Rubella, Ovarian Cysts, Ovarians Cysts, White Discharge, Genital Sores, Irregular Menstruation,    Twins, Genital Injury, UTI and Amenorrhoea'),
(18, 25, 6, 'Dr Thaneemalai Jeganathan', 29, 'MBBS(IND) , MOBGYN, AM(MAL)', 'Lactational, Vulvar Cancer, Ectopic Pregnancy, Menopause, Period Pain, Polyps, Listeriosis, HPV, Vaginal Prolapse,    Pregnancy And Heart Disease, Bleeding Problems, Dysmenorrhoea, Rubella, Ovarian Cysts, Ovarians Cysts, White Discharge, Genital Sores, Irregular Menstruation,    Twins, Genital Injury, UTI and Amenorrhoea'),
(19, 26, 7, 'Dr Balachandran Appoo', 24, 'MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH) , Board Certified Otolaryngologist (M’sia) , FRCS (Urology) Glasgow , Fellowship in Uro Oncology (Australia)', 'Penis Pain, Vesicoureteral Reflux, Men\'s health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count, Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones, Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer'),
(20, 27, 7, 'Dr Gan Chon Chean', 23, 'MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Otolaryngologist (M’sia) , FRCS (Urology) (Glasg) , Fellow Laparoscopic Surgery (India) , Fellowship in Otolaryngologist (Austria)', 'Kearns-Sayre Syndrome, Sinusitis, Throat Cancer,Glottis, Tinnitus, Bad Breath, Hearing Loss, Dizziness, Hereditary Hemorrhagic Telangiectasia (HHT), Laryngeal Cancer, Oropharyngeal Cancer, Alport Syndrome, Laryngitis, Moniliasis (Candidiasis), Otoplasty, Sjogren\'s Syndrome, Difficulty Swallowing, Salivary Gland Tumors, Oral Cancer, Vertigo, Hearing Impairment,Maxillofacial Trauma'),
(21, 28, 7, 'Dr Awal Hassan', 40, 'MBBS(Mal), FRCS(Glasgow), AM(Mal)', 'Kearns-Sayre Syndrome, Sinusitis, Throat Cancer,Glottis, Tinnitus, Bad Breath, Hearing Loss, Dizziness, Hereditary Hemorrhagic Telangiectasia (HHT), Laryngeal Cancer, Oropharyngeal Cancer, Alport Syndrome, Laryngitis, Moniliasis (Candidiasis), Otoplasty, Sjogren\'s Syndrome, Difficulty Swallowing, Salivary Gland Tumors, Oral Cancer, Vertigo, Hearing Impairment,Maxillofacial Trauma'),
(22, 29, 8, 'Dr Navdeep Singh Pannu', 22, 'M.B.B.S. (India), M.MED, O&G (Malaya), M.R.C.O.G. (London), A.M. (Malaysia), Fellow International College of Surgeons (U.S.A.) Cert.', 'Lactational, Vulvar Cancer, Ectopic Pregnancy, Menopause, Period Pain, Polyps, Listeriosis, HPV, Vaginal Prolapse, Pregnancy And Heart Disease, Bleeding Problems, Dysmenorrhoea, Rubella, Ovarian Cysts, Ovarians Cysts, White Discharge, Genital Sores, Irregular Menstruation, Twins, Genital Injury, UTI and Amenorrhoea'),
(23, 30, 8, 'Dr Chong Kuoh Ren', 20, 'MBBS (UM), MRCOG (UK), F.MAS, D.MAS, M.Cert. Reproductive Medicine & IVF (NHS)', 'Lactational, Vulvar Cancer, Ectopic Pregnancy, Menopause, Period Pain, Polyps, Listeriosis, HPV, Vaginal Prolapse, Pregnancy And Heart Disease, Bleeding Problems, Dysmenorrhoea, Rubella, Ovarian Cysts, Ovarians Cysts, White Discharge, Genital Sores, Irregular Menstruation, Twins, Genital Injury, UTI and Amenorrhoea'),
(25, 32, 8, 'Dr Hemanth Kumar Ramasamy', 24, 'MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH) , Board Certified Urologist (M’sia) , FRCS (Urology) Glasgow , Fellowship in Uro Oncology (Australia)', 'Acute injuries, Arthritis,Bursitis, Bursitis, Musculoskeletal cancer, Hematuria, Osteoporosis, Osteomyelitis,Osteomalacia, Orthopedic autoimmune diseases, Tendinitis, Pinched nerve Inguinal Hernia, Tenosynovitis, , Prostate Diseases, Chancroid, Obstruction, STD, Candidiasis, BPH and Cancer'),
(26, 33, 9, 'Dr Muhilan Ali', 24, 'MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH) , Board Certified Urologist (M’sia) , FRCS (Urology) Glasgow , Fellowship in Uro Oncology (Australia)', 'Acute injuries, Arthritis,Bursitis, Bursitis, Musculoskeletal cancer, Hematuria, Osteoporosis, Osteomyelitis,Osteomalacia, Orthopedic autoimmune diseases, Tendinitis, Pinched nerve Inguinal Hernia, Tenosynovitis, , Prostate Diseases, Chancroid, Obstruction, STD, Candidiasis, BPH and Cancer'),
(28, 35, 9, 'Dr Lim Chei Seng', 40, 'MBBS(Mal), FRCS(Glasgow), AM(Mal)', 'Acute injuries, Arthritis,Bursitis, Bursitis, Musculoskeletal cancer, Hematuria, Osteoporosis, Osteomyelitis,Osteomalacia, Orthopedic autoimmune diseases, Tendinitis, Pinched nerve Inguinal Hernia, Tenosynovitis, , Prostate Diseases, Chancroid, Obstruction, STD, Candidiasis, BPH and Cancer'),
(29, 36, 9, 'Dato\' Dr Selvalingam Sothilingam', 31, 'MBBS (UM), MS (UKM), MMed Surgery (S\'pore), FRCS (UK), Board of Urology (M\'sia), Fellowship in Uro-Oncology (Australia)', 'Acute injuries, Arthritis,Bursitis, Bursitis, Musculoskeletal cancer, Hematuria, Osteoporosis, Osteomyelitis,Osteomalacia, Orthopedic autoimmune diseases, Tendinitis, Pinched nerve Inguinal Hernia, Tenosynovitis, , Prostate Diseases, Chancroid, Obstruction, STD, Candidiasis, BPH and Cancer'),
(30, 39, 1, 'Dr ali', 12, 'MBBS(Mal), FRCS(Glasgow), AM(Mal), abc', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(31, 41, 1, 'doctor111', 12, 'MBBS(Mal), FRCS(Glasgow), AM(Mal), abc', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(32, 42, 1, 'Dr Abu', 12, 'MBBS(Mal), FRCS(Glasgow), AM(Mal), abc', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(33, 43, 1, 'Dr Ahmad', 13, 'MBBS(Mal), FRCS(Glasgow), AM(Mal), abc', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)'),
(34, 44, 1, 'doctor abc', 12, 'MBBS(Mal), FRCS(Glasgow), AM(Mal), abc', 'Mania, Sleep Disorders, Antisocial Behavior, Bipolar Disorder, Hypersomnia, Hyperactivity Disorder, Bad Dreams, Trichotillomania, Masturbation Addiction, Eating Disorders, Double Personality, Suicidal Behavior, Selective Mutism, Stress, Oppositional Defiant Disorder, Drug Abuse, School Refusal, Drug Overdose, Psychological Problems, Post Traumatic Stress Disorder (PTSD) and Pervasive Developmental Disorders (PDD)');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackID` int(11) NOT NULL,
  `appointmentID` int(11) NOT NULL,
  `feedback` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackID`, `appointmentID`, `feedback`) VALUES
(1, 20, 'test'),
(3, 18, ''),
(4, 19, ''),
(5, 25, 'good doctor');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `loginID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` longtext NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`loginID`, `username`, `password`, `role`) VALUES
(1, 'admin', '$2a$10$SRFM.Pn.Tb.Dh/0Ce3toIuz/osli0eKVN5raKnj/xMkAG0hY5GQQG', 'Admin'),
(2, 'doctor1', '$2b$10$h10t65bitM5PfWEnBGfa8uD.CK0d5LhDdoSEoWQB2VH5LDabABSn6', 'Doctor'),
(3, 'doctor2', '$2b$10$RY0H/EW1v3b0tRniLPi9EeMGlk8bYPLmbQbv2SKLukwQm7Ftxb87C', 'Doctor'),
(4, 'doctor3', '$2b$10$5DRrzVZFlcBm1cbjQmUHz.hjqbCDutEFOriWzXHoo5OBBxTnrWDim', 'Doctor'),
(5, 'pat1', '$2b$10$RKUz/x.2t0V4OxA/Zi3bjerpCjNnvdhOx6725hXjVK.EQOCKecAE2', 'Patient'),
(6, 'pat2', '$2b$10$3eIvErPoQVGvTO/TeQXKrOUICfVJIO4M.I2y1s2qU7JuUmXVUWcXC', 'Patient'),
(7, 'pat3', '$2b$10$vnbmQOa3y6WRctP2dQlnuOnbZHhJ8O/DYWDAlZyaojhtw.Vmapb8q', 'Patient'),
(8, 'pat4', '$2b$10$euTw6D/6fc3DIAPsFnLaDewk6HKlsCbF/4z6eESi.184/xvy9mIX2', 'Patient'),
(9, 'pat5', '$2b$10$ijDxTPDZ//rZqDBTX5WKCeRpg/CAvEWOI/gXVIwNLnt/IjOn4P4/O', 'Patient'),
(10, 'test3', '$2b$10$RApC2O6G/..7jxABva59teJdUQJbBib0OWUVacVVdTDP2yL04VF8e', 'Patient'),
(11, 'doctor4', '$2b$10$YcXoaQtMmwoIYfb63Sih1OXNAyyVE0UzEouQiHIkEujREF7sMI5cC', 'Doctor'),
(12, 'doctor5', '$2b$10$9KypGEXY4zxwhSfy/357rOT1GR.yh5CSk16O5lqWS9Acz5jZacOUW', 'Doctor'),
(13, 'doctor6', '$2b$10$p74aAomrYdZxpT0ZgrlWSelZJTCnpNZGaaY69/TTAqiDU43ECniTe', 'Doctor'),
(14, 'doctor7', '$2b$10$Nlz5p9U7/pO7kD5bQifAEOGYdjN2iDZCUa0.7KtKqat/eQx71k7q6', 'Doctor'),
(15, 'doctor8', '$2b$10$hlgarbrfYnG8DnR.B40JnewMqYarj4ruRXeey3v0bTrKA.HRYv/BK', 'Doctor'),
(16, 'doctor9', '$2b$10$f6p5Bk0CIZ8pmF1YQczlju2qdfsXhlGtj5XHllxup7Uawgl.GLDpW', 'Doctor'),
(17, 'doctor10', '$2b$10$ClkUH4cscdSM0uWwbnHQfOWP.JSWhmGNJ8hUf/SS9M44PWSSnuZPW', 'Doctor'),
(18, 'doctor11', '$2b$10$WQUPX5B.FtnIq4IC1/P4kOh8.QCSMaWMBmJLbUHKHlC1UEVaTLAOu', 'Doctor'),
(19, 'doctor12', '$2b$10$w.61K/GoKgwKuS3uI16y2.y2JHX4MzTxuBdL6OY2PMjELDFg.WEga', 'Doctor'),
(20, 'doctor13', '$2b$10$2/ZDrVNQCo.f9BCwL06SOuKJGD9u/wFWpSPbz5p.UfGr.bUVUnpCW', 'Doctor'),
(21, 'doctor14', '$2b$10$ikNM3K8JO6u1PSl25DhKJO0kLoPBQIH9gHffvIsMfbI1mZH1k46bO', 'Doctor'),
(22, 'doctor15', '$2b$10$FgNQIJy5Kq6tCxjUHQkgTOB0YSlR3nlcergYQdvryYumHzGPot0PG', 'Doctor'),
(23, 'doctor16', '$2b$10$JoJoHwZ7AvtmI3xiqnXzOulx2q2ZiDgosKrRWPLBtRqfhnODj0Fjy', 'Doctor'),
(24, 'doctor17', '$2b$10$biBg3LrojBa5iXf8U/8IEeMUuQhTI2zQJqCfCBtTc5FdfpjYjUOtu', 'Doctor'),
(25, 'doctor18', '$2b$10$PSd/yp1zGA3SE0f7NbqfNOxekD7Czethm2J6ZxmppZGJUM0l0mY/O', 'Doctor'),
(26, 'doctor19', '$2b$10$TUYzcp1Hl.9a/1XmetARAeJtFTKNGVnxH0fOgenosTgMVqBI2dZxa', 'Doctor'),
(27, 'doctor20', '$2b$10$ey8rZTYSPVb08QHaNxMmr..FIEv3rwxCkojBuutmSnOHuMSSffx5O', 'Doctor'),
(28, 'doctor21', '$2b$10$ZWpNNXiSkqdN5dkfhqAr5u6VLBNZK6TT4hULcRum8u6lt1t.uWKa.', 'Doctor'),
(29, 'doctor22', '$2b$10$qKKxceVfTRcl1rd0N0lvY.QdymvNdC6sOLmnheIVa9ZUEAmdMsN5e', 'Doctor'),
(30, 'doctor23', '$2b$10$Y.aRtRGIQ05V6BxgTudoR.MerXMv4s6YwNa/tA.ktOMr4Qe5pzA0q', 'Doctor'),
(31, 'doctor24', '$2b$10$8kAGBj2gvddVA7YPWX2ukOpMv9geg1paJL1Z/FiV/Gyj6/ja2VJz.', 'Doctor'),
(32, 'doctor25', '$2b$10$.mc3FAisYCXzlDi.ySCU3.Apd9mAar2Frpm51Gp1khUdyiI/GNLCO', 'Doctor'),
(33, 'doctor26', '$2b$10$VStf3NWUMCpFNVb8PCj/5.B6T4MT5EQ7.DvvrV7NMMt1LXKq6eJ1m', 'Doctor'),
(34, 'doctor27', '$2b$10$objnluqHo1gBUPZKQsW7g.l3CkqrQzxKOy0/kRNy.9eLCj9DnfcOq', 'Doctor'),
(35, 'doctor27', '$2b$10$ebzGqltifs4blwWrahMlyeYzQdbc5KZZOpTicOUEOqnuNznQJMtF2', 'Doctor'),
(36, 'doctor28', '$2b$10$GTp35z5Uqvtx8pvNPoxq5.8FdqDSO3NmY2nX21o3HSBXIjuMRjn1a', 'Doctor'),
(37, 'test', '$2b$10$px6b3dSLGvoKy4ZKMzTUcevg1INEFfpFlZuUNXdapSkCUgxVuL0Tu', 'Patient'),
(38, 'test', '$2b$10$EwNOL8VDlCnGz0.Ln56RGuYN8IAugKMNz8JZNADGIQ3A2WQ/9AQ0e', 'Doctor'),
(39, 'doctor123', '$2b$10$7/03rYddFRk/6nj0NBskgOuLGaKAIuIm6GOoTQRDfrt6Iz3pPyHa6', 'Doctor'),
(40, 'pat123', '$2b$10$X6XLonRSEnYe.bZ159zJou3J8DLFQonFAnpiiSV9cxZcEJDSxtyC.', 'Patient'),
(41, 'doctor111', '$2b$10$JAZCsElWdn4x2kI0jythHua3KEdd2PrM..lV9uuW1PZHOdgZJCT9W', 'Doctor'),
(42, 'doctor12345', '$2b$10$JQDJ32tSzzDoa/naWTI4GOuO1HxfvxQ153bC9miJBH437EvSIlDty', 'Doctor'),
(43, 'doctor110', '$2b$10$cHbst3JcrDrImzWYp5KR5uJMGZ6MKU0oW73Yr.fa75B342O5QN2PS', 'Doctor'),
(44, 'doctor1110', '$2b$10$mItCYS3tCHUu3aMCPQoeZ.a3PhXyqkL2OqLfnwFSMXww58NsD5wDO', 'Doctor'),
(45, '', '$2b$10$C8LRMfwoLrDE5m5pVHAjWuXE6BNkzzCW2LEi23Dg/JpvX6kXxatMa', 'Doctor'),
(46, '', '$2b$10$p7WGYtG0RJWCt8lNfYhco.O4SF.tZ1bQ.Mfyu3wNSlH.KPGGZcjiS', 'Patient');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patID` int(11) NOT NULL,
  `loginID` int(11) NOT NULL,
  `patName` varchar(255) NOT NULL,
  `patDob` date NOT NULL,
  `patAddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patID`, `loginID`, `patName`, `patDob`, `patAddress`) VALUES
(1, 5, 'pat1', '2021-03-10', 'abc'),
(2, 6, 'pat2', '2022-03-23', 'abc'),
(3, 7, 'pat3', '2017-01-17', 'address3'),
(4, 8, 'pat4', '2011-02-17', 'address4'),
(5, 9, 'pat5', '2022-03-11', 'abcd'),
(6, 10, 'test3', '1995-02-20', 'address3'),
(7, 37, 'ron', '2022-03-22', 'asd'),
(8, 40, 'pat123', '2014-02-28', 'Sungai Long, abc'),
(9, 46, '', '2022-04-01', '');

-- --------------------------------------------------------

--
-- Table structure for table `specialisation`
--

CREATE TABLE `specialisation` (
  `specialisationID` int(11) NOT NULL,
  `specialisationName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `specialisation`
--

INSERT INTO `specialisation` (`specialisationID`, `specialisationName`, `description`, `image`) VALUES
(1, 'Psychiatrist', 'Psychiatry is the medical specialty devoted to the study, diagnosis, treatment, and prevention of mental disorders, among which are affective, behavioural, cognitive and perceptual abnormalities.', 'static/media/psychiatrist.47427dcb43f5fb2d3722.jpg'),
(2, 'Urologist', 'Urology, also known as genitourinary surgery, is the branch of medicine that focuses on surgical and medical diseases of the male and female urinary-tract system and the male reproductive organs.', 'static/media/Urologist.6277edcb47cfb9ecfc03.jpg'),
(3, 'Dermatologist', 'A dermatologist is a doctor who specializes in conditions involving the skin, hair, and nails. A dermatologist can identify and treat more than 3,000 conditions.', 'static/media/Dermatologist.1351941343832d4557a2.jpg'),
(4, 'Gastroenterologists', 'Gastroenterologists are doctors who are trained to diagnose and treat problems in your gastrointestinal (GI) tract and liver.', 'static/media/gastro.29031058c321c7e55fb6.jpg'),
(5, 'Infectious', 'An Infectious disease doctor is a board-certified MD or DO physician that treats acute and chronic infections caused by bacteria, parasites, fungi and viruses, including COVID-19.', 'static/media/Infectious.f77830ffbf2cee049be5.jpg'),
(6, 'Gynecologist', 'Gynecologists give reproductive and sexual health services that include pelvic exams, Pap tests, cancer screenings, and testing and treatment for vaginal infections.', 'static/media/gynaecologist.d3e491bf06e10a12948f.jpg'),
(7, 'Otolaryn', 'An ENT specialist or otolaryngologists a doctor who specializes in problems and diseases of the ear, nose and throat.', 'static/media/Otolaryngologist%20(ENT).ccda66739e4dbc4d556c.jpg'),
(8, 'Fertality', 'Fertility specialist are specialist that you consult with right medical expert for your fertility issues.', 'static/media/ferality.967c31fdce0e130fa266.jpg'),
(9, 'Orthopedic', 'Orthopedic surgeons are doctors who specialize in the musculoskeletal system - the bones, joints, ligaments, tendons, and muscles.', 'static/media/orthopedic.a88b42d97e7a5c62b1d8.jpg');

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
  MODIFY `appointmentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `consultation`
--
ALTER TABLE `consultation`
  MODIFY `consultID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `loginID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `specialisation`
--
ALTER TABLE `specialisation`
  MODIFY `specialisationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
