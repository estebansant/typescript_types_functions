const prices: (number | string)[] = [1,2,3,4,5, 'hey!'];
prices.push(1);
prices.push('2');

const user: [string, number, boolean] = ['estebansant', 20, true];
// user = [];
// user = [2, 'wow'];
// user = [true];

const [username, age] = user;
console.log(username);
console.log(age);
