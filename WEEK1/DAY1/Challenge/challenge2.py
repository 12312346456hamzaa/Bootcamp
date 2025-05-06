def remove_consecutive_duplicates(word):
    result = ""
    for i in range(len(word)):
        if i == 0 or word[i] != word[i - 1]:
            result += word[i]
    return result

# Ask for user input
user_input = input("Enter a word: ")
# Process and display the result
cleaned_word = remove_consecutive_duplicates(user_input)
print("Result:", cleaned_word)
c