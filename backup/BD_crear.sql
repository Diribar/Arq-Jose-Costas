DROP DATABASE IF EXISTS Jose_Costas;
CREATE DATABASE Jose_Costas;
USE Jose_Costas;

create table titulos_encabezado (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	seccion VARCHAR(100) NOT NULL,
	nombre_a_mostrar VARCHAR(100) NOT NULL,
	orden INT UNSIGNED NOT NULL,
	color_fondo VARCHAR(10) NOT NULL,
	color_letras VARCHAR(10) NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table inicio_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	rubro VARCHAR(100) NOT NULL,
	contenido VARCHAR(100) NOT NULL,
	orden INT UNSIGNED NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table inicio_imagenes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	proyecto VARCHAR(100) NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table habilitaciones_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	tipo VARCHAR(100) NOT NULL,
	contenido VARCHAR(100) NOT NULL,
	orden INT UNSIGNED NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table habilitaciones_imagen (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table proyectos_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	contenido VARCHAR(100) NOT NULL,
	orden INT UNSIGNED NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table proyectos_imagenes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	proyecto_id INT UNSIGNED NOT NULL,
	primary key (id),
	FOREIGN KEY (proyecto_id) REFERENCES proyectos_datos(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table servicios_datos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	tipo VARCHAR(100) NOT NULL,
	contenido VARCHAR(100) NOT NULL,
	orden INT UNSIGNED NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table servicios_imagen (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
create table quienes_somos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	tipo VARCHAR(100) NOT NULL,
	contenido VARCHAR(100) NOT NULL,
	orden INT UNSIGNED NOT NULL,
	primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
