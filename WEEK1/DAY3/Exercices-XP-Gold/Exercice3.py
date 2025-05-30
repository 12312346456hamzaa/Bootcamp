class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name": name,
            "price": price,
            "spice_level": spice,
            "gluten": gluten
        }
        self.menu.append(new_dish)
        print(f"{name} added to the menu.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice_level"] = spice
                dish["gluten"] = gluten
                print(f"{name} has been updated.")
                return
        print(f"{name} is not in the menu.")

    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"{name} has been removed. Updated menu:")
                for item in self.menu:
                    print(item)
                return
        print(f"{name} is not in the menu.")


if __name__ == "__main__":
    manager = MenuManager()
    manager.add_item("Pizza", 20, "B", True)
    manager.update_item("Soup", 12, "A", False)
    manager.remove_item("Salad")
    manager.remove_item("Sushi")
