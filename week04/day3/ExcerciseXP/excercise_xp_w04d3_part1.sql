-- 1. Get a list of all the languages, from the language table.
-- select * from language


-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- select 
-- 	film.title,
-- 	film.description,
-- 	language.name as film_language
-- from
-- 	film
-- left join
-- 	language
-- 	on film.language_id = language.language_id


-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- select 
-- 	coalesce(film.title,'no movies in this language') as title, 
-- 	coalesce(film.description,'no movies in this language') as description,
-- 	language.name as film_language
-- from
-- 	film
-- right join
-- 	language
-- 	on film.language_id = language.language_id

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
	id serial primary key,
	name varchar(50) not null
)
insert into new_film(name)
values
('Schindler''s list'),
('Borat'),
('Three little pigs')

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.

-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
create table customer_review(
	review_id serial primary key not null,
	film_id int REFERENCES new_film(id) ON DELETE CASCADE, 
	language_id int REFERENCES language(language_id), 
	title varchar(50),
	score int not null default 5 check(score >=0 and score<=10),
	review_text text,
	last_update timestamp with time zone default(CURRENT_TIMESTAMP)
)
	
CREATE OR REPLACE FUNCTION last_update_timestamp() RETURNS TRIGGER 
LANGUAGE plpgsql
AS
$$
BEGIN
    NEW.last_update = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

CREATE TRIGGER last_update BEFORE INSERT OR UPDATE ON customer_review
    FOR EACH ROW EXECUTE FUNCTION last_update_timestamp();

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

insert into customer_review (film_id,language_id,title,score,review_text)
values
	(1,1,'Best review',10,'I liked this movie a lot'),
	(2,1,'Honest review',10,'Worst movie I ''ve ever seen'),
	(1,1,'Funny review',10,'This is my favourite film now')

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?

delete FROM public.new_film
	where id=1
-- reviews for this film were also deleted

