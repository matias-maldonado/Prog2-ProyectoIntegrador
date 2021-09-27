create database redSocial;
use redSocial;

create table users(
id int unsigned primary key auto_increment, 
email varchar (100),
userName varchar (100), 
img varchar (150), 
fecha date,
password varchar (150),
age int 
);
create table posts(
id int unsigned primary key auto_increment, 
img varchar (150), 
fecha date,
descripcion varchar (250),
userId int unsigned, 
foreign key (userId) references users(id)
);
create table comments(
id int unsigned primary key auto_increment, 
fecha date,
comentario varchar (250),
userId int unsigned, 
postId int unsigned,
foreign key (postId) references posts(id),
foreign key (userId) references users(id)
);
insert into users values
(default, 'juan8@gmail.com','juansini', '/img/perfil1.jpg','2020-10-12','milanesa345',20)
(default, 'benito-1@hotmail.com.ar','Beneitor30', '/img/perfil2.jpg','1992-4-13','beni123',30)
