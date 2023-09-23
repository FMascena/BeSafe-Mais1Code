CREATE TABLE usuario(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	nome VARCHAR(100) NOT NULL, 
	email VARCHAR(70) NOT NULL UNIQUE,
	senha VARCHAR(20) NOT NULL  
);


CREATE TABLE dados climaticos(
	temperatura INTEGER NOT NULL, 
	precipitacao INTEGER NOT NULL, 
	vento INTEGER NOT NULL,
	umidade INTEGER NOT NULL
);


CREATE TABLE alerta de desastre(
	localizacao VARCHAR(30) NOT NULL, 
	dia e hora DATE NOT NULL. 
	gravidade VARCHAR (20) NOT NULL. 
	status VARCHAR(20) NOT NULL. 
	descricao TEXT NOT NULL
);

