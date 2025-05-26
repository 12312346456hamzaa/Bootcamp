let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Arrow function pour afficher les fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Arrow function pour cloner/modifier les données
const cloneGroceries = () => {
    
    let user = client;
    client = "Betty";
    
    console.log("user =", user);       
    console.log("client =", client);   

    // shopping est une référence vers l'objet groceries 
    let shopping = groceries;
    shopping.totalPrice = "35$";
    
    console.log("groceries.totalPrice =", groceries.totalPrice); 

    shopping.other.paid = false;
    
    console.log("groceries.other.paid =", groceries.other.paid); 
};

displayGroceries(); 
cloneGroceries();
