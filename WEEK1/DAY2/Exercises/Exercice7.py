import random

def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(10, 22), 1)
    elif season == 'summer':
        return round(random.uniform(24, 40), 1)
    elif season == 'autumn':
        return round(random.uniform(10, 20), 1)
    else:
        return round(random.uniform(-10, 40), 1)

def determine_season(month):
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'
    else:
        return None

def main():
    try:
        month = int(input("Please enter the month as a number (1-12): "))
        season = determine_season(month)
        if season is None:
            print("Invalid month number. Please enter a number from 1 to 12.")
            return
        temp = get_random_temp(season)
        print(f"The temperature right now is {temp} degrees Celsius.")
        
        if temp < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif 0 <= temp <= 16:
            print("Quite chilly! Don’t forget your coat.")
        elif 17 <= temp <= 23:
            print("Nice and mild, enjoy your day!")
        elif 24 <= temp <= 32:
            print("It's warm outside. Perfect for a walk!")
        elif 33 <= temp <= 40:
            print("It's really hot! Stay hydrated and avoid the sun.")
    except ValueError:
        print("Please enter a valid number.")

# Appel de la fonction principale
main()
