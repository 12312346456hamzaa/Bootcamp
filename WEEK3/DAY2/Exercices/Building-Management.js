const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

//1
console.log("Number of floors:", building.numberOfFloors);

//2
const floor1 = building.numberOfAptByFloor.firstFloor;
const floor3 = building.numberOfAptByFloor.thirdFloor;
console.log("Apartments on floor 1 and 3:", floor1, "and", floor3);

//3
const secondTenant = building.nameOfTenants[1]; // "Dan"
const roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0];
console.log(`The second tenant is ${secondTenant} and has ${roomsOfSecondTenant} rooms.`);

//3
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
} else {
    console.log("No change in Dan's rent.");
}
