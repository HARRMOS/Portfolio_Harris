-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Lun 11 Décembre 2023 à 17:52
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bibliothèque2`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherents`
--

CREATE TABLE IF NOT EXISTS `adherents` (
  `id_adherent` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `date_adhesion` date NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `num_tel` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  PRIMARY KEY (`id_adherent`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `adherents`
--

INSERT INTO `adherents` (`id_adherent`, `nom`, `prenom`, `date_naissance`, `date_adhesion`, `adresse`, `num_tel`, `mail`) VALUES
(1, 'Hiofg', 'Elair', '1998-11-07', '2023-12-02', '2 Rue des dophins', '06 15 45 55 20', 'ropgjpger@gfekg.com'),
(2, 'IGSGROGR', 'Bim', '1998-12-10', '2023-05-09', '2 Rue des flamands roses', '06 48 48 48 48 ', 'ilg,g@gmail.com'),
(3, 'shkflrg', 'Mathieu', '2000-12-08', '2022-12-06', '2 Rue des cong', '06 15 45 55 10', 'gfuhigergr@fiog.com');

-- --------------------------------------------------------

--
-- Structure de la table `auteurs`
--

CREATE TABLE IF NOT EXISTS `auteurs` (
  `id_auteur` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  PRIMARY KEY (`id_auteur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `auteurs`
--

INSERT INTO `auteurs` (`id_auteur`, `nom`, `prenom`, `date_naissance`) VALUES
('The_Boring', 'Hoifjogh', 'Bem', '1977-12-09'),
('The_Dorito', 'Batiste', 'Boum', '2002-12-14'),
('The_Mage', 'Adam', 'Bam', '1998-12-11');

-- --------------------------------------------------------

--
-- Structure de la table `emprunts`
--

CREATE TABLE IF NOT EXISTS `emprunts` (
  `id_emprunt` int(11) NOT NULL AUTO_INCREMENT,
  `date_emprunt` date NOT NULL,
  `duree` int(11) NOT NULL,
  `id_adherent` int(11) NOT NULL,
  `ref_livre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_emprunt`),
  KEY `id_adherent` (`id_adherent`,`ref_livre`),
  KEY `ref_livre` (`ref_livre`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `emprunts`
--

INSERT INTO `emprunts` (`id_emprunt`, `date_emprunt`, `duree`, `id_adherent`, `ref_livre`) VALUES
(1, '2023-12-08', 25, 1, 'A1'),
(2, '2023-12-02', 10, 2, 'A2'),
(3, '2023-12-05', 14, 3, 'A3');

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

CREATE TABLE IF NOT EXISTS `livres` (
  `ref_livre` varchar(50) NOT NULL,
  `Titre_livre` varchar(50) NOT NULL,
  `nbre_pages` int(11) NOT NULL,
  `id_auteur` varchar(50) NOT NULL,
  `date_publication` date NOT NULL,
  `genre` varchar(50) NOT NULL,
  `disponibilité` tinyint(1) NOT NULL,
  `nbre_emprunts` int(11) NOT NULL,
  `etat` varchar(50) NOT NULL,
  `nbre_exemplaires` int(11) NOT NULL,
  PRIMARY KEY (`ref_livre`),
  KEY `id_auteur` (`id_auteur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `livres`
--

INSERT INTO `livres` (`ref_livre`, `Titre_livre`, `nbre_pages`, `id_auteur`, `date_publication`, `genre`, `disponibilité`, `nbre_emprunts`, `etat`, `nbre_exemplaires`) VALUES
('A1', 'Réseau informatique', 200, 'The_Mage', '1998-12-10', 'Action', 1, 0, 'neuf', 4),
('A2', '', 600, 'The_Dorito', '2022-03-16', 'Romance', 0, 2, 'bon', 2),
('A3', '', 500, 'The_Boring', '1998-12-10', 'Action , Fantasy , ', 1, 1, 'neuf', 2);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `emprunts`
--
ALTER TABLE `emprunts`
  ADD CONSTRAINT `emprunts_ibfk_2` FOREIGN KEY (`id_adherent`) REFERENCES `adherents` (`id_adherent`),
  ADD CONSTRAINT `emprunts_ibfk_1` FOREIGN KEY (`ref_livre`) REFERENCES `livres` (`ref_livre`);

--
-- Contraintes pour la table `livres`
--
ALTER TABLE `livres`
  ADD CONSTRAINT `livres_ibfk_1` FOREIGN KEY (`id_auteur`) REFERENCES `auteurs` (`id_auteur`);
