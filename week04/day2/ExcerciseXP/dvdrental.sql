-- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer;

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC;

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT CONCAT(first_name, ' ', last_name) AS full_name, address, phone 
FROM customer 
LEFT JOIN address 
ON customer.address_id = address.address_id
WHERE district = 'Texas';

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT category.name as film_category, film.*
FROM category
	LEFT JOIN film_category
	ON film_category.category_id = category.category_id
	
	LEFT JOIN
		film
	ON film.film_id = film_category.film_id

	WHERE film_category.film_id IN (15, 150) AND film.film_id IN (15, 150)

-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'MCFLY''s ADVENTURES';


-- No luck finding your movie? Maybe you made a mistake spelling the name. 
-- Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'MC%';


-- Write a query which will find the 10 cheapest movies.
SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
FETCH FIRST 10 ROWS ONLY


-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
OFFSET 10
FETCH FIRST 10 ROWS ONLY

-- Write a query which will join the data in the customer table and the payment table.
-- You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, 
-- ordered by their id (from 1 to…).
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC


-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
-- VERSION 1
SELECT film.film_id, film.title
FROM film
LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.film_id IS NULL

-- VERSION 2
SELECT film.film_id, film.title
FROM film
WHERE film.film_id NOT IN (SELECT inventory.film_id FROM inventory)

-- Write a query to find which city is in which country.
SELECT city, country
FROM city
JOIN country
ON city.country_id = country.country_id
ORDER BY COUNTRY

-- Bonus You want to be able to see how your sellers have been doing?
-- Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT customer.customer_id, first_name, last_name, amount, payment_date
FROM customer
LEFT JOIN payment
ON customer.customer_id=payment.customer_id
ORDER BY payment.staff_id