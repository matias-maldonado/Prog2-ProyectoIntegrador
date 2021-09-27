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

(default,  '/img/mclarenP1.jpg'  'Evento Ginebra 2020' '29/05/2020')
(default, '/img/abtRs7.jpg' ,'Una joya perdida' , '17/03/2021' )
(default, '/img/ferrariLaferrari.jpg', 'Este color es dificil de conseguir, edicion limitada 2020', '5/08/2020')
(default,  '/img/AMG.jpg', 'Este Mercho es una locura', '7/11/2021',)
(default,   '/img/ferrariPista.jpg', 'Ferrari gris',  '26/02/2019', )
(default,    '/img/KoenigseggAgera.jpg', 'foto sacada post duchita', '05/04/2021',)
(default,  '/img/JORGE-GOMEZ-PAGANI.jpg', 'se me va la beba :¬(',  '21/04/2020',)
(default, '/img/Porsche.jpg','Yendo a salta en esta nave', '07/07/2020',)
(default,  '/img/Urus.jpg', 'los detalles combinan con el exterior verdoso del auto', '01/12/2020')
(default,  '/img/Huayra.jpg', 'Recien llegado de italia', '14/06.2020')

