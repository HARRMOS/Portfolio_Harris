-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Lun 20 Novembre 2023 à 16:25
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `location_voiture`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `nCIN` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `adresse` varchar(50) NOT NULL,
  PRIMARY KEY (`nCIN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`nCIN`, `nom`, `prenom`, `date_naissance`, `adresse`) VALUES
(12, 'jerom', 'M', '2002-02-02', '12 rue  Php'),
(13, 'david', 'A', '2003-03-03', '20 rue Php');

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `num_location` int(11) NOT NULL,
  `date_location` date NOT NULL,
  `caution` varchar(50) NOT NULL,
  `prix_location` int(11) NOT NULL,
  `kilomatrage_max` int(11) NOT NULL,
  `CodeClient` int(11) NOT NULL,
  `immatriculation` varchar(50) NOT NULL,
  PRIMARY KEY (`num_location`),
  KEY `CodeClient` (`CodeClient`),
  KEY `immatriculation` (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `location`
--


-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

CREATE TABLE IF NOT EXISTS `voiture` (
  `immatriculation` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `prix_d'achat` int(11) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `nbre_de_porte` int(11) NOT NULL,
  `carburant` varchar(50) NOT NULL,
  `killometrage_max` int(11) NOT NULL,
  `boite_de_vitesse` varchar(50) NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `voiture`
--

INSERT INTO `voiture` (`immatriculation`, `model`, `prix_d'achat`, `marque`, `couleur`, `nbre_de_porte`, `carburant`, `killometrage_max`, `boite_de_vitesse`) VALUES
('12 TU 2000', 'AMG', 200000, 'Mercedes', 'Noir', 5, 'essence', 20000, 'auto'),
('16 RR 3000', 'Megan', 300000, 'Renault', 'Blanc', 5, 'diesel', 30000, 'auto');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_2` FOREIGN KEY (`immatriculation`) REFERENCES `voiture` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`CodeClient`) REFERENCES `client` (`nCIN`) ON DELETE CASCADE ON UPDATE CASCADE;
