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
(default, 'lolagomez@gmail.com','Lolitabonita', '/img/perfil14.jpg','1993-2-21','lolitasabe',27)
(default, 'mmartinez@yahoo.com','Mariaelena88', '/img/perfil5.jpg','1998-8-2','panqueque',23)
(default, 'alejandro.g@gmail.com.ar','Alefernandez', '/img/perfil1.jpg','2003-6-4','orange',18)


insert into posts values
(default,  '/img/mclarenP1.jpg'  'Evento Ginebra 2020' '2020-5-12')
(default, '/img/abtRs7.jpg' ,'Una joya perdida' , '2021-4-6' )
(default, '/img/ferrariLaferrari.jpg', 'Este color es dificil de conseguir, edicion limitada 2020', '2020-6-7')
(default,  '/img/AMG.jpg', 'Este Mercho es una locura', '2021/11/7',)
(default,   '/img/ferrariPista.jpg', 'Ferrari gris',  '2019/02/7', )
(default,    '/img/KoenigseggAgera.jpg', 'foto sacada post duchita', '2021/04/2',)
(default,  '/img/JORGE-GOMEZ-PAGANI.jpg', 'se me va la beba :¬(',  '2020-4-8',)
(default, '/img/Porsche.jpg','Yendo a salta en esta nave', '2020-4-9,)
(default,  '/img/Urus.jpg', 'los detalles combinan con el exterior verdoso del auto', '2020-12-8')
(default,  '/img/Huayra.jpg', 'Recien llegado de italia', '2020-10-17')

