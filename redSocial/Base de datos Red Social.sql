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
descripcion varchar (250),
fecha date,
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
(default, 'juan8@gmail.com','juansini', '/img/perfil1.jpg','2020-10-12','milanesa345',20),
(default, 'benito-1@hotmail.com.ar','Beneitor30', '/img/perfil2.jpg','1992-4-13','beni123',30),
(default, 'lolagomez@gmail.com','Lolitabonita', '/img/perfil14.jpg','1993-2-21','lolitasabe',27),
(default, 'mmartinez@yahoo.com','Mariaelena88', '/img/perfil5.jpg','1998-8-2','panqueque',23),
(default, 'alejandro.g@gmail.com.ar','Alefernandez', '/img/perfil1.jpg','2003-6-4','orange',18);


insert into posts values
(default,  '/img/mclarenP1.jpg',  'Evento Ginebra 2020', '2020-5-12' ,1),
(default, '/img/abtRs7.jpg' ,'Una joya perdida' , '2021-4-6' ,2),
(default, '/img/ferrariLaferrari.jpg', 'Este color es dificil de conseguir, edicion limitada 2020', '2020-6-7' ,3),
(default,  '/img/AMG.jpg', 'Este Mercho es una locura', '2021-11-7' ,4),
(default,   '/img/ferrariPista.jpg', 'Ferrari gris',  '2019-02-7' ,5),
(default,    '/img/KoenigseggAgera.jpg', 'foto sacada post duchita', '2021-04-2' ,1),
(default,  '/img/JORGE-GOMEZ-PAGANI.jpg', 'se me va la beba :¬(',  '2020-4-8' ,2),
(default, '/img/Porsche.jpg','Yendo a salta en esta nave', 2020-4-9 ,3),
(default,  '/img/Urus.jpg', 'los detalles combinan con el exterior verdoso del auto', '2020-12-8' ,4),
(default,  '/img/Huayra.jpg', 'Recien llegado de italia', '2020-10-17' ,5);

insert into comments values
(default, '2020-5-12' , 'Muy bueno!', 1 ,1),
(default, '2020-7-17' , 'Terrible auto!', 1 ,2),
(default, '2021-10-07' , 'Que modelo es?', 1 ,3),
(default, '2020-6-14' , 'De que anio?', 1 ,4),
(default, '2021-11-17' , 'Felicitaciones', 1 ,5),
(default, '2019-6-12' , 'Me encanta ese colorrr', 2 ,1),
(default, '2020-9-09' , 'Que grandee', 2 ,2),
(default, '2021-7-11' , 'Uff me encanta', 2 ,3),
(default, '2021-11-06' , 'AMO', 2 ,4),
(default, '2020-3-13' , 'Es una locuraaa', 2 ,5),
(default, '2020-5-12' , 'Increible', 3 ,1),
(default, '2020-7-17' , 'autazo!', 3 ,2),
(default, '2021-10-07' , 'Faaa', 3 ,3),
(default, '2020-6-14' , 'Nuevo?', 3 ,4),
(default, '2021-11-17' , 'Yo lo quiero', 3 ,5),
(default, '2019-6-12' , 'HERMOSO', 4 ,1),
(default, '2020-9-09' , 'Tremendo', 4 ,2),
(default, '2021-7-11' , 'Me vuelvo loco', 4 ,3),
(default, '2021-11-06' , 'Espectacular', 4 ,4),
(default, '2020-3-15' , 'Es tuyo?', 4 ,5),
(default, '2019-6-18' , 'Sin palabras', 5 ,1),
(default, '2020-10-09' , 'Idoo', 5 ,2),
(default, '2021-7-11' , 'Vamo a dar una vuelta', 5 ,3),
(default, '2021-4-06' , 'Proxima inversion', 5 ,4),
(default, '2021-3-13' , 'Modelo?', 5 ,5);
