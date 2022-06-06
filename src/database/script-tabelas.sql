-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database dunknews;
use dunknews;

create table usuario 
(id_usuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
cep char(9),
bairro varchar(45),
cidade varchar(45),
rua varchar(45),
senha varchar(45));

create table votacao
(id_votacao int auto_increment,
time_fav char(20),
dunk char(18),
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
primary key(id_votacao, fk_usuario));

create table video 
(id_video int auto_increment,
link varchar(200),
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
primary key(id_video, fk_usuario));