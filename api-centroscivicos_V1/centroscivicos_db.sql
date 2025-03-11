-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 11-03-2025 a las 08:45:34
-- Versión del servidor: 10.11.8-MariaDB-0ubuntu0.24.04.1
-- Versión de PHP: 8.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `centroscivicos_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` int(11) NOT NULL,
  `id_centro` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `descripcion` varchar(128) NOT NULL,
  `fecha_inicio` timestamp NOT NULL,
  `fecha_final` timestamp NOT NULL,
  `horario` varchar(128) NOT NULL,
  `plaza` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `id_centro`, `nombre`, `descripcion`, `fecha_inicio`, `fecha_final`, `horario`, `plaza`) VALUES
(22, 1, 'Charla de Desarrollo Personal', 'Conferencia sobre motivación y crecimiento personal en la Sala de Conferencias', '2025-03-10 00:00:00', '2025-03-10 00:00:00', '18:00 - 20:00', 100),
(23, 1, 'Club de Lectura', 'Reunión semanal para discutir libros en la Biblioteca', '2025-03-15 00:00:00', '2025-06-15 00:00:00', '17:00 - 19:00', 30),
(24, 1, 'Clase de Yoga', 'Sesión de yoga y relajación en el Gimnasio', '2025-03-12 00:00:00', '2025-06-12 00:00:00', '08:00 - 09:30', 25),
(25, 1, 'Taller de Danza Moderna', 'Clases de baile en el Salón de Danza', '2025-03-14 00:00:00', '2025-06-14 00:00:00', '19:00 - 20:30', 40),
(26, 1, 'Consulta Médica Gratuita', 'Jornada de chequeos médicos básicos en el Centro de Salud', '2025-03-20 00:00:00', '2025-03-20 00:00:00', '09:00 - 14:00', 50),
(27, 1, 'Curso de Computación Básica', 'Aprendizaje de herramientas digitales en el Taller de Computación', '2025-03-18 00:00:00', '2025-06-18 00:00:00', '16:00 - 18:00', 20),
(28, 1, 'Juegos de Mesa para Adultos Mayores', 'Espacio de recreación con ajedrez y cartas en la Biblioteca', '2025-03-22 00:00:00', '2025-06-22 00:00:00', '10:00 - 12:00', 15),
(29, 2, 'Taller de Manualidades', 'Aprendizaje de técnicas artísticas en el Taller de Manualidades', '2025-03-11 00:00:00', '2025-06-11 00:00:00', '15:00 - 17:00', 25),
(30, 2, 'Asesoría Jurídica Gratuita', 'Atención legal en el Centro de Atención Ciudadana', '2025-03-13 00:00:00', '2025-03-13 00:00:00', '10:00 - 13:00', 30),
(31, 2, 'Curso de Informática', 'Formación en herramientas digitales en el Taller de Computación', '2025-03-16 00:00:00', '2025-06-16 00:00:00', '17:00 - 19:00', 20),
(32, 2, 'Fútbol Comunitario', 'Entrenamiento y partidos amistosos en las Canchas Deportivas', '2025-03-19 00:00:00', '2025-06-19 00:00:00', '18:00 - 20:00', 50),
(33, 2, 'Día de Juegos Infantiles', 'Evento especial para niños en el Área de Juegos Infantiles', '2025-03-21 00:00:00', '2025-03-21 00:00:00', '10:00 - 13:00', 40),
(34, 2, 'Jornada de Huerto Urbano', 'Taller sobre agricultura urbana en el Huerto Comunitario', '2025-03-25 00:00:00', '2025-03-25 00:00:00', '09:00 - 12:00', 35),
(35, 2, 'Cine al Aire Libre', 'Proyección de películas en el Área Verde', '2025-03-27 00:00:00', '2025-03-27 00:00:00', '20:00 - 22:00', 60),
(36, 3, 'Ciclo de Conferencias', 'Charlas sobre diferentes temas en el Auditorio', '2025-03-12 00:00:00', '2025-06-12 00:00:00', '19:00 - 21:00', 150),
(37, 3, 'Curso de Pintura', 'Aprendizaje de técnicas artísticas en el Taller de Manualidades', '2025-03-14 00:00:00', '2025-06-14 00:00:00', '16:00 - 18:00', 30),
(38, 3, 'Cata de Café', 'Evento especial en la Cafetería', '2025-03-18 00:00:00', '2025-03-18 00:00:00', '10:00 - 12:00', 20),
(39, 3, 'Día de la Naturaleza', 'Actividades al aire libre en el Área Verde', '2025-03-20 00:00:00', '2025-03-20 00:00:00', '09:00 - 12:00', 50),
(40, 3, 'Club de Escritura', 'Reuniones semanales para escribir y compartir textos en la Biblioteca', '2025-03-22 00:00:00', '2025-06-22 00:00:00', '17:00 - 19:00', 25),
(41, 3, 'Taller de Fotografía', 'Curso introductorio en el Auditorio', '2025-03-25 00:00:00', '2025-06-25 00:00:00', '18:00 - 20:00', 40),
(42, 3, 'Muestra de Cine Documental', 'Proyección de documentales en el Auditorio', '2025-03-28 00:00:00', '2025-03-28 00:00:00', '19:00 - 21:00', 120);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centros_civicos`
--

CREATE TABLE `centros_civicos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `direccion` varchar(128) NOT NULL,
  `telefono` varchar(32) NOT NULL,
  `horario` varchar(128) NOT NULL,
  `foto` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `centros_civicos`
--

INSERT INTO `centros_civicos` (`id`, `nombre`, `direccion`, `telefono`, `horario`, `foto`) VALUES
(1, 'Centro Cívico Villarrubia', 'Plaza de la Aljarilla 15 Villarrubia (Córdoba) 14710', '957458078', '09:00-20:00', ''),
(2, 'Casa Ciudadana', 'Ronda del Marrubial S/N 14071', '957499947', '08:00-18:00', ''),
(3, '\r\nCentro Cívico Fuensanta', 'C. Arquitecto Sáenz Santamaría, 1, 14010 Córdoba', '957431056', '10:00-22:00', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripciones`
--

CREATE TABLE `inscripciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `telefono` varchar(32) NOT NULL,
  `correo` varchar(128) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `fecha_inscripcion` timestamp NOT NULL DEFAULT current_timestamp(),
  `estado` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscripciones`
--

INSERT INTO `inscripciones` (`id`, `nombre`, `telefono`, `correo`, `id_actividad`, `fecha_inscripcion`, `estado`) VALUES
(6, 'Barfemusu@gmail.com', '123', 'Barfemusu@gmail.com', 30, '2025-02-27 20:06:49', 'pendiente'),
(9, 'infantil', '99999', 'Barfemusu@gmail.com', 28, '2025-03-14 19:11:00', 'pendiente'),
(10, 'Maricarmen', '99999', 'Barfemusu@gmail.com', 22, '2025-03-22 12:52:00', 'pendiente'),
(13, 'Jesús Ferrer', '4632', 'Barfemusu@gmail.com', 31, '2025-03-21 19:00:00', 'pendiente'),
(14, 'Lorena', '61235612123', 'barfemusu@gmail.com', 25, '2025-03-11 08:35:00', 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instalaciones`
--

CREATE TABLE `instalaciones` (
  `id` int(11) NOT NULL,
  `id_centro` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `descripcion` varchar(256) NOT NULL,
  `capacidad_maxima` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `instalaciones`
--

INSERT INTO `instalaciones` (`id`, `id_centro`, `nombre`, `descripcion`, `capacidad_maxima`) VALUES
(1, 1, 'Sala de Conferencias', 'Espacio equipado con proyector y sistema de sonido para eventos y reuniones', 100),
(2, 1, 'Biblioteca', 'Área con libros y computadoras para consulta y estudio', 50),
(3, 1, 'Gimnasio', 'Espacio con equipo de ejercicio y clases de acondicionamiento físico', 80),
(4, 2, 'Salón de Usos Múltiples', 'Salón adaptable para talleres, clases y actividades comunitarias', 120),
(5, 2, 'Centro de Atención Ciudadana', 'Oficinas para trámites y asesoría legal', 30),
(6, 2, 'Área de Juegos Infantiles', 'Zona recreativa con juegos para niños', 40),
(7, 3, 'Auditorio', 'Espacio grande para conferencias y presentaciones', 200),
(8, 3, 'Taller de Manualidades', 'Aula equipada para actividades artísticas y creativas', 35),
(9, 3, 'Cafetería', 'Zona de convivencia con servicio de comida y bebidas', 60),
(10, 3, 'Área Verde', 'Jardín comunitario con bancas y espacios para relajación', 50),
(11, 1, 'Salón de Danza', 'Sala con espejos y piso especial para clases de baile y yoga', 60),
(12, 1, 'Centro de Salud', 'Consultorio para atención médica básica y primeros auxilios', 40),
(13, 2, 'Taller de Computación', 'Sala con equipos para cursos de informática y acceso a internet', 25),
(14, 2, 'Canchas Deportivas', 'Espacio al aire libre para fútbol y baloncesto', 150),
(15, 2, 'Huerto Comunitario', 'Zona para cultivos urbanos y talleres de jardinería', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `telefono` varchar(32) NOT NULL,
  `correo` varchar(128) NOT NULL,
  `id_instalacion` int(11) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_final` datetime NOT NULL,
  `estado` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `nombre`, `telefono`, `correo`, `id_instalacion`, `fecha_inicio`, `fecha_final`, `estado`) VALUES
(11, 'trabs', '4632', 'Barfemusu@gmail.com', 1, '2025-03-01 17:34:00', '2025-03-15 17:35:00', 'pendiente'),
(15, 'tete', '4632', 'Barfemusu@gmail.com', 6, '2025-03-19 19:09:00', '2025-03-27 19:09:00', 'pendiente'),
(18, 'Raúl', '1243123', 'barfemusu@gmail.com', 7, '2025-03-12 08:30:00', '2025-03-20 08:30:00', 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `password`) VALUES
(4, 'usuario', 'test@gmail.com', '123'),
(5, 'Jesús Ferrer', 'barfemusu@gmail.com', '123'),
(8, 'jesus', 'jefeloseneca@gmail.com', '123'),
(9, 'agente1', 'ciruelilla@gmail.com', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `centros_civicos`
--
ALTER TABLE `centros_civicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_actividad_1` (`id_actividad`);

--
-- Indices de la tabla `instalaciones`
--
ALTER TABLE `instalaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `instalaciones_fk_1` (`id_centro`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_instalacion` (`id_instalacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `centros_civicos`
--
ALTER TABLE `centros_civicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `instalaciones`
--
ALTER TABLE `instalaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD CONSTRAINT `fk_id_actividad_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id`);

--
-- Filtros para la tabla `instalaciones`
--
ALTER TABLE `instalaciones`
  ADD CONSTRAINT `instalaciones_fk_1` FOREIGN KEY (`id_centro`) REFERENCES `centros_civicos` (`id`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `fk_id_instalacion` FOREIGN KEY (`id_instalacion`) REFERENCES `instalaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
