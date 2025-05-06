my_name = "Hamza"
user_name = input("What's your name? ")

if user_name.strip().lower() == my_name.lower():
    print("Wow! We have the same name! Are we long-lost twins or something?")
else:
    print(f"{user_name}? Nice name! But Hamza is clearly the cooler one 😎.")