# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. 
# The update method can update the name as well as the price of an item.
from __future__ import annotations
import psycopg2
from params import conn_params
from menu_manager import MenuManager

# def save_item(menu_item: MenuItem):
#     pass

# def delete_item(menu_item: MenuItem):
#     pass

# def update_item(menu_item: MenuItem):
#     pass


class MenuItem:


    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try:
            conn = psycopg2.connect(**conn_params)
            cur = conn.cursor()
            cur.execute("INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
            conn.commit()
            cur.close()
            conn.close()
        except Exception as e:
            print(e)
        
    def delete(self):
        try:
            conn = psycopg2.connect(**conn_params)
            cur = conn.cursor()
            cur.execute("DELETE FROM menu_items WHERE item_name = %s", (self.name,))
            conn.commit()
            cur.close()
            conn.close()
        except Exception as e:
            print(e)
    
    def update(self, new_name, new_price):

        try:
            conn = psycopg2.connect(**conn_params)
            cur = conn.cursor()
            cur.execute("UPDATE menu_items SET item_price = %s, item_name=%s WHERE item_name = %s", 
                        (new_price, new_name, self.name))
            conn.commit()
            cur.close()
            conn.close()
            self.name = new_name
            self.price = new_price        
        except Exception as e:
            print(e)
    
    def __str__(self) -> str:  # str()
        object_str = f"Item - {self.name}, price - {self.price}"
        return object_str

def main():
    item = MenuItem('Burger', 35)
    item.save()
    # item.delete()
    item.update('Veggie Burger', 37)
    # item2 = MenuItem('Beef Stew', 35)
    # item2.save()
    # item3 = MenuItem('Falafel', 45)
    # item3.save()
    # item4 = MenuItem('Shwarma', 39)
    # item4.save()
    item5 = MenuManager.get_by_name('Beef Stew')
    items = MenuManager.all()

    for one_item in items:
        print(one_item)

    print(item)
    item.update('Veggie Burger', 237)
    for one_item in items:
        print(one_item)


if __name__ == '__main__':
    main()