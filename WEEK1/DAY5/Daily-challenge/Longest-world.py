def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    return longest

user_input = input("Entrez une phrase : ")
result = longest_word(user_input)
print("Le mot le plus long est :", result)
