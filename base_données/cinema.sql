-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Lun 20 Novembre 2023 à 17:33
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `Cinema`
--

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

CREATE TABLE IF NOT EXISTS `artiste` (
  `idRealisateur` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `anneeNaiss` int(11) NOT NULL,
  PRIMARY KEY (`idRealisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `artiste`
--

INSERT INTO `artiste` (`idRealisateur`, `nom`, `prenom`, `anneeNaiss`) VALUES
('10', 'jerom', 'A', 1995),
('20', 'david', 'M', 2000);

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `idFilm` varchar(50) NOT NULL,
  `Titre` varchar(50) NOT NULL,
  `année` int(11) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `resume` varchar(100) NOT NULL,
  `idRealisateur` varchar(50) NOT NULL,
  `codePays` varchar(50) NOT NULL,
  PRIMARY KEY (`idFilm`),
  KEY `idRealisateur` (`idRealisateur`),
  KEY `codePays` (`codePays`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`idFilm`, `Titre`, `année`, `genre`, `resume`, `idRealisateur`, `codePays`) VALUES
('14', 'harry', 2000, 'fiction', 'v', '10', 'fr'),
('17', 'hgfz', 2005, 'fiction', '', '20', 'en');

-- --------------------------------------------------------

--
-- Structure de la table `internaute`
--

CREATE TABLE IF NOT EXISTS `internaute` (
  `email` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `internaute`
--

INSERT INTO `internaute` (`email`, `nom`, `prenom`, `region`) VALUES
('david@gmail.com', 'david', 'A', 'fr'),
('lucas@gmail.com', 'lucas', 'A', 'fr');

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

CREATE TABLE IF NOT EXISTS `notation` (
  `id_Notation` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `idFilm` varchar(50) NOT NULL,
  `note` int(11) NOT NULL,
  PRIMARY KEY (`id_Notation`),
  KEY `idFilm` (`idFilm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `notation`
--

INSERT INTO `notation` (`id_Notation`, `email`, `idFilm`, `note`) VALUES
('1', 'david@gmail.com', '17', 15),
('2', 'lucas@gmail.com', '14', 18);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `code_pays` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `langue` varchar(50) NOT NULL,
  PRIMARY KEY (`code_pays`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`code_pays`, `nom`, `langue`) VALUES
('en', 'jerom', 'fr'),
('fr', 'david', 'fr');

-- --------------------------------------------------------

--
-- Structure de la table `rôle`
--

CREATE TABLE IF NOT EXISTS `rôle` (
  `id_Rôle` varchar(50) NOT NULL,
  `idFilm` varchar(50) NOT NULL,
  `idRealisateur` varchar(50) NOT NULL,
  `nomRôle` varchar(50) NOT NULL,
  PRIMARY KEY (`id_Rôle`),
  KEY `idFilm` (`idFilm`),
  KEY `idRealisateur` (`idRealisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rôle`
--

INSERT INTO `rôle` (`id_Rôle`, `idFilm`, `idRealisateur`, `nomRôle`) VALUES
('32', '17', '20', 'azert'),
('91', '14', '10', 'fezfe');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `film`
--
ALTER TABLE `film`
  ADD CONSTRAINT `film_ibfk_1` FOREIGN KEY (`idRealisateur`) REFERENCES `artiste` (`idRealisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notation`
--
ALTER TABLE `notation`
  ADD CONSTRAINT `notation_ibfk_1` FOREIGN KEY (`idFilm`) REFERENCES `rôle` (`idFilm`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `pays`
--
ALTER TABLE `pays`
  ADD CONSTRAINT `pays_ibfk_1` FOREIGN KEY (`code_pays`) REFERENCES `film` (`codePays`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `rôle`
--
ALTER TABLE `rôle`
  ADD CONSTRAINT `r@1gle_ibfk_2` FOREIGN KEY (`idRealisateur`) REFERENCES `film` (`idRealisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `r@1gle_ibfk_1` FOREIGN KEY (`idFilm`) REFERENCES `film` (`idFilm`) ON DELETE CASCADE ON UPDATE CASCADE;
