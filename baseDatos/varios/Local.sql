-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: c19353_josecos
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

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

DROP SCHEMA IF EXISTS `ajc_bd`;
CREATE DATABASE `ajc_bd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE `ajc_bd`;

--
-- Table structure for table `0_encabezado_y_footer`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `0_encabezado_y_footer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `orden` int(10) unsigned NOT NULL,
  `nombre_seccion` varchar(20) NOT NULL,
  `nombre_encabezado` varchar(20) NOT NULL,
  `color_fondo_id` int(10) unsigned NOT NULL,
  `color_letras_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_seccion` (`nombre_seccion`),
  KEY `color_fondo_id` (`color_fondo_id`),
  KEY `color_letras_id` (`color_letras_id`),
  CONSTRAINT `0_encabezado_y_footer_ibfk_1` FOREIGN KEY (`color_fondo_id`) REFERENCES `colores` (`id`),
  CONSTRAINT `0_encabezado_y_footer_ibfk_2` FOREIGN KEY (`color_letras_id`) REFERENCES `colores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `0_encabezado_y_footer`
--

LOCK TABLES `0_encabezado_y_footer` WRITE;
/*!40000 ALTER TABLE `0_encabezado_y_footer` DISABLE KEYS */;
INSERT INTO `0_encabezado_y_footer` VALUES (1,1,'encabezado','Encabezado',4,2);
INSERT INTO `0_encabezado_y_footer` VALUES (2,2,'footer','Pie de página',4,2);
/*!40000 ALTER TABLE `0_encabezado_y_footer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `0_titulos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `0_titulos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `orden` int(10) unsigned NOT NULL,
  `nombre_seccion` varchar(20) NOT NULL,
  `nombre_encabezado` varchar(20) NOT NULL,
  `titulo_seccion` varchar(50) NOT NULL,
  `color_fondo_id` int(10) unsigned NOT NULL,
  `color_letras_id` int(10) unsigned NOT NULL,
  `color_fondo_boton_id` int(10) unsigned DEFAULT NULL,
  `color_letras_boton_id` int(10) unsigned DEFAULT NULL,
  `color_borde_boton_id` int(10) unsigned DEFAULT NULL,
  `imagen_id` int(10) unsigned DEFAULT NULL,
  `editar_texto` tinyint(1) NOT NULL,
  `editar_imagenes` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `color_fondo_id` (`color_fondo_id`),
  KEY `color_letras_id` (`color_letras_id`),
  KEY `color_fondo_boton_id` (`color_fondo_boton_id`),
  KEY `color_letras_boton_id` (`color_letras_boton_id`),
  KEY `color_borde_boton_id` (`color_borde_boton_id`),
  KEY `imagen_id` (`imagen_id`),
  CONSTRAINT `0_titulos_ibfk_1` FOREIGN KEY (`color_fondo_id`) REFERENCES `colores` (`id`),
  CONSTRAINT `0_titulos_ibfk_2` FOREIGN KEY (`color_letras_id`) REFERENCES `colores` (`id`),
  CONSTRAINT `0_titulos_ibfk_3` FOREIGN KEY (`color_fondo_boton_id`) REFERENCES `colores` (`id`),
  CONSTRAINT `0_titulos_ibfk_4` FOREIGN KEY (`color_letras_boton_id`) REFERENCES `colores` (`id`),
  CONSTRAINT `0_titulos_ibfk_5` FOREIGN KEY (`color_borde_boton_id`) REFERENCES `colores` (`id`),
  CONSTRAINT `0_titulos_ibfk_6` FOREIGN KEY (`imagen_id`) REFERENCES `imagenes_varias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `0_titulos`
--

LOCK TABLES `0_titulos` WRITE;
/*!40000 ALTER TABLE `0_titulos` DISABLE KEYS */;
INSERT INTO `0_titulos` VALUES (1,1,'inicio','Inicio','Estudio de Arquitectura - CABA',1,4,NULL,NULL,NULL,NULL,1,1);
INSERT INTO `0_titulos` VALUES (2,2,'habilitaciones','Habilitaciones','Habilitaciones Comerciales',3,5,NULL,NULL,NULL,1,1,0);
INSERT INTO `0_titulos` VALUES (3,3,'proyectos','Proyectos y Obras','Proyectos y Obras',1,4,6,4,4,NULL,1,1);
INSERT INTO `0_titulos` VALUES (4,4,'servicios','Otros Servicios','Otros Servicios',3,5,NULL,NULL,NULL,2,1,0);
INSERT INTO `0_titulos` VALUES (5,5,'quienes_somos','Quiénes Somos','Quiénes Somos',1,4,6,4,4,3,1,1);
INSERT INTO `0_titulos` VALUES (6,6,'contactanos','Contactanos','Contactanos',3,5,NULL,NULL,NULL,NULL,1,0);
/*!40000 ALTER TABLE `0_titulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `1_inicio_datos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `1_inicio_datos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `contenido` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `1_inicio_datos`
--

LOCK TABLES `1_inicio_datos` WRITE;
/*!40000 ALTER TABLE `1_inicio_datos` DISABLE KEYS */;
INSERT INTO `1_inicio_datos` VALUES (1,1,1,'Proyectos y Obras Nuevas');
INSERT INTO `1_inicio_datos` VALUES (2,1,2,'Remodelaciones');
INSERT INTO `1_inicio_datos` VALUES (3,1,3,'Habilitaciones Comerciales');
INSERT INTO `1_inicio_datos` VALUES (4,2,1,'Arq. José Ricardo Costas');
INSERT INTO `1_inicio_datos` VALUES (5,2,2,'Mat. CPAU 28.861');
INSERT INTO `1_inicio_datos` VALUES (6,2,3,'Celular: (11) 5462 2786');
INSERT INTO `1_inicio_datos` VALUES (7,2,4,'josericardocostas@hotmail.com');
/*!40000 ALTER TABLE `1_inicio_datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `1_inicio_imagenes`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `1_inicio_imagenes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `texto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `archivo` (`archivo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `1_inicio_imagenes`
--

LOCK TABLES `1_inicio_imagenes` WRITE;
/*!40000 ALTER TABLE `1_inicio_imagenes` DISABLE KEYS */;
INSERT INTO `1_inicio_imagenes` VALUES (1,1,1,'Buenos Aires.jpg',NULL);
INSERT INTO `1_inicio_imagenes` VALUES (2,1,2,'Instituto.jpg',NULL);
INSERT INTO `1_inicio_imagenes` VALUES (3,1,3,'Teatro Aptra.jpg',NULL);
INSERT INTO `1_inicio_imagenes` VALUES (4,1,4,'Cocina.jpg',NULL);
/*!40000 ALTER TABLE `1_inicio_imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `2_habilitaciones_datos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `2_habilitaciones_datos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `contenido` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `2_habilitaciones_datos`
--

LOCK TABLES `2_habilitaciones_datos` WRITE;
/*!40000 ALTER TABLE `2_habilitaciones_datos` DISABLE KEYS */;
INSERT INTO `2_habilitaciones_datos` VALUES (1,1,1,'Tenemos una dilatada experiencia en sus diferentes tipos y complejidades.');
INSERT INTO `2_habilitaciones_datos` VALUES (2,1,2,'Nuestro servicio profesional garantiza su aprobación, en los tipos de actividades que distingue la normativa de la Ciudad de Buenos Aires.');
INSERT INTO `2_habilitaciones_datos` VALUES (3,2,1,'Comercios Minoristas y/o Mayoristas');
INSERT INTO `2_habilitaciones_datos` VALUES (4,2,2,'Indumentaria, alimentos, electrodomésticos, etc...');
INSERT INTO `2_habilitaciones_datos` VALUES (5,3,1,'Servicios y Espectáculos');
INSERT INTO `2_habilitaciones_datos` VALUES (6,3,2,'Oficinas, peluquerías, agencias, salones de fiestas, centros culturales.');
INSERT INTO `2_habilitaciones_datos` VALUES (7,4,1,'Especiales');
INSERT INTO `2_habilitaciones_datos` VALUES (8,4,2,'Institutos de enseñanza, consultorios.');
INSERT INTO `2_habilitaciones_datos` VALUES (9,5,1,'Industrias y Depósitos');
/*!40000 ALTER TABLE `2_habilitaciones_datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `3_proyectos_datos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `3_proyectos_datos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `contenido` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `3_proyectos_datos`
--

LOCK TABLES `3_proyectos_datos` WRITE;
/*!40000 ALTER TABLE `3_proyectos_datos` DISABLE KEYS */;
INSERT INTO `3_proyectos_datos` VALUES (1,1,1,'Integral de Edificios');
INSERT INTO `3_proyectos_datos` VALUES (2,1,2,'Mediana Escala');
INSERT INTO `3_proyectos_datos` VALUES (3,1,3,'Menor Escala');
/*!40000 ALTER TABLE `3_proyectos_datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `3_proyectos_imagenes`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `3_proyectos_imagenes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `texto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `archivo` (`archivo`),
  KEY `grupo` (`grupo`),
  CONSTRAINT `3_proyectos_imagenes_ibfk_1` FOREIGN KEY (`grupo`) REFERENCES `3_proyectos_datos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `3_proyectos_imagenes`
--

LOCK TABLES `3_proyectos_imagenes` WRITE;
/*!40000 ALTER TABLE `3_proyectos_imagenes` DISABLE KEYS */;
INSERT INTO `3_proyectos_imagenes` VALUES (1,1,1,'1-Gran escala 1.jpg','Antes de remodelar');
INSERT INTO `3_proyectos_imagenes` VALUES (2,1,2,'1-Gran escala 2.jpg','');
INSERT INTO `3_proyectos_imagenes` VALUES (3,1,3,'1-Gran escala 3.jpg','');
INSERT INTO `3_proyectos_imagenes` VALUES (4,2,1,'2-Mediana escala 1.jpg','Antes de remodelar');
INSERT INTO `3_proyectos_imagenes` VALUES (5,2,2,'2-Mediana escala 2.jpg','');
INSERT INTO `3_proyectos_imagenes` VALUES (6,2,3,'2-Mediana escala 3.jpg','');
INSERT INTO `3_proyectos_imagenes` VALUES (7,3,1,'3-Menor escala 1.jpg','Antes de remodelar');
INSERT INTO `3_proyectos_imagenes` VALUES (8,3,2,'3-Menor escala 2.jpg','');
INSERT INTO `3_proyectos_imagenes` VALUES (9,3,3,'3-Menor escala 3.jpg','');
/*!40000 ALTER TABLE `3_proyectos_imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `4_servicios_datos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `4_servicios_datos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `contenido` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `4_servicios_datos`
--

LOCK TABLES `4_servicios_datos` WRITE;
/*!40000 ALTER TABLE `4_servicios_datos` DISABLE KEYS */;
INSERT INTO `4_servicios_datos` VALUES (1,1,1,'Habilitación de carteles comerciales');
INSERT INTO `4_servicios_datos` VALUES (2,2,1,'Obtención de certificado de conservación de fachadas');
INSERT INTO `4_servicios_datos` VALUES (3,2,2,'según ley 6116 (ex 257)');
INSERT INTO `4_servicios_datos` VALUES (4,3,1,'Asesoramiento en Seguridad e Higiene en la construcción');
/*!40000 ALTER TABLE `4_servicios_datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `5_quienes_somos_clientes`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `5_quienes_somos_clientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `texto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `archivo` (`archivo`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `5_quienes_somos_clientes`
--

LOCK TABLES `5_quienes_somos_clientes` WRITE;
/*!40000 ALTER TABLE `5_quienes_somos_clientes` DISABLE KEYS */;
INSERT INTO `5_quienes_somos_clientes` VALUES (1,1,1,'Aptra.jpg','Aptra');
INSERT INTO `5_quienes_somos_clientes` VALUES (2,1,2,'Furman.jpg','Furman');
INSERT INTO `5_quienes_somos_clientes` VALUES (3,1,3,'Ysonut.jpg','Ysonut');
INSERT INTO `5_quienes_somos_clientes` VALUES (4,1,4,'TCMax.jpg','TCMax');
INSERT INTO `5_quienes_somos_clientes` VALUES (5,1,5,'Kopelco.jpg','Kopelco');
INSERT INTO `5_quienes_somos_clientes` VALUES (6,1,6,'Dullyll.jpg','Dullyll');
INSERT INTO `5_quienes_somos_clientes` VALUES (7,1,7,'Brothers-Viajes.jpg','Brothers Viajes');
INSERT INTO `5_quienes_somos_clientes` VALUES (8,1,8,'MP-Inmuebles.jpg','MP Inmuebles');
INSERT INTO `5_quienes_somos_clientes` VALUES (9,1,9,'Don-Gaspar.jpg','Distrib. Don Gaspar');
INSERT INTO `5_quienes_somos_clientes` VALUES (10,1,10,'El-Tanque-Cultural.jpg','El Tanque Cultural');
INSERT INTO `5_quienes_somos_clientes` VALUES (14,1,11,'1697064851966.jpg','Frantina');
INSERT INTO `5_quienes_somos_clientes` VALUES (15,1,12,'1697064888419.png','Enrique Lozano');
INSERT INTO `5_quienes_somos_clientes` VALUES (16,1,13,'1697067723766.jpg','Franklin Education');
INSERT INTO `5_quienes_somos_clientes` VALUES (18,1,14,'1697067800429.jpg','Felices Pastas');
INSERT INTO `5_quienes_somos_clientes` VALUES (20,1,15,'1697068564276.jpg',NULL);
/*!40000 ALTER TABLE `5_quienes_somos_clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `5_quienes_somos_datos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `5_quienes_somos_datos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `contenido` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `5_quienes_somos_datos`
--

LOCK TABLES `5_quienes_somos_datos` WRITE;
/*!40000 ALTER TABLE `5_quienes_somos_datos` DISABLE KEYS */;
INSERT INTO `5_quienes_somos_datos` VALUES (1,1,1,'Arq. José R. Costas');
INSERT INTO `5_quienes_somos_datos` VALUES (2,1,2,'Soy un arquitecto con 25 años de experiencia en el ejercicio de la profesión en la cual desarrollo proyectos y obras de diferentes escalas.');
INSERT INTO `5_quienes_somos_datos` VALUES (3,1,3,'Cuento con una importante experiencia en ampliaciones y remodelaciones, como así también en habilitaciones comerciales de locales, empresas e industrias.');
INSERT INTO `5_quienes_somos_datos` VALUES (4,1,4,'Lidero un equipo de trabajo conformado por especialistas de diferentes rubros de obra.');
INSERT INTO `5_quienes_somos_datos` VALUES (5,1,5,'Nuestro objetivo es brindar un servicio profesional a nuestros clientes, con seriedad, honestidad y eficiencia.');
INSERT INTO `5_quienes_somos_datos` VALUES (6,2,1,'Ficha personal en el CPAU');
INSERT INTO `5_quienes_somos_datos` VALUES (7,3,1,'Nuestros Clientes');
/*!40000 ALTER TABLE `5_quienes_somos_datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `6_contactanos_datos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `6_contactanos_datos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grupo` int(10) unsigned NOT NULL,
  `orden` int(10) unsigned NOT NULL,
  `contenido` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `6_contactanos_datos`
--

LOCK TABLES `6_contactanos_datos` WRITE;
/*!40000 ALTER TABLE `6_contactanos_datos` DISABLE KEYS */;
INSERT INTO `6_contactanos_datos` VALUES (1,1,1,'Arq. José Ricardo Costas');
INSERT INTO `6_contactanos_datos` VALUES (2,2,1,'Mat. CPAU 28.861');
INSERT INTO `6_contactanos_datos` VALUES (3,2,2,'Celular: (11) 5462 2786');
INSERT INTO `6_contactanos_datos` VALUES (4,2,3,'Mail: josericardocostas@hotmail.com');
/*!40000 ALTER TABLE `6_contactanos_datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'Amarillo oscuro','#F1C757');
INSERT INTO `colores` VALUES (2,'Gris claro','#F2F2F2');
INSERT INTO `colores` VALUES (3,'Gris oscuro','#828383');
INSERT INTO `colores` VALUES (4,'Gris oscuro +','#767171');
INSERT INTO `colores` VALUES (5,'Blanco','#FFFFFF');
INSERT INTO `colores` VALUES (6,'Transparente','transparent');
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_varias`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_varias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `texto` varchar(50) NOT NULL,
  `archivo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `archivo` (`archivo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_varias`
--

LOCK TABLES `imagenes_varias` WRITE;
/*!40000 ALTER TABLE `imagenes_varias` DISABLE KEYS */;
INSERT INTO `imagenes_varias` VALUES (1,'Calle Florida','1764083971924.jpg');
INSERT INTO `imagenes_varias` VALUES (2,'Arquitectura','Arquitectura.jpg');
INSERT INTO `imagenes_varias` VALUES (3,'Avatar','Avatar.jpg');
/*!40000 ALTER TABLE `imagenes_varias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'c19353_josecos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-26 10:12:34
