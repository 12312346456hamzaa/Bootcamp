const users = { user1: 18273, user2: 92833, user3: 90315 };

const result = Object.entries(users).map(([user, id]) => [user, id * 2]);

console.log(result);
// output ==>     [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
