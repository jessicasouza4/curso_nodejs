create table noticias ( id_noticia int not null primary key auto_increment, titulo varchar(100), noticia text, data_criacao timestamp default current_timestamp);

insert into noticias(titulo, noticia) values ('titulo da noticia', 'conteudo da noticia');
insert into noticias(titulo, noticia) values ('titulo da outra noticia', 'conteudo da outra noticia');
