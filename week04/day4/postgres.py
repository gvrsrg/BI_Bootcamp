import psycopg2


DBNAME = "Hollywood"
USER = "postgres"
PASSWORD = "sa"
HOST = "localhost"
PORT = "5432"

# connect to the database
conn = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
# create a cursor
cur = conn.cursor()
# execute the query
cur.execute("SELECT * FROM actors",)
# fetch all the rows
rows = cur.fetchall()
# print the rows
for row in rows:
    print(row)


