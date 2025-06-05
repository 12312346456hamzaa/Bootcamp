const products = require('./products'); // Importation CommonJS

function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log(`Product: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\n`);
  } else {
    console.log(`Product "${productName}" not found.\n`);
  }
}

// Appels de la fonction avec différents noms de produits
findProductByName("Laptop");
findProductByName("Book");
findProductByName("Phone");
findProductByName("Tablet"); 
