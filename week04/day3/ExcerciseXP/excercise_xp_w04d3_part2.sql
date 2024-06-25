-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- update film set language_id = 4
-- where title ilike '%japan%'


-- Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?



-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- drop table customer_review
	
	-- DROP TABLE
	
	-- Query returned successfully in 49 msec.

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- Select
-- 	count(*)
-- from rental
-- where return_date is null

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- Select
-- 	film.title,
-- 	film.rental_rate
-- from rental
-- left join inventory on rental.inventory_id = inventory.inventory_id
-- left join film on inventory.film_id = film.film_id
-- where return_date is null
-- order by film.rental_rate desc
-- fetch first 30 rows only

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
-- but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- select
-- 	film.title,
-- 	film.description
-- from film
-- where film.description ilike'%sumo%' and film.film_id in (
-- 	select
-- 	film_actor.film_id
-- 	from film_actor
-- 	left join actor on film_actor.actor_id = actor.actor_id
-- 	where actor.first_name ilike'penelope' and actor.last_name ilike 'monroe'
-- 	)



-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- select
-- 	film.title,
-- 	film.description,
-- 	film.rating,
-- 	film.rental_duration,
-- 	category.name
-- from film
-- left join film_category on film_category.film_id = film.film_id
-- left join category on category.category_id = film_category.category_id
-- where 
-- 	category.name ilike '%Documentary%' 
-- 	and film.rating = 'R'
-- 	and film.length < 60



-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
-- Select
-- 	film.title,
-- 	film.rental_rate,
-- 	rental.return_date,
-- 	customer.first_name,
-- 	customer.last_name
-- from rental
-- left join inventory on rental.inventory_id = inventory.inventory_id
-- left join customer on rental.customer_id = customer.customer_id
-- left join film on inventory.film_id = film.film_id
-- where 
-- 	rental.return_date between '2005-07-28' and '2005-08-01'
-- 	and film.rental_rate > 4
-- 	and customer.first_name ilike 'matthew'
-- 	and customer.last_name ilike 'Mahan'

-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
Select
	film.title,
	film.description,
	film.replacement_cost,
	customer.first_name,
	customer.last_name
from rental
left join inventory on rental.inventory_id = inventory.inventory_id
left join customer on rental.customer_id = customer.customer_id
left join film on inventory.film_id = film.film_id
where 
	film.title ilike '%boat%' or film.description ilike '%boat%'
	and customer.first_name ilike 'matthew'
	and customer.last_name ilike 'Mahan'
order by film.replacement_cost desc
limit 1