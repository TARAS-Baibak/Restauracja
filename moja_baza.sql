-- MySQL dump 10.13  Distrib 9.5.0, for macos15 (x86_64)
--
-- Host: localhost    Database: rezerwacje
-- ------------------------------------------------------
-- Server version	9.5.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--


--
-- Table structure for table `rezerwacje`
--

DROP TABLE IF EXISTS `rezerwacje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rezerwacje` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `stolik_id` int NOT NULL,
  `data` date NOT NULL,
  `godzina` time NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezerwacje`
--

LOCK TABLES `rezerwacje` WRITE;
/*!40000 ALTER TABLE `rezerwacje` DISABLE KEYS */;
/*!40000 ALTER TABLE `rezerwacje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rezerwacje_stolikow`
--

DROP TABLE IF EXISTS `rezerwacje_stolikow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rezerwacje_stolikow` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stolik_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `data` varchar(50) DEFAULT NULL,
  `godzina` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stolik_id` (`stolik_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rezerwacje_stolikow_ibfk_1` FOREIGN KEY (`stolik_id`) REFERENCES `stoliki` (`id`),
  CONSTRAINT `rezerwacje_stolikow_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezerwacje_stolikow`
--

LOCK TABLES `rezerwacje_stolikow` WRITE;
/*!40000 ALTER TABLE `rezerwacje_stolikow` DISABLE KEYS */;
/*!40000 ALTER TABLE `rezerwacje_stolikow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stoliki`
--

DROP TABLE IF EXISTS `stoliki`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stoliki` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nazwa` varchar(50) NOT NULL,
  `status` enum('wolny','zarezerwowany') DEFAULT 'wolny',
  `rezerwujacy` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stoliki`
--

LOCK TABLES `stoliki` WRITE;
/*!40000 ALTER TABLE `stoliki` DISABLE KEYS */;
INSERT INTO `stoliki` VALUES (1,'Stolik 1','wolny',NULL),(2,'Stolik 2','wolny',NULL),(3,'Stolik 3','wolny',NULL),(4,'Stolik 4','wolny',NULL),(5,'Stolik 5','wolny',NULL),(6,'Stolik 6','wolny',NULL),(7,'Stolik 7','wolny',NULL),(8,'Stolik 8','wolny',NULL),(9,'Stolik 9','wolny',NULL),(10,'Stolik 10','wolny',NULL),(11,'Stolik 11','wolny',NULL),(12,'Stolik 12','wolny',NULL);
/*!40000 ALTER TABLE `stoliki` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `haslo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin123'),(2,'test','test123'),(3,'admin','1234'),(4,'user','1234'),(5,'user','1234'),(6,'user1','1234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-27 23:51:01
