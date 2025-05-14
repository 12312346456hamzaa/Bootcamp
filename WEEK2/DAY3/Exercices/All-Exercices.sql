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