CREATE DATABASE DBLP
USE DBLP
drop database DBLP 

CREATE TABLE TipoUsuario
(
	idTipoUsuario int primary key identity,
	tipoUsuario varchar(30)
);

CREATE TABLE Usuario
(
	numControl int primary key identity, 
	correo varchar(30),
	nombreUsuario varchar(30),
	contrasena varchar(30),
	ConfirmarContrasena varchar(30),
	idTipoUsuario int,
	idTrabajo int,
	
	FOREIGN KEY (idTipoUsuario) REFERENCES TipoUsuario(idTipoUsuario)
);


CREATE TABLE archivo
(
	idArchivo int primary key identity,
	nombreArchivo varchar(30),
	fecha date,	
);

CREATE TABLE ListadoArchivo
(
	idArchivo int primary key identity, 
	numControl int,
	
	FOREIGN KEY (idArchivo) REFERENCES archivo(idArchivo),
	FOREIGN KEY (numControl) REFERENCES Usuario(numControl)
);