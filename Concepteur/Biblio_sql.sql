ca#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Auteur
#------------------------------------------------------------

CREATE TABLE Auteur(
        CodeAut   Varchar (50) NOT NULL ,
        NomAut    Varchar (50) NOT NULL ,
        PrenomAut Varchar (50) NOT NULL
	,CONSTRAINT Auteur_PK PRIMARY KEY (CodeAut)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Rayon
#------------------------------------------------------------

CREATE TABLE Rayon(
        CodeRayon     Varchar (50) NOT NULL ,
        IntituleRayon Varchar (50) NOT NULL
	,CONSTRAINT Rayon_PK PRIMARY KEY (CodeRayon)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Mot
#------------------------------------------------------------

CREATE TABLE Mot(
        CodeMot Varchar (50) NOT NULL ,
        Mot     Varchar (50) NOT NULL
	,CONSTRAINT Mot_PK PRIMARY KEY (CodeMot)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Ouvrage
#------------------------------------------------------------

CREATE TABLE Ouvrage(
        CodeOuvrage  Varchar (50) NOT NULL ,
        TitreOuvrage Varchar (50) NOT NULL ,
        CodeRayon    Varchar (50) NOT NULL
	,CONSTRAINT Ouvrage_PK PRIMARY KEY (CodeOuvrage)

	,CONSTRAINT Ouvrage_Rayon_FK FOREIGN KEY (CodeRayon) REFERENCES Rayon(CodeRayon)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Adherent
#------------------------------------------------------------

CREATE TABLE Adherent(
        CodeAdh    Varchar (50) NOT NULL ,
        NomAdh     Varchar (50) NOT NULL ,
        PrenomAdh  Varchar (50) NOT NULL ,
        AdresseAdh Varchar (50) NOT NULL
	,CONSTRAINT Adherent_PK PRIMARY KEY (CodeAdh)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Auteur de
#------------------------------------------------------------

CREATE TABLE Auteur_de(
        CodeOuvrage Varchar (50) NOT NULL ,
        CodeAut     Varchar (50) NOT NULL
	,CONSTRAINT Auteur_de_PK PRIMARY KEY (CodeOuvrage,CodeAut)

	,CONSTRAINT Auteur_de_Ouvrage_FK FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
	,CONSTRAINT Auteur_de_Auteur0_FK FOREIGN KEY (CodeAut) REFERENCES Auteur(CodeAut)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Index
#------------------------------------------------------------

CREATE TABLE Index(
        CodeOuvrage Varchar (50) NOT NULL ,
        CodeMot     Varchar (50) NOT NULL
	,CONSTRAINT Index_PK PRIMARY KEY (CodeOuvrage,CodeMot)

	,CONSTRAINT Index_Ouvrage_FK FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
	,CONSTRAINT Index_Mot0_FK FOREIGN KEY (CodeMot) REFERENCES Mot(CodeMot)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Emprent
#------------------------------------------------------------

CREATE TABLE Emprent(
        CodeAdh     Varchar (50) NOT NULL ,
        CodeOuvrage Varchar (50) NOT NULL ,
        DateEmprent Date NOT NULL
	,CONSTRAINT Emprent_PK PRIMARY KEY (CodeAdh,CodeOuvrage)

	,CONSTRAINT Emprent_Adherent_FK FOREIGN KEY (CodeAdh) REFERENCES Adherent(CodeAdh)
	,CONSTRAINT Emprent_Ouvrage0_FK FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
)ENGINE=InnoDB;

