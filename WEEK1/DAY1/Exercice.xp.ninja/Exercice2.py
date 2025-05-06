longest = ""

while True:
    sentence = input("Entrez la phrase la plus longue possible sans la lettre 'A' (ou tapez 'exit' pour quitter) : ")
    
    if sentence.lower() == 'exit':
        break

    if 'a' in sentence.lower():
        print("❌ La phrase contient la lettre 'A'. Essayez encore.")
        continue

    if len(sentence) > len(longest):
        longest = sentence
        print("🎉 Félicitations ! Nouvelle phrase la plus longue sans 'A' !")
    else:
        print("✅ Phrase valide, mais pas plus longue que la précédente.")
