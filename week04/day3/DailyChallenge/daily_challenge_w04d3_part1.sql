-- create database dailychallengew04d3

-- create table customer(
-- 	id serial primary key,
-- 	first_name varchar(50),
-- 	last_name varchar(50) not null
-- )

-- create table customer_profile(
-- 	id serial primary key,
-- 	isLoggedIn boolean default false,
-- 	customer_id int REFERENCES customer(id)
-- )


-- insert into customer(first_name, last_name)
-- 	values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- insert into customer_profile(customer_id, isLoggedIn)
-- values
-- ((select id from customer where first_name ilike 'John' and last_name ilike 'Doe'), true),
-- ((select id from customer where first_name ilike 'Jerome' and last_name ilike 'Lalu'), false)


--The first_name of the LoggedIn customers
-- select
-- 	customer.first_name
-- from customer_profile
-- left join customer on customer.id = customer_profile.customer_id
-- where isLoggedIn

--All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- select
-- 	customer.first_name,
-- 	customer_profile.isLoggedIn
-- from customer
-- left join customer_profile on customer.id = customer_profile.customer_id

--The number of customers that are not LoggedIn	
select
	count(*)
from customer
left join customer_profile on customer.id = customer_profile.customer_id
where  not (coalesce(customer_profile.isLoggedIn, false))

