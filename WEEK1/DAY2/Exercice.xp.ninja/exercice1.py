
companies_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

companies = companies_str.split(", ")

print(f"There are {len(companies)} manufacturers in the list.")

print("Manufacturers in reverse (Z-A) order:")
print(sorted(companies, reverse=True))

count_with_o = sum(1 for company in companies if 'o' in company.lower())
print(f"{count_with_o} manufacturers have the letter 'o' in their name.")

count_without_i = sum(1 for company in companies if 'i' not in company.lower())
print(f"{count_without_i} manufacturers do not have the letter 'i' in their name.")

companies_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_companies = list(set(companies_with_duplicates))
print(f"\nAfter removing duplicates, there are {len(unique_companies)} companies:")
print(", ".join(unique_companies))

reversed_names_sorted = [company[::-1] for company in sorted(unique_companies)]
print("\nManufacturers in A-Z order, with each name reversed:")
print(reversed_names_sorted)
