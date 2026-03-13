-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 25, 2026 at 02:17 PM
-- Server version: 10.5.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ajc_bd`
--
DROP SCHEMA IF EXISTS `ajc_bd`;
CREATE DATABASE IF NOT EXISTS `ajc_bd` DEFAULT utf8mb4 COLLATE utf8mb4_spanish_ci;
USE `ajc_bd`;

-- --------------------------------------------------------

--
-- Table structure for table `0_encabezado_y_footer`
--

CREATE TABLE `0_encabezado_y_footer` (
  `id` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `nombre_seccion` varchar(20) NOT NULL,
  `nombre_encabezado` varchar(20) NOT NULL,
  `color_fondo_id` int(10) UNSIGNED NOT NULL,
  `color_letras_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `0_encabezado_y_footer`
--

INSERT INTO `0_encabezado_y_footer` (`id`, `orden`, `nombre_seccion`, `nombre_encabezado`, `color_fondo_id`, `color_letras_id`) VALUES
(1, 1, 'encabezado', 'Encabezado', 4, 2),
(2, 2, 'footer', 'Pie de página', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `0_titulos`
--

CREATE TABLE `0_titulos` (
  `id` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `nombre_seccion` varchar(20) NOT NULL,
  `nombre_encabezado` varchar(20) NOT NULL,
  `titulo_seccion` varchar(50) NOT NULL,
  `color_fondo_id` int(10) UNSIGNED NOT NULL,
  `color_letras_id` int(10) UNSIGNED NOT NULL,
  `color_fondo_boton_id` int(10) UNSIGNED DEFAULT NULL,
  `color_letras_boton_id` int(10) UNSIGNED DEFAULT NULL,
  `color_borde_boton_id` int(10) UNSIGNED DEFAULT NULL,
  `imagen_id` int(10) UNSIGNED DEFAULT NULL,
  `editar_texto` tinyint(1) NOT NULL,
  `editar_imagenes` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `0_titulos`
--

INSERT INTO `0_titulos` (`id`, `orden`, `nombre_seccion`, `nombre_encabezado`, `titulo_seccion`, `color_fondo_id`, `color_letras_id`, `color_fondo_boton_id`, `color_letras_boton_id`, `color_borde_boton_id`, `imagen_id`, `editar_texto`, `editar_imagenes`) VALUES
(1, 1, 'inicio', 'Inicio', 'Estudio de Arquitectura - CABA', 1, 4, NULL, NULL, NULL, NULL, 1, 1),
(2, 2, 'habilitaciones', 'Habilitaciones', 'Habilitaciones Comerciales', 3, 5, NULL, NULL, NULL, 1, 1, 0),
(3, 3, 'proyectos', 'Proyectos y Obras', 'Proyectos y Obras', 1, 4, 6, 4, 4, NULL, 1, 1),
(4, 4, 'servicios', 'Otros Servicios', 'Otros Servicios', 3, 5, NULL, NULL, NULL, 2, 1, 0),
(5, 5, 'quienes_somos', 'Quiénes Somos', 'Quiénes Somos', 1, 4, 6, 4, 4, 3, 1, 1),
(6, 6, 'contactanos', 'Contactanos', 'Contactanos', 3, 5, NULL, NULL, NULL, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `1_inicio_datos`
--

CREATE TABLE `1_inicio_datos` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `1_inicio_datos`
--

INSERT INTO `1_inicio_datos` (`id`, `grupo`, `orden`, `contenido`) VALUES
(1, 1, 1, 'Proyectos y Obras Nuevas'),
(2, 1, 2, 'Remodelaciones'),
(3, 1, 3, 'Habilitaciones Comerciales'),
(4, 2, 1, 'Arq. José Ricardo Costas'),
(5, 2, 2, 'Mat. CPAU 28.861'),
(6, 2, 3, 'Celular: (11) 5462 2786'),
(7, 2, 4, 'josericardocostas@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `1_inicio_imagenes`
--

CREATE TABLE `1_inicio_imagenes` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `texto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `1_inicio_imagenes`
--

INSERT INTO `1_inicio_imagenes` (`id`, `grupo`, `orden`, `archivo`, `texto`) VALUES
(1, 1, 1, 'Buenos Aires.jpg', NULL),
(2, 1, 2, 'Instituto.jpg', NULL),
(3, 1, 3, 'Teatro Aptra.jpg', NULL),
(4, 1, 4, 'Cocina.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `2_habilitaciones_datos`
--

CREATE TABLE `2_habilitaciones_datos` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `2_habilitaciones_datos`
--

INSERT INTO `2_habilitaciones_datos` (`id`, `grupo`, `orden`, `contenido`) VALUES
(1, 1, 1, 'Tenemos una amplia experiencia en sus diferentes tipos y complejidades.'),
(2, 1, 2, 'Nuestro servicio profesional garantiza su aprobación, en los tipos de actividades que distingue la normativa de la Ciudad de Buenos Aires.'),
(3, 2, 1, 'Comercios Minoristas y/o Mayoristas'),
(4, 2, 2, 'Indumentaria, alimentos, electrodomésticos, etc...'),
(5, 3, 1, 'Servicios y Espectáculos'),
(6, 3, 2, 'Oficinas, peluquerías, agencias, salones de fiestas, centros culturales.'),
(7, 4, 1, 'Especiales'),
(8, 4, 2, 'Institutos de enseñanza, consultorios.'),
(9, 5, 1, 'Industrias y Depósitos');

-- --------------------------------------------------------

--
-- Table structure for table `3_proyectos_datos`
--

CREATE TABLE `3_proyectos_datos` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `3_proyectos_datos`
--

INSERT INTO `3_proyectos_datos` (`id`, `grupo`, `orden`, `contenido`) VALUES
(1, 1, 1, 'Integral de Edificios'),
(2, 1, 2, 'Mediana Escala'),
(3, 1, 3, 'Menor Escala');

-- --------------------------------------------------------

--
-- Table structure for table `3_proyectos_imagenes`
--

CREATE TABLE `3_proyectos_imagenes` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `texto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `3_proyectos_imagenes`
--

INSERT INTO `3_proyectos_imagenes` (`id`, `grupo`, `orden`, `archivo`, `texto`) VALUES
(1, 1, 1, '1-Gran escala 1.jpg', 'Antes de remodelar'),
(2, 1, 2, '1-Gran escala 2.jpg', ''),
(3, 1, 3, '1-Gran escala 3.jpg', ''),
(4, 2, 1, '2-Mediana escala 1.jpg', 'Antes de remodelar'),
(5, 2, 2, '2-Mediana escala 2.jpg', ''),
(6, 2, 3, '2-Mediana escala 3.jpg', ''),
(7, 3, 1, '3-Menor escala 1.jpg', 'Antes de remodelar'),
(8, 3, 2, '3-Menor escala 2.jpg', ''),
(9, 3, 3, '3-Menor escala 3.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `4_servicios_datos`
--

CREATE TABLE `4_servicios_datos` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `4_servicios_datos`
--

INSERT INTO `4_servicios_datos` (`id`, `grupo`, `orden`, `contenido`) VALUES
(1, 1, 1, 'Habilitación de carteles comerciales'),
(2, 2, 1, 'Obtención de certificado de conservación de fachadas'),
(3, 2, 2, 'según ley 6116 (ex 257)'),
(4, 3, 1, 'Asesoramiento en Seguridad e Higiene en la construcción');

-- --------------------------------------------------------

--
-- Table structure for table `5_quienes_somos_clientes`
--

CREATE TABLE `5_quienes_somos_clientes` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `archivo` varchar(50) NOT NULL,
  `texto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `5_quienes_somos_clientes`
--

INSERT INTO `5_quienes_somos_clientes` (`id`, `grupo`, `orden`, `archivo`, `texto`) VALUES
(1, 1, 1, 'Aptra.jpg', 'Aptra'),
(2, 1, 2, 'Furman.jpg', 'Furman'),
(3, 1, 3, 'Ysonut.jpg', 'Ysonut'),
(4, 1, 4, 'TCMax.jpg', 'TCMax'),
(5, 1, 5, 'Kopelco.jpg', 'Kopelco'),
(6, 1, 6, 'Dullyll.jpg', 'Dullyll'),
(7, 1, 7, 'Brothers-Viajes.jpg', 'Brothers Viajes'),
(8, 1, 8, 'MP-Inmuebles.jpg', 'MP Inmuebles'),
(9, 1, 9, 'Don-Gaspar.jpg', 'Distrib. Don Gaspar'),
(10, 1, 10, 'El-Tanque-Cultural.jpg', 'El Tanque Cultural'),
(14, 1, 11, '1697064851966.jpg', 'Frantina'),
(15, 1, 12, '1697064888419.png', 'Enrique Lozano'),
(16, 1, 13, '1697067723766.jpg', 'Franklin Education'),
(18, 1, 14, '1697067800429.jpg', 'Felices Pastas'),
(20, 1, 15, '1697068564276.jpg', 'Antilope ropa de cuero'),
(21, 1, 16, '1716224091296.png', 'Agencia Viaje Listo'),
(25, 1, 17, '1726153125257.png', 'Sport Services srl'),
(26, 1, 18, '1726153152919.jpg', 'Somos Amor srl'),
(28, 1, 19, '1726153450827.jpg', 'Napoles 75'),
(29, 1, 20, '1726842389379.png', 'Alchemyst ');

-- --------------------------------------------------------

--
-- Table structure for table `5_quienes_somos_datos`
--

CREATE TABLE `5_quienes_somos_datos` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `5_quienes_somos_datos`
--

INSERT INTO `5_quienes_somos_datos` (`id`, `grupo`, `orden`, `contenido`) VALUES
(1, 1, 1, 'Arq. José R. Costas'),
(2, 1, 2, 'Soy un arquitecto con 25 años de experiencia en el ejercicio de la profesión en la cual desarrollo proyectos y obras de diferentes escalas.'),
(3, 1, 3, 'Cuento con una importante experiencia en ampliaciones y remodelaciones, como así también en habilitaciones comerciales de locales, empresas e industrias.'),
(4, 1, 4, 'Lidero un equipo de trabajo conformado por especialistas de diferentes rubros de obra.'),
(5, 1, 5, 'Nuestro objetivo es brindar un servicio profesional a nuestros clientes, con seriedad, honestidad y eficiencia.'),
(6, 2, 1, 'Ficha personal en el CPAU'),
(7, 3, 1, 'Nuestros Clientes');

-- --------------------------------------------------------

--
-- Table structure for table `6_contactanos_datos`
--

CREATE TABLE `6_contactanos_datos` (
  `id` int(10) UNSIGNED NOT NULL,
  `grupo` int(10) UNSIGNED NOT NULL,
  `orden` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `6_contactanos_datos`
--

INSERT INTO `6_contactanos_datos` (`id`, `grupo`, `orden`, `contenido`) VALUES
(1, 1, 1, 'Arq. José Ricardo Costas'),
(2, 2, 1, 'Mat. CPAU 28.861'),
(3, 2, 2, 'Celular: (11) 5462 2786'),
(4, 2, 3, 'Mail: josericardocostas@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `colores`
--

CREATE TABLE `colores` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `codigo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colores`
--

INSERT INTO `colores` (`id`, `nombre`, `codigo`) VALUES
(1, 'Amarillo oscuro', '#F1C757'),
(2, 'Gris claro', '#F2F2F2'),
(3, 'Gris oscuro', '#828383'),
(4, 'Gris oscuro +', '#767171'),
(5, 'Blanco', '#FFFFFF'),
(6, 'Transparente', 'transparent');

-- --------------------------------------------------------

--
-- Table structure for table `imagenes_varias`
--

CREATE TABLE `imagenes_varias` (
  `id` int(10) UNSIGNED NOT NULL,
  `texto` varchar(50) NOT NULL,
  `archivo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `imagenes_varias`
--

INSERT INTO `imagenes_varias` (`id`, `texto`, `archivo`) VALUES
(1, 'Calle Florida', 'Calle Florida.jpg'),
(2, 'Arquitectura', 'Arquitectura.jpg'),
(3, 'Avatar', 'Avatar.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `0_encabezado_y_footer`
--
ALTER TABLE `0_encabezado_y_footer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre_seccion` (`nombre_seccion`),
  ADD KEY `color_fondo_id` (`color_fondo_id`),
  ADD KEY `color_letras_id` (`color_letras_id`);

--
-- Indexes for table `0_titulos`
--
ALTER TABLE `0_titulos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_fondo_id` (`color_fondo_id`),
  ADD KEY `color_letras_id` (`color_letras_id`),
  ADD KEY `color_fondo_boton_id` (`color_fondo_boton_id`),
  ADD KEY `color_letras_boton_id` (`color_letras_boton_id`),
  ADD KEY `color_borde_boton_id` (`color_borde_boton_id`),
  ADD KEY `imagen_id` (`imagen_id`);

--
-- Indexes for table `1_inicio_datos`
--
ALTER TABLE `1_inicio_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `1_inicio_imagenes`
--
ALTER TABLE `1_inicio_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `archivo` (`archivo`);

--
-- Indexes for table `2_habilitaciones_datos`
--
ALTER TABLE `2_habilitaciones_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `3_proyectos_datos`
--
ALTER TABLE `3_proyectos_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `3_proyectos_imagenes`
--
ALTER TABLE `3_proyectos_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `archivo` (`archivo`),
  ADD KEY `grupo` (`grupo`);

--
-- Indexes for table `4_servicios_datos`
--
ALTER TABLE `4_servicios_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `5_quienes_somos_clientes`
--
ALTER TABLE `5_quienes_somos_clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `archivo` (`archivo`);

--
-- Indexes for table `5_quienes_somos_datos`
--
ALTER TABLE `5_quienes_somos_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `6_contactanos_datos`
--
ALTER TABLE `6_contactanos_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Indexes for table `imagenes_varias`
--
ALTER TABLE `imagenes_varias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `archivo` (`archivo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `0_encabezado_y_footer`
--
ALTER TABLE `0_encabezado_y_footer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `0_titulos`
--
ALTER TABLE `0_titulos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `1_inicio_datos`
--
ALTER TABLE `1_inicio_datos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `1_inicio_imagenes`
--
ALTER TABLE `1_inicio_imagenes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `2_habilitaciones_datos`
--
ALTER TABLE `2_habilitaciones_datos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `3_proyectos_datos`
--
ALTER TABLE `3_proyectos_datos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `3_proyectos_imagenes`
--
ALTER TABLE `3_proyectos_imagenes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `4_servicios_datos`
--
ALTER TABLE `4_servicios_datos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `5_quienes_somos_clientes`
--
ALTER TABLE `5_quienes_somos_clientes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `5_quienes_somos_datos`
--
ALTER TABLE `5_quienes_somos_datos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `6_contactanos_datos`
--
ALTER TABLE `6_contactanos_datos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imagenes_varias`
--
ALTER TABLE `imagenes_varias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `0_encabezado_y_footer`
--
ALTER TABLE `0_encabezado_y_footer`
  ADD CONSTRAINT `0_encabezado_y_footer_ibfk_1` FOREIGN KEY (`color_fondo_id`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `0_encabezado_y_footer_ibfk_2` FOREIGN KEY (`color_letras_id`) REFERENCES `colores` (`id`);

--
-- Constraints for table `0_titulos`
--
ALTER TABLE `0_titulos`
  ADD CONSTRAINT `0_titulos_ibfk_1` FOREIGN KEY (`color_fondo_id`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `0_titulos_ibfk_2` FOREIGN KEY (`color_letras_id`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `0_titulos_ibfk_3` FOREIGN KEY (`color_fondo_boton_id`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `0_titulos_ibfk_4` FOREIGN KEY (`color_letras_boton_id`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `0_titulos_ibfk_5` FOREIGN KEY (`color_borde_boton_id`) REFERENCES `colores` (`id`),
  ADD CONSTRAINT `0_titulos_ibfk_6` FOREIGN KEY (`imagen_id`) REFERENCES `imagenes_varias` (`id`);

--
-- Constraints for table `3_proyectos_imagenes`
--
ALTER TABLE `3_proyectos_imagenes`
  ADD CONSTRAINT `3_proyectos_imagenes_ibfk_1` FOREIGN KEY (`grupo`) REFERENCES `3_proyectos_datos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
