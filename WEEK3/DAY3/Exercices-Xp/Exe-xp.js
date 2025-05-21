//Exercice:1

function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  let numbers = [];
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i);
      sum += i;
    }
  }
  console.log(numbers.join(' '));
  console.log('Sum :', sum);
}

displayNumbersDivisible();      

//Exercice:2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        
        if (item in stock && stock[item] > 0) {
            total += prices[item];     
            stock[item] -= 1;         
        }
    }
    return total;
}

console.log("Total bill:", myBill());
console.log("Updated stock:", stock); 


//Exercice:3
function changeEnough(itemPrice, amountOfChange) {
  
  const coinValues = [0.25, 0.10, 0.05, 0.01];
  let total = 0;

  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * coinValues[i];
  }

  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));   // true
console.log(changeEnough(14.11, [2, 100, 0, 0]));  // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));    // true


//Exercice4
function hotelCost(nights) {
  return Number(nights) * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let price = Number(days) * 40;
  if (Number(days) > 10) price *= 0.95;
  return price;
}

function totalVacationCost() {
  // Demander infos une seule fois
  let nights, days, destination;

  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
  } while (isNaN(nights) || nights === "" || nights === null);

  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days === "" || days === null);

  do {
    destination = prompt("What is your destination?");
  } while (!destination || !isNaN(destination));

  const hotel = hotelCost(nights);
  const car = rentalCarCost(days);
  const plane = planeRideCost(destination);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  console.log(`Total vacation cost: $${car + hotel + plane}`);
}

totalVacationCost();




