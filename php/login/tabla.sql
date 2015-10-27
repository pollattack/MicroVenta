-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Servidor: localhost
-- Tiempo de generación: 22-11-2011 a las 16:33:39
-- Versión del servidor: 5.0.51
-- Versión de PHP: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Base de datos: `tutoriales`
-- 

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `tutorial1_usuarios`
-- 

CREATE TABLE `tutorial1_usuarios` (
  `uid` int(11) NOT NULL auto_increment,
  `user` varchar(20) NOT NULL,
  `pass` varchar(40) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `ip` varchar(15) NOT NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Volcar la base de datos para la tabla `tutorial1_usuarios`
-- 

