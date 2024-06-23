INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Matthew',null,'1969-08-19', 0);

-- ERROR:  Failing row contains (12, Matthew, null, 1969-08-19, 0).null value in column "last_name" of relation "actors" violates not-null constraint 

-- ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
-- SQL state: 23502
-- Detail: Failing row contains (12, Matthew, null, 1969-08-19, 0).