-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
-- create table Book(
-- 	book_id SERIAL PRIMARY KEY,
-- 	title varchar(100) NOT NULL,
-- 	author varchar(100) NOT NULL
-- )

-- Insert those books 
-- insert into book(title, author)
--  	values
--  ('Alice In Wonderland', 'Lewis Carroll'),
--  ('Harry Potter', 'J.K Rowling'),
--  ('To kill a mockingbird', 'Harper Lee')

-- create table student(
--  	student_id serial primary key,
--  	name varchar(50) not null unique,
-- 	age int check(age<=15 and age>0)
-- )

-- Insert those students

-- insert into student(name, age)
--  	values
--  ('John', 12),
--  ('Lera', 11), 
--  ('Patrick', 10),
--  ('Bob', 14)

--  create table library(
-- book_fk_id int REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_fk_id int REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date date not null
-- )

-- insert into library(book_fk_id, student_fk_id, borrowed_date)
-- values
-- ((select book_id from book where title ilike 'Alice In Wonderland'), (select student_id from student where name ilike 'John'), '2022-02-15'),
-- ((select book_id from book where title ilike 'To kill a mockingbird'), (select student_id from student where name ilike 'Bob'), '2021-03-03'),
-- ((select book_id from book where title ilike 'Alice In Wonderland'), (select student_id from student where name ilike 'Lera'), '2021-05-23'),
-- ((select book_id from book where title ilike 'Harry Potter'), (select student_id from student where name ilike 'Bob'), '2021-08-12')


-- Select all the columns from the junction table
-- SELECT * FROM library
	
-- Select the name of the student and the title of the borrowed books
-- select
-- 	student.name,
-- 	book.title
-- from
-- 	library
-- left join student on library.student_fk_id = student.student_id
-- left join book on library.book_fk_id = book.book_id
	
-- Select the average age of the children, that borrowed the book Alice in Wonderland
-- select
-- 	avg(age)
-- from student
-- left join library on student.student_id = library.student_fk_id
-- left join book on library.book_fk_id = book.book_id
-- where book.title ilike 'Alice in Wonderland'


-- Delete a student from the Student table, what happened in the junction table ?
delete 
from student
where name = 'Bob'

-- DELETE 1
-- Query returned successfully in 98 msec.
-- in junction table were deleted 2 rows
