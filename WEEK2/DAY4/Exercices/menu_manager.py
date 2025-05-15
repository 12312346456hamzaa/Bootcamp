import psycopg2
from menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect(
            dbname="restaurant",
            user="postgres",
            password="19973",
            host="localhost",
            port=5432
        )
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s", (name,))
        result = cur.fetchone()
        cur.close()
        conn.close()
        if result:
            return MenuItem(result[0], result[1])
        else:
            return None

    @classmethod
    def all_items(cls):
        conn = psycopg2.connect(
            dbname="restaurant",
            user="postgres",
            password="19973",
            host="localhost",
            port=5432
        )
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items")
        results = cur.fetchall()
        cur.close()
        conn.close()
        return [MenuItem(name, price) for name, price in results]
