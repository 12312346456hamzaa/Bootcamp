--1. Count how many actors are in the table.

SELECT COUNT(*) FROM actors;

--2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

--INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES('','', NULL, NULL);
--l’insertion échoue car age et number_oscars ne peuvent pas être NULL (contraintes NOT NULL).
