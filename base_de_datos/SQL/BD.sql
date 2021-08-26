DROP DATABASE IF EXISTS jose_costas;
CREATE DATABASE jose_costas;
USE jose_costas;

CREATE TABLE colores (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(20) NOT NULL UNIQUE,
	color VARCHAR(20) NOT NULL UNIQUE,
	PRIMARY KEY (id)	
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO colores (nombre, color)
VALUES 
	('Amarillo oscuro', '#F1C757'), 
	('Gris claro', 'RGB(242,242,242)'), 
	('Gris oscuro', '#828383'), 
	('Gris oscuro +', 'RGB(118, 113, 113)'),  
	('Blanco', 'white'), 
	('Transparente', 'transparent') 
	;

CREATE TABLE imagenes_varias (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	lugar VARCHAR(50) NOT NULL,
	nombre VARCHAR(50) NOT NULL,	
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO imagenes_varias (lugar, nombre)
VALUES 
	('Calle Florida', 'Calle Florida.jpg'),
	('Arquitectura', 'Arquitectura.jpg'), 
	('Avatar', 'Avatar.jpg')
	;

CREATE TABLE 0_encabezado_y_footer (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	orden INT UNSIGNED NOT NULL,
	color_fondo_id INT UNSIGNED NOT NULL,
	color_letras_id INT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (color_fondo_id) REFERENCES colores(id),
	FOREIGN KEY (color_letras_id) REFERENCES colores(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 0_encabezado_y_footer (orden, color_fondo_id, color_letras_id)
VALUES (1, 4, 2), (2, 4, 2);

CREATE TABLE 0_titulos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	orden INT UNSIGNED NOT NULL,
	nombre_seccion VARCHAR(20) NOT NULL,
	nombre_a_mostrar VARCHAR(20) NOT NULL,
	titulo_seccion VARCHAR(50) NOT NULL,
	color_fondo_id INT UNSIGNED NOT NULL,
	color_letras_id INT UNSIGNED NOT NULL,
	imagen_id INT UNSIGNED NULL,
	editar_texto BOOLEAN NOT NULL,
	editar_imagenes BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (color_fondo_id) REFERENCES colores(id),
	FOREIGN KEY (color_letras_id) REFERENCES colores(id),
	FOREIGN KEY (imagen_id) REFERENCES imagenes_varias(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 0_titulos (nombre_seccion, orden, nombre_a_mostrar, titulo_seccion, color_fondo_id, color_letras_id, imagen_id, editar_texto, editar_imagenes)
VALUES 
	('inicio', 1, 'Inicio', 'Estudio de Arquitectura - CABA', 1, 4, null, 1, 1), 
	('habilitaciones', 2, 'Habilitaciones', 'Habilitaciones Comerciales', 3, 5, 1, 1, 0), 
	('proyectos', 3, 'Proyectos y Obras', 'Proyectos y Obras', 1, 4, null, 1, 1),
	('servicios', 4, 'Otros Servicios', 'Otros Servicios', 3, 5, 2, 1, 0),
	('quienes_somos', 5, 'Quiénes Somos', 'Quiénes Somos', 1, 4, 3, 1, 0),
	('contactanos', 6, 'Contactanos', 'Contactanos', 3, 5, null, 1, 0)
	;

CREATE TABLE 1_inicio_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	grupo INT UNSIGNED NOT NULL,
	orden INT UNSIGNED NOT NULL,
	contenido VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 1_inicio_datos (grupo, orden, contenido)
VALUES 
	(1, 1, 'Proyectos y Obras nuevas'),
	(1, 2, 'Remodelaciones'),
	(1, 3, 'Habilitaciones Comerciales'),
	(2, 1, 'Arq. José Ricardo Costas'),
	(2, 2, 'Mat. CPAU 28.861'),
	(2, 3, 'Celular: (11) 5462 2786'),
	(2, 4, 'josericardocostas@hotmail.com')
	;

CREATE TABLE 1_inicio_imagenes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	orden INT UNSIGNED NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 1_inicio_imagenes (orden, nombre)
VALUES (1, 'Buenos Aires.jpg'), (2, 'Instituto.jpg'), (3, 'Teatro Aptra.jpg'), (4, 'Cocina.jpg')
;

CREATE TABLE 2_habilitaciones_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	grupo INT UNSIGNED NOT NULL,
	orden INT UNSIGNED NOT NULL,
	contenido VARCHAR(200) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 2_habilitaciones_datos (grupo, orden, contenido)
VALUES 
	(1, 1, 'Tenemos una dilatada experiencia en sus diferentes tipos y complejidades.'),
	(1, 2, 'Nuestro servicio profesional garantiza su aprobación, en los tipos de actividades que distingue la normativa de la Ciudad de Buenos Aires.'),
	(2, 1, 'Comercios Minoristas y/o Mayoristas'),
	(2, 2, 'Indumentaria, alimentos, electrodomésticos, etc...'),
	(3, 1, 'Servicios y Espectáculos'),
	(3, 2, 'Oficinas, peluquerías, agencias, salones de fiestas, centros culturales.'),
	(4, 1, 'Especiales'),
	(4, 2, 'Institutos de enseñanza, consultorios.'),
	(5, 1, 'Industrias y Depósitos'),
	(5, 2, '')
	;

CREATE TABLE 3_proyectos_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	orden INT UNSIGNED NOT NULL,
	nombre_a_mostrar VARCHAR(50) NOT NULL,
	color_fondo_id INT UNSIGNED NOT NULL,
	color_letras_id INT UNSIGNED NOT NULL,
	color_borde_id INT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (color_fondo_id) REFERENCES colores(id),
	FOREIGN KEY (color_letras_id) REFERENCES colores(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 3_proyectos_datos (orden, nombre_a_mostrar, color_fondo_id, color_letras_id, color_borde_id)
VALUES 
	(1, 'Integral de Edificios', 6, 4, 4), 
	(2, 'Mediana Escala', 6, 4, 4), 
	(3, 'Menor Escala', 6, 4, 4)
	;

CREATE TABLE 3_proyectos_imagenes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	proyecto_id INT UNSIGNED NOT NULL,
	orden INT UNSIGNED NOT NULL,
	nombre VARCHAR(50) NOT NULL UNIQUE,
	texto VARCHAR(50) NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (proyecto_id) REFERENCES 3_proyectos_datos(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 3_proyectos_imagenes (proyecto_id, orden, nombre, texto)
VALUES 
	(1, 1, '1-Gran escala 1.jpg', 'Antes de remodelar'), 
	(1, 2, '1-Gran escala 2.jpg', ''),
	(1, 3, '1-Gran escala 3.jpg', ''),
	(2, 1, '2-Mediana escala 1.jpg', 'Antes de remodelar'), 
	(2, 2, '2-Mediana escala 2.jpg', ''), 
	(2, 3, '2-Mediana escala 3.jpg', ''), 
	(3, 1, '3-Menor escala 1.jpg', 'Antes de remodelar'),
	(3, 2, '3-Menor escala 2.jpg', ''),
	(3, 3, '3-Menor escala 3.jpg', '')
	;

CREATE TABLE 4_servicios_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	grupo INT UNSIGNED NOT NULL,
	orden INT UNSIGNED NOT NULL,
	contenido VARCHAR(200) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 4_servicios_datos (grupo, orden, contenido)
VALUES 
	(1, 1, 'Habilitación de carteles comerciales'),
	(1, 2, ''),
	(2, 1, 'Obtención de certificado de conservación de fachadas'),
	(2, 2, 'según ley 6116 (ex 257)'),
	(3, 1, 'Asesoramiento en Seguridad e Higiene en la construcción'),
	(3, 2, '')
	;

CREATE TABLE 5_quienes_somos_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	grupo INT UNSIGNED NOT NULL,
	orden INT UNSIGNED NOT NULL,
	contenido VARCHAR(200) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 5_quienes_somos_datos (grupo, orden, contenido)
VALUES 
	(1, 1, 'Arq. José R. Costas'),
	(1, 2, 'Nuestros Clientes'),
	(2, 1, 'Soy un arquitecto con 25 años de experiencia en el ejercicio de la profesión en la cual desarrollo proyectos y obras de diferentes escalas.'),
	(2, 2, 'Cuento con una importante experiencia en ampliaciones y remodelaciones, como así también en habilitaciones comerciales de locales, empresas e industrias.'),
	(2, 3, 'Lidero un equipo de trabajo conformado por especialistas de diferentes rubros de obra.'),
	(2, 4, 'Nuestro objetivo es brindar un servicio profesional a nuestros clientes, con seriedad, honestidad y eficiencia.')
	;

CREATE TABLE 5_quienes_somos_clientes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	orden INT UNSIGNED NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	imagen VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 5_quienes_somos_clientes (orden, nombre, imagen)
VALUES 
	(1, 'Aptra', 'Aptra.jpg'), 
	(2, 'Furman', 'Furman.jpg'), 
	(3, 'Ysonut', 'Ysonut.jpg'), 
	(4, 'TCMax', 'TCMax.jpg'), 
	(5, 'Kopelco', 'Kopelco.jpg'),
	(6, 'Dullyll', 'Dullyll.jpg'),
	(7, 'Brothers Viajes', 'Brothers-Viajes.jpg'),
	(8, 'MP Inmuebles', 'MP-Inmuebles.jpg'),
	(9, 'Distrib. Don Gaspar', 'Don-Gaspar.jpg'),
	(10, 'El Tanque Cultural', 'El-Tanque-Cultural.jpg')
	;

CREATE TABLE 6_contactanos_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	grupo INT UNSIGNED NOT NULL,
	orden INT UNSIGNED NOT NULL,
	contenido VARCHAR(200) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO 6_contactanos_datos (grupo, orden, contenido)
VALUES 
	(1, 1, 'Arq. José Ricardo Costas'),
	(2, 1, 'Mat. CPAU 28.861'),
	(2, 2, 'Celular: (11) 5462 2786'),
	(2, 3, 'Mail: josericardocostas@hotmail.com')
	;
