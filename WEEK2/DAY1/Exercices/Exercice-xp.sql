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