drop database if exists estacionamento;
create database estacionamento charset=UTF8 collate UTF8_general_ci;
use estacionamento;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome_cli varchar(30) not null,
    email varchar (100) null,
    data_nasc date null,
    cpf varchar (15) not null,
    bairro varchar(30) not null,
    rua varchar(30) not null,
    cep varchar(30) not null,
    complemento varchar(30) not null,
    municipio varchar(30) not null
);

-- OK
create table funcionarios(
    id_func integer not null primary key auto_increment,
    nome_func varchar(30) not null,
    email varchar (100),
    data_nasc date,
    cpf varchar (15) not null,
    cargo varchar(30) not null,
    bairro varchar(30) not null,
    rua varchar(30) not null,
    cep varchar(30) not null,
    complemento varchar(30),
    municipio varchar(30) not null
);


-- "on delete cascade" para quando eliminar-mos algum cliente, as informações do mesmo também serem excluidas
create table telefonesCli(
    id_cliente integer null,
    telefone varchar(15) not null, 
    foreign key (id_cliente) references clientes(id_cliente) on delete cascade
);

-- OK
create table telefonesFunc(
    id_func integer null,
    telefone varchar(15), 
    foreign key (id_func) references funcionarios(id_func) on delete cascade
);

create table carros(
    id_cliente integer not null,
    id_carro integer not null primary key auto_increment,
    placa varchar(8) not null,
    tipo varchar(15) not null,
    marca varchar(15) not null,
    modelo varchar(30) not null,
    cor varchar(15) not null,
    descricao varchar(50) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table registro(
    id_cliente integer not null,
    id_carro integer not null,
    hora_entrada time not null,
    hora_saida time not null,
    data DATETIME not null,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_carro) references carros(id_carro)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Estacionamento/tralhoEstacionamento/docs/bd/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Estacionamento/tralhoEstacionamento/docs/bd/telefonesCli.csv'
INTO TABLE telefonesCli
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Estacionamento/tralhoEstacionamento/docs/bd/carros.csv'
INTO TABLE carros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Estacionamento/tralhoEstacionamento/docs/bd/funcionarios.csv'
INTO TABLE funcionarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Estacionamento/tralhoEstacionamento/docs/bd/telefonesFunc.csv'
INTO TABLE telefonesFunc
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;
select * from telefonesCli;
select * from carros;
select * from funcionarios;
select * from telefonesFunc;
