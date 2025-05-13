--Exercise 1 : Items and customers

--1) : All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY price ASC;

--2) : Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

--3) : The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

--4) : All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC;

--Exercise 2 : dvdrental database

--1) : In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;


--2) : Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name || ' ' || last_name AS full_name FROM customer;


--3) : Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer;


--4) : Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC;


--5) : Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate  FROM film  ORDER BY rental_rate ASC;


--6) : Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone FROM address WHERE district = 'Texas';


--7) : Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film WHERE film_id IN (15, 150);


--8) : Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'ALIBI';


--9) : No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'AL%';


--10) : Write a query which will find the 10 cheapest movies.
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;


--11) : Not satisfied with the results. Write a query which will find the next 10 cheapest movies. Bonus: Try to not use LIMIT.
SELECT * FROM ( SELECT *, ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn FROM film ) AS sub WHERE rn > 10 AND rn <= 20;


--12) : Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT c.first_name, c.last_name, p.amount, p.payment_date FROM customer c JOIN payment p ON c.customer_id = p.customer_id ORDER BY c.customer_id;


--13) : You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT * FROM film WHERE film_id NOT IN ( SELECT film_id FROM inventory );


--14) : Write a query to find which city is in which country.
SELECT city.city, country.country FROM city JOIN country ON city.country_id = country.country_id;


--15) : Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id FROM customer c
JOIN payment p ON c.customer_id = p.customer_id ORDER BY p.staff_id;

--Exercise XP Gold : 
--Exercise 1: DVD Rental :

--1) : Find out how many films there are for each rating.
SELECT rating, COUNT(*) AS number_of_films FROM film GROUP BY rating;


--2) : Get a list of all the movies that have a rating of G or PG-13. Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT title, rating FROM film WHERE rating IN ('G', 'PG-13');
SELECT title, rating, length, rental_rate FROM film WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title;


--3) : Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer
SET first_name = 'Hamza',
    last_name = 'Aboulhana',
    email = 'hamza.aboulhana4@gmail.com'
WHERE customer_id = 1;



--4) : Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
SELECT address_id FROM customer WHERE customer_id = 1;
UPDATE address
SET address = '123 Rue de Casablanca',
    district = 'Anfa',
    postal_code = '20000',
    phone = '0600000000'
WHERE address_id = 5;


--Exercise 2: students table
--Update:
--1) : ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
UPDATE students SET birth_date = '1998-11-02' WHERE first_name = 'Lea' AND last_name = 'Benichou';

UPDATE students SET birth_date = '1998-11-02' WHERE first_name = 'Marc' AND last_name = 'Benichou';


--2) : Change the last_name of David from ‘Grez’ to ‘Guez’.
UPDATE students SET last_name = 'Guez' WHERE first_name = 'David' AND last_name = 'Grez';



--Delete :
--1) : Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou';


--Count :
--1) : Count how many students are in the table : 
SELECT COUNT(*) FROM students;



--2) : Count how many students were born after 1/01/2000 :
SELECT COUNT(*) FROM students WHERE birth_date > '2000-01-01';



--Insert / Alter :
--1) : Add a column to the student table called math_grade :
ALTER TABLE students ADD COLUMN math_grade INT;


--2) : Add 80 to the student which id is 1 : 
UPDATE students SET math_grade = 80 WHERE id = 1;


--3) :Add 90 to the students which have ids of 2 or 4 : 
UPDATE students SET math_grade = 90 WHERE id IN (2, 4);


--4) :Add 40 to the student which id is 6 :
UPDATE students SET math_grade = 40 WHERE id = 6;


--5) : Count how many students have a grade bigger than 83 :
SELECT COUNT(*) FROM students WHERE math_grade > 83;


--6) : Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70 :
INSERT INTO students (last_name, first_name, birth_date, math_grade)
SELECT last_name, first_name, birth_date, 70 
FROM students 
WHERE first_name = 'Omer' AND last_name = 'Simpson' 
LIMIT 1;


--7):
SELECT first_name, last_name, COUNT(math_grade) AS total_grade FROM students
GROUP BY first_name, last_name;


--SUM :
--1) : Find the sum of all the students grades :
SELECT SUM(math_grade) AS total_grades_sum 
FROM students;


--Exercise 3 : Items and customers
--Part I :

--1) : Create a table named purchases. It should have 3 columns :
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id),
    quantity_purchased INT
);

--2) : Insert purchases for the customers, use subqueries :

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT id FROM items WHERE name = 'Fan'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT id FROM items WHERE name = 'Large Desk'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT id FROM items WHERE name = 'Small Desk'),
    2
);

-- Part II :

--1) : Use SQL to get the following from the database:
--1/1 :
SELECT * FROM purchases;


--1/2 :
SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased FROM purchases p
JOIN customers c ON p.customer_id = c.id;


--1/3 :
SELECT * FROM purchases WHERE customer_id = 5;


--1/4 :
SELECT * FROM purchases WHERE item_id IN (
    SELECT id FROM items WHERE name = 'Large Desk' OR name = 'Small Desk'
);



--2) : Use SQL to show all the customers who have made a purchase. Show the following fields/columns :
SELECT c.first_name, c.last_name, i.name AS item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

--3) :

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (2, NULL, 1);



--Exercice XP Nnja : 
--1) : Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
OFFSET (SELECT COUNT(*) - 2 FROM customers);



--2) : Use SQL to delete all purchases made by Scott.
DELETE FROM purchases
WHERE customer_id = (
    SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'
);



--3) : Does Scott still exist in the customers table, even though he has been deleted? Try and find him.
SELECT * FROM customers
WHERE first_name = 'Scott' AND last_name = 'Scott';


--4) : Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will appear, although instead of the customer’s first and last name, you should only see empty/blank. (Which kind of join should you use?).
SELECT c.first_name, c.last_name, p.item_id, p.quantity_purchased FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.id;


--5) : Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will NOT appear. (Which kind of join should you use?)
SELECT c.first_name, c.last_name, p.item_id, p.quantity_purchased FROM purchases p
INNER JOIN customers c ON p.customer_id = c.id;
