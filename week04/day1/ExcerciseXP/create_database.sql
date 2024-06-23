-- Database: public

DROP DATABASE IF EXISTS public;

CREATE DATABASE public
   WITH
   OWNER = postgres
   ENCODING = 'UTF8'
   LC_COLLATE = 'Hebrew_Israel.1255'
   LC_CTYPE = 'Hebrew_Israel.1255'
   LOCALE_PROVIDER = 'libc'
   TABLESPACE = pg_default
   CONNECTION LIMIT = -1
   IS_TEMPLATE = False;

CREATE DATABASE public;
	
CREATE TABLE IF NOT EXISTS items(
 id SERIAL PRIMARY KEY,
 name VARCHAR (50) NOT NULL,
 price FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS customers(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL
);

INSERT INTO items (name, price)
 VALUES
 ('Small Desk', 100),
 ('Large desk', 300),
 ('Fan ', 80); 

INSERT INTO customers (first_name, last_name)
 VALUES
 ('Greg ','Jones '),
 ('Sandra','Jones'),
 ('Scott', 'Scott'),
 ('Trevor', 'Green'),
 ('Melanie', 'Johnson'); 

