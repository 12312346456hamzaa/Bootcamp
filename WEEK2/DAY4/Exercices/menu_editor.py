from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n*** MENU MANAGER ***")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("Q - Quit")

        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            name = input("Enter the item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item.name} costs {item.price} MAD")
            else:
                print("Item not found.")

        elif choice == 'A':
            add_item_to_menu()

        elif choice == 'D':
            remove_item_from_menu()

        elif choice == 'U':
            update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'Q':
            print("\nFinal Menu:")
            show_restaurant_menu()
            break

        else:
            print("Invalid option. Try again.")

def add_item_to_menu():
    name = input("Item name: ")
    price = int(input("Item price: "))
    item = MenuItem(name, price)
    item.save()
    print("Item added successfully.")

def remove_item_from_menu():
    name = input("Item name to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item deleted successfully.")
    else:
        print("Item not found.")

def update_item_from_menu():
    old_name = input("Current item name: ")
    item = MenuManager.get_by_name(old_name)
    if item:
        new_name = input("New name: ")
        new_price = int(input("New price: "))
        item.update(new_name, new_price)
        print("Item updated successfully.")
    else:
        print("Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(f"{item.name}: {item.price} MAD")
    else:
        print("Menu is empty.")

# Exécuter le menu :
if __name__ == "__main__":
    show_user_menu()
