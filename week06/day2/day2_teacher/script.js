/** Array method */

// for (let item of users) {
//   // console.log(item);
// }

// for (let i = 1; i < users.length - 2; i = i + 2) {
//   // console.log(users[i]);
// }

// let i = 0;
// while (i < users.length) {
//   // console.log(users[i]);
//   i++;
// }

// for(let indx in users){
//   console.log(users[indx]);
// }

/** create an array of users email's */
// let users = ["John", "Marry", "Dan", "Anne"];
//["John@gmail.com", "Marry@gmail.com", "Dan@gmail.com", "Anne@gmail.com"];

/** forEach loop */
// let arr = []
// users.forEach((user, indx, arr) => {
// console.log(user, indx);
// arr.push(user + "@gamil.com")
// arr[indx] = user + "@gamil.com";
// });
// console.log(users);

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */

// function map(arr) {
//   let retArr = [];
//   arr.forEach((element) => {
//     retArr.push(element * 2);
//   });
//   return retArr;
// }

// console.log(map( [1,2,3,4,5]));

/** map method */
// let arr = [1, 2, 3, 4, 5];
// let retArr = arr.map((item) => {
//   if (item > 3) {
//     return item * 2;
//   }
// });

// console.log(arr);
// console.log(retArr);

// let users = [
//   { userid: 1, name: "John", email: "jjj@gmail.com" },
//   { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//   { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//   { userid: 3, name: "Or", email: "aaa@gmail.com" },
// ];

/** use the map method to render the users on the html page */
// function render(arr) {
//   let html = arr.map(item => {
//      return `<div>${item.userid} ${item.name} ${item.email}</div>`
//   })
//   console.log(html);
//   document.getElementById('root').innerHTML = html.join('')
// }
// render(users)

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

const filter = (arr) => {
  let retArr = [];
  for (let item of arr) {
    if (item > 3) retArr.push(item);
  }
  return retArr;
};
// console.log(filter([0,1,1,2,3,5,8]));

/** filter method */
let arr = [0, 1, 1, 2, 3, 5, 8];
let retArr = arr.filter((item) => {
  return item > 3;
});
// console.log(retArr);

// name include 'o' case insensitive

// let oUsers = users.filter((item) => {
//   return item.name.toLowerCase().includes("o");
// });

// console.log(oUsers);

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

const reduce = (arr, num = 0) => {
  let sum = num;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
// console.log(reduce([2, 5, 10, 100], 100));

/** reduce */
let numbers = [2, 5, 10, 100];
let sum = numbers.reduce((total, item) => total + item, 100);
// console.log(sum);

let users = [
  { userid: 1, name: "John", email: "jjj@gmail.com" },
  { userid: 2, name: "Marry", email: "mmm@gmail.com" },
  { userid: 3, name: "Anne", email: "aaa@gmail.com" },
  { userid: 3, name: "Or", email: "aaa@gmail.com" },
];

/**
 * Create an function that get an array of Numbers as input
 * return the first item with userid === 3
 */
const find = (arr) => {
  for (let item of arr) {
    if (item.userid === 3) {
      // console.log(item);
      return item;
    }
  }
};
// console.log(find(users));

/** find / findIndex*/
let user = users.findIndex((item) => item.userid === 3);
// console.log(user);

/** some / every */
let names = ["John", "John", "John"];
let result = names.some((item) => {
  return item === "John";
});
// console.log(result);

let result2 = names.every((item) => {
  return item === "John";
});
// console.log(result2);

/**
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow

hint: to find the max number in a givven array
 */
let arr2 = [2, 8, 4, 4, 8, 1, 8];
const maxHeight = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(maxHeight(arr2));
const birthdayCakeCandles = (arr) => {
  // let maxNum = maxHeight(arr);
  let maxNum = Math.max(...arr);
  return arr.filter((item) => item === maxNum).length;
};

// console.log(birthdayCakeCandles(arr2));

/** array destructuring */
let nums = [1, 2, 3, 4, 5, 6];
// let a = nums[0]
// let b = nums[1]
// let c = nums[2]

/** rest parameter */
// let [a, b, ...d] = nums;

// console.log(a, b, d);

let a = 1;
let b = [2, 6];
let c = [3, 4, 5];

/** spread */
let d = [...c, a, ...b];
console.log(d);
