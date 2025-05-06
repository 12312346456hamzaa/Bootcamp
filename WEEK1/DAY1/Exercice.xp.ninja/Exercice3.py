import re

paragraph = """
Our reliance on single-use plastic water bottles is more than simply wasteful; it is bad for our environment because of the composition of the bottles themselves and the chemicals they release as they break down in our landfills. Single-use plastic water bottles cause dangerous substances to “leach” into the soil and water. The bottles typically don’t begin to break down for one hundred years, or even longer. Their decomposition may be sped up by extreme weather conditions, e.g., very hot or very cold temperatures. As they break down, they release dangerous chemicals like bisphenol-A into the soil. Bisphenol-A is an endocrine disruptor, i.e., it can affect the levels of hormones within the human body, creating disease. In addition, BPA is known to be carcinogenic (cancer-causing) in humans. As these chemicals accumulate in the soil, they eventually sink into the water table, contaminating the water. Making the environmental threats of single-use water bottles even more frightening is the fact that there is currently no known technology for removing BPA and other leachates from the soil and water once they’re there.
"""

# Traitement du texte
total_chars = len(paragraph)
non_whitespace_chars = len(re.sub(r"\s", "", paragraph))
sentences = re.split(r'[.!?]+', paragraph)
sentences = [s.strip() for s in sentences if s.strip()]
num_sentences = len(sentences)
words = re.findall(r'\b\w+\b', paragraph)
num_words = len(words)
unique_words = set(word.lower() for word in words)
num_unique_words = len(unique_words)
num_non_unique_words = num_words - num_unique_words
avg_words_per_sentence = round(num_words / num_sentences, 2) if num_sentences else 0

# Affichage
print("📊 Statistiques du paragraphe :")
print(f"- Caractères totaux (avec espaces) : {total_chars}")
print(f"- Caractères non blancs : {non_whitespace_chars}")
print(f"- Nombre de phrases : {num_sentences}")
print(f"- Nombre de mots : {num_words}")
print(f"- Nombre de mots uniques : {num_unique_words}")
print(f"- Nombre de mots non uniques : {num_non_unique_words}")
print(f"- Moyenne de mots par phrase : {avg_words_per_sentence}")
