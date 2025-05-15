--Part I
-- Table Customer
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Table Customer Profile avec relation One-to-One
CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE REFERENCES customer(id) ON DELETE CASCADE
);


INSERT INTO customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');


-- John is logged in
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (TRUE, (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe'));

-- Jerome is not logged in
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));



-- 1. Afficher le first_name des clients connectés
SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- 2. Afficher tous les clients avec leur statut isLoggedIn, y compris ceux sans profil
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- 3. Compter le nombre de clients non connectés (isLoggedIn = FALSE ou sans profil)
SELECT COUNT(*) AS not_logged_in_count
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;




--Part II:
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);


INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);


INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id),

    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE ON UPDATE CASCADE,

    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);



-- John borrowed Alice In Wonderland
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
);

-- Bob borrowed To kill a mockingbird
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
);

-- Lera borrowed Alice In Wonderland
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
);

-- Bob borrowed Harry Potter
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);



-- Table Book
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Table Student
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

-- Table Library (Junction Table)
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

--1
SELECT * FROM Library;
--2
SELECT s.name AS student_name, b.title AS book_title, l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;
--3
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
--4
DELETE FROM Student WHERE name = 'John';


--Daily Challenge: Items and Orders
--1) : 

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL  
);

CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (item_id) REFERENCES items(item_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

--2) : 

CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

--3) : 
CREATE OR REPLACE FUNCTION get_total_price(p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(price)
    INTO total
    FROM items
    WHERE order_id = p_order_id;

    RETURN COALESCE(total, 0); -- retourne 0 si aucun article trouvé
END;
$$ LANGUAGE plpgsql;

