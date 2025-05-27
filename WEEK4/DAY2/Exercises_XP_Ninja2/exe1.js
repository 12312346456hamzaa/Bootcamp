const menu = [
  { type : "starter", name : "Houmous with Pita" },
  { type : "starter", name : "Vegetable Soup with Houmous peas" },
  { type : "dessert", name : "Chocolate Cake" }
];

// 1.
const hasDessert = menu.some(item => item.type === "dessert") ? true : false;
console.log(hasDessert); // true

// 2.
const allStarters = menu.every(item => item.type === "starter");
console.log(allStarters); // false

// 3. 
const hasMainCourse = menu.some(item => item.type === "main course");
if (!hasMainCourse) {
  menu.push({ type: "main course", name: "Grilled Vegetables with Rice" });
}
console.log(menu);

// 4. Ajouter la clé vegetarian selon le tableau ci-dessous
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

// On peut utiliser map pour créer un nouveau tableau avec la clé vegetarian
const menuWithVegetarian = menu.map(item => {
  const nameLower = item.name.toLowerCase();
  const isVegetarian = vegetarian.some(veg => nameLower.includes(veg));
  return { ...item, vegetarian: isVegetarian };
});
console.log(menuWithVegetarian);

