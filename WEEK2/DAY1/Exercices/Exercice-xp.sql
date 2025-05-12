create database public;

CREATE TABLE items (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price FLOAT
);

CREATE TABLE customers (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);


INSERT INTO items (id, name, price) VALUES
(1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);


INSERT INTO customers (id, first_name, last_name) VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');


SELECT * FROM items;

select * from items where price>80;

select * from items where price<=300;

select * from customers where last_name='Smith';

select * from customers where last_name='Jones';

select * from customers where first_name!='Scott';

--Exercice-Xp-Plus :

create database bootcamp;

create table students(
	 id SERIAL primary key,
	 last_name varchar(100) Not null,
	 first_name varchar(100) not null,
	 birth_date date not null);

DROP TABLE students

insert into students (last_name,first_name,birth_date) 
values ('Benichou','Marc','1998/11/02'),
       ('Cohen','Yoan','2010/12/03'),
	   ('Benichou','Lea','1987/07/27'),
	   ('Dux','Amelia','1996/04/07'),
	   ('Grez','David','2003/06/14'),
	   ('Simpson','Omer','1980/10/03');

select first_name,last_name from students;

select first_name, last_name from students where id = 2 ; 

select last_name, first_name from students where last_name='Benichou' and first_name='Marc';

select last_name, first_name from students where last_name='Benichou' or first_name='Marc';

select first_name, last_name from students where first_name like '%a%' ;

select first_name, last_name from students where first_name like 'a%' ;

select first_name, last_name from students where first_name like '%a' ;

SELECT first_name, last_name FROM students WHERE first_name ~ '.a.$';

SELECT first_name, last_name FROM students WHERE id IN (1, 3);

SELECT * FROM students WHERE birth_date >= '2000-01-01';

--exercice Xp Gold :

SELECT first_name, last_name, birth_date FROM students ORDER BY last_name ASC LIMIT 4;

SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1;

SELECT first_name, last_name, birth_date FROM students OFFSET 2 LIMIT 3;