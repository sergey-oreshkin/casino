create table if not exists users (
    id serial primary key,
    login varchar(13) unique,
    password varchar,
    balance decimal(9,2) not null default 0.0
);