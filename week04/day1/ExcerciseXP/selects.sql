-- Use SQL to fetch the following data from the database:
-- All the items.
-- All the items with a price above 80 (80 not included).
-- All the items with a price below 300. (300 included)
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- All customers whose last name is ‘Jones’.
-- All customers whose firstname is not ‘Scott’.

SELECT * FROM items
SELECT * FROM items WHERE price > 80
SELECT * FROM items WHERE price <= 300
SELECT * FROM customers WHERE last_name = 'Smith'
SELECT * FROM customers WHERE last_name = 'Jones'
SELECT * FROM customers WHERE first_name != 'Scott'
