--🌟 Exercise 1
--1) : Get a list of all the languages, from the language table.
SELECT * FROM language;

--2) : Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM 
    film f
JOIN 
    language l ON f.language_id = l.language_id;

--3) : Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM 
    language l
LEFT JOIN 
    film f ON f.language_id = l.language_id;

--4) : Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO new_film (name) VALUES
('Inception'),
('The Matrix'),
('Interstellar'),
('The Godfather'),
('Parasite');

--5) : Create a new table called customer_review, which will contain film reviews that customers will make. 
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT NOT NULL REFERENCES language(language_id),
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP NOT NULL
);

--6) : Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- Ajouter les films s'ils n'existent pas déjà

INSERT INTO new_film (name) VALUES 
('Hunter x Hunter'),
('Demon Slayer');

-- Ajouter les critiques
INSERT INTO customer_review (
    film_id, language_id, title, score, review_text, last_update
) VALUES
(6, 1, 'Epic Adventure', 10, 'Hunter x Hunter offers an emotional and thrilling journey.', NOW()),
(7, 1, 'Stunning Animation', 9, 'Demon Slayer is visually breathtaking with powerful story arcs.', NOW());
SELECT * FROM new_film;

--7) : Delete a film that has a review from the new_film table, what happens to the customer_review table? :

-- When you delete a film from the new_film table, all associated reviews in the customer_review table are automatically deleted, due to the ON DELETE CASCADE constraint.


--🌟 Exercise 2 :
--1) : Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film SET language_id = 2 WHERE title = 'Cast Away';
UPDATE new_film SET name = 'Hunter x Hunter (FR)' WHERE id = 6;


--2) : Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

--The customer table has two foreign keys:
--store_id → references store(store_id)
--address_id → references address(address_id)
--Impact: When inserting into the customer table, the store_id and address_id values must already exist in their respective tables (store and address). Otherwise, the insertion will fail due to a foreign key constraint violation.


--3) : We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
--This is an easy step because no other table depends on customer_review. No extra checking is needed.

--4) : Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;


--5) :Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;


--6) : Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--6/1 : The 1st film 

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
  AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%');

--6/2) : The 2nd film

SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

--6/3) : The 3rd film

SELECT f.title
FROM rental r
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

--6/4) : The 4th film 

SELECT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;

--Exercice Xp Gold : 
--Exercise 1 : DVD Rentals
--1) : 
SELECT *
FROM rental
WHERE return_date IS NULL;

--2) : 
SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS not_returned_count
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;

--3) :SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE a.first_name = 'Joe' AND a.last_name = 'Swank'
  AND c.name = 'Action';

--Exercise 2 – Happy Halloween
--1 ) : 
SELECT 
    s.store_id,
    ci.city,
    co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

--2) :
SELECT 
    s.store_id,
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
GROUP BY s.store_id;

--3) : 
SELECT 
    s.store_id,
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL OR r.rental_id IS NULL
GROUP BY s.store_id;

--4) :
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT a2.city_id
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
);

--5) :
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT DISTINCT co2.country_id
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
    JOIN country co2 ON ci2.country_id = co2.country_id
);

--6) : 
SELECT SUM(f.length) AS total_safe_minutes
FROM film f
WHERE f.film_id NOT IN (
    SELECT fc.film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE LOWER(c.name) = 'horror'
)
AND LOWER(f.title) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%'
AND LOWER(f.description) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%';


--7) :
SELECT 
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 1440.0, 2) AS total_days
FROM film f;

SELECT 
    SUM(f.length) AS total_safe_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_safe_hours,
    ROUND(SUM(f.length) / 1440.0, 2) AS total_safe_days
FROM film f
WHERE f.film_id NOT IN (
    SELECT fc.film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE LOWER(c.name) = 'horror'
)
AND LOWER(f.title) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%'
AND LOWER(f.description) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%';


--Exercice Xp Ninja : 

--1) :
SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE f.rating IN ('G', 'PG')
  AND (
    r.return_date IS NOT NULL  -- les films retournés
    OR r.rental_id IS NULL     -- les films jamais loués
  );

--2) : 
CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Clé étrangère vers la table film
    FOREIGN KEY (film_id) REFERENCES film(film_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

--3) : -- Exemple d’enfants en attente de films pour enfants (G ou PG)

INSERT INTO waiting_list (child_name, film_id) VALUES
('Lina', 1),
('Adam', 1),
('Sara', 2),
('Youssef', 2),
('Maya', 2),
('Ali', 3);

SELECT f.title, COUNT(w.waiting_id) AS number_waiting
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.title
ORDER BY number_waiting DESC;
