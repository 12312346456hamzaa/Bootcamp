let number = prompt("Enter a number:");

number = Number(number);

while (isNaN(number) || number < 10) {
  number = prompt("Please enter a number greater than or equal to 10:");
  number = Number(number);
}

console.log(" You entered:", number);
