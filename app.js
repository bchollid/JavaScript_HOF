console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus (number){
    return function(plusNumber){
        return number + plusNumber;
    }
}

let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

users.forEach(function(user){
    console.log(user.name)
})

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let namesAndScores = users.map(user =>{
    return {name: user.name, score: user.score}
});
console.log(namesAndScores);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let sortByScore = users.sort((user1, user2) => (user1.score > user2.score) ? 1 : -1);
// let sortByScoreAlt = users.sort(function(user1, user2){
// if(user1.score > user2.score){
//     return 1;
// }
//     else return -1;
// })
console.log(sortByScore.reverse());

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");
let sumOfScores = users.reduce(getSum, 0);
function getSum(total, user){
    return total+user.score;
}

let averageScore = (sumOfScores / users.length);
console.log(averageScore);