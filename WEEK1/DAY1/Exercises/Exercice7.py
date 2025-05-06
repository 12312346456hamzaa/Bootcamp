#1
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)

#2
basket = ["Apples", "Oranges", "Blueberries"]
basket.remove("Blueberries")
print(basket)

#3
basket = ["Apples", "Oranges"]
basket.append("Kiwi")
print(basket)

#4
basket = ["Apples", "Oranges", "Kiwi"]
basket.insert(0, "Apples")
print(basket)

#5
basket = ['Apples', 'Apples', 'Oranges', 'Kiwi']
apple_count = basket.count("Apples")
print("Number of Apples:", apple_count)

#6
basket = ['Apples', 'Apples', 'Oranges', 'Kiwi']
basket.clear()
print(basket)

#7
basket = []
print(basket)
