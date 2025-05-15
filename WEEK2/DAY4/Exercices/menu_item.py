import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = psycopg2.connect(
            dbname="restaurant",
            user="postgres",          # ou "HAMZA" selon l'utilisateur valide chez toi
            password="19973",         # ton mot de passe valide
            host="localhost",
            port=5432
        )
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
        conn.commit()
        cur.close()
        conn.close()

    def delete(self):
        conn = psycopg2.connect(
            dbname="restaurant",
            user="postgres",          # unifié avec les autres méthodes
            password="19973",
            host="localhost",
            port=5432
        )
        cur = conn.cursor()
        cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        conn.commit()
        cur.close()
        conn.close()

    def update(self, new_name, new_price):
        conn = psycopg2.connect(
            dbname="restaurant",
            user="postgres",
            password="19973",
            host="localhost",         
            port=5432
        )
        cur = conn.cursor()
        cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
        conn.commit()
        cur.close()
        conn.close()
