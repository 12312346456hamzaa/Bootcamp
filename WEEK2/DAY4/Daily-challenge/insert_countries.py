import requests
import random
import psycopg2

# Connexion à la base PostgreSQL
conn = psycopg2.connect(
    dbname="postgres",         #
    user="postgres",
    password="19973",
    host="localhost",
    port=5432
)

cur = conn.cursor()


cur.execute("""
    CREATE TABLE IF NOT EXISTS countries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        capital VARCHAR(100),
        flag TEXT,
        subregion VARCHAR(100),
        population BIGINT
    );
""")
conn.commit()

# Vider la table à chaque exécution (facultatif, pratique en test)
cur.execute("DELETE FROM countries;")
conn.commit()
print("🗑️ Table 'countries' vidée.")

# Appel de l'API REST Countries
url = "https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population"
response = requests.get(url)

if response.status_code != 200:
    print("❌ Échec de l'appel à l'API. Code:", response.status_code)
    conn.close()
    exit()

countries = response.json()

# Sélection de 10 pays aléatoires
random_countries = random.sample(countries, 10)

# Insertion dans la base
for country in random_countries:
    name = country.get("name", {}).get("common", "N/A")
    capital = country.get("capital", ["N/A"])[0] if country.get("capital") else "N/A"
    flag = country.get("flags", {}).get("png", "")
    subregion = country.get("subregion", "N/A")
    population = country.get("population", 0)

    cur.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

    print(f"✅ {name} inséré.")

# Commit et fermeture
conn.commit()
cur.close()
conn.close()

print(" 10 pays aléatoires insérés avec succès dans la base 'postgres'.")
