# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, 
# if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

from params import conn_params
# from menu_item import MenuItem
import psycopg2

class MenuManager:
    def __init__(self):
        pass
    
    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect(**conn_params)
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        result = cur.fetchone()
        if result is None:
            return None
        else:
            return result
            # return MenuItem(result.item_name, result.item_price)

    @classmethod        
    def all(cls):
        conn = psycopg2.connect(**conn_params)
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items")
        result = cur.fetchall()
        return result
        # return [MenuItem(item_name, item_price) for item_name, item_price in result]
    

