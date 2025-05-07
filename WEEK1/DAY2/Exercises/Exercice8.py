data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def run_star_wars_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    print("🌌 Welcome to the Star Wars Quiz! 🌠\n")

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            print("✅ Correct!\n")
            correct += 1
        else:
            print(f"❌ Incorrect! The correct answer was: {item['answer']}\n")
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    # Résumé final
    print("\n🧾 Quiz Results:")
    print(f"✔️ Correct answers: {correct}")
    print(f"❌ Incorrect answers: {incorrect}")

    # Message selon le score
    total = len(data)
    if correct == total:
        print("🎉 Perfect score! You are a Jedi Master!")
    elif correct >= total * 0.7:
        print("👍 Great job! The Force is strong with you.")
    elif correct >= total * 0.4:
        print("🙂 Not bad, young Padawan. Keep training!")
    else:
        print("😅 You might need to rewatch the movies...")

    # Afficher les erreurs
    if wrong_answers:
        print("\n📌 Here's what you missed:")
        for item in wrong_answers:
            print(f"- Q: {item['question']}")
            print(f"  ❌ Your answer: {item['your_answer']}")
            print(f"  ✅ Correct answer: {item['correct_answer']}\n")

    # Proposer de rejouer si plus de 3 erreurs
    if incorrect > 3:
        play_again = input("You got more than 3 wrong answers. Would you like to play again? (yes/no): ").strip().lower()
        if play_again == "yes":
            run_star_wars_quiz()
        else:
            print("👋 Thanks for playing! May the Force be with you.")

# Lancer le quiz
run_star_wars_quiz()
