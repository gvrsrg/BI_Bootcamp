/** Async in JS */

// setTimeout
// setInterval

// console.log('before');
// macro task
// setTimeout(()=> {
// //   console.log('in set timeout');
// },0);

// console.log('after');

// Sync

// function getX() {
//   setTimeout(() => {
//     return 5;
//   }, 10);
// }

// function getY() {
//   return 6;
// }

// function getXY() {
//   let x = getX();
//   console.log("x=>", x);

//   let y = getY();
//   console.log("y=>", y);

//   console.log(x + y);
// }

// getXY();

/** callback */
function myCallback() {
  console.log("callback executed!!!");
}

function exeCallback(f) {
  return f();
}

// exeCallback(myCallback);

// array.forEach(

//     (element) => {}

// );

function getX(f) {
  setTimeout(() => {
    f(5);
  }, 2000);
}
// delay for 3s
function getY(f) {
  setTimeout(() => {
    f(6);
  }, 3 * 1000);
}

function getXY() {
  //   let x = getX();
  getX((x) => {
    console.log("x=>", x);
    getY((y) => {
      console.log("y=>", y);
      getZ(() => {
        getA(() => {});
      });
      console.log(x + y);
    });
    // let y = getY();
    // console.log(y);
    // console.log(x + y);
  });

  //   let x = getX();
  //   console.log("x=>", x);

  //   let y = getY();
  //   console.log("y=>", y);

  //   console.log(x + y);
}

// getXY();

// const f = (x) => {
//   console.log(x);
// };

// f(510)

/** Promise */
/** pending */
/** fulfilled -> resolve */
/** fulfied -> reject */

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(55);
//     resolve(5);
//   }, 2000);
//   //
// });

// console.log(p);
// p.then((data) => {
//   console.log(data);
// }).catch((a) => {
//   console.log(a);
// });

function getX() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}
// delay for 3s
function getY() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(6);
    }, 3000);
  });
}

function getXY() {
  //   const y = getY()
  getX().then((x) => {
    getY().then((y) => {
      console.log(x + y);
    });
  });
}

// getXY();

const flip = () => {
  const coin = Math.floor(Math.random() * 2);
  return coin === 0 ? "head" : "tail";
};

// console.log(flip());

// const flipcoin = new Promise((res, rej) => {
//   setTimeout(() => {
//     const flipresult = flip();
//     if (flipresult === "head") {
//       res("you win => " + flipresult);
//     } else {
//       rej("you lose=> " + flipresult);
//     }
//   }, 2000);
// });

// flipcoin
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

const users = [
  { username: "aaa", email: "aaa@gmail.com" },
  { username: "bbb", email: "bbb@gmail.com" },
  { username: "ccc", email: "ccc@gmail.com" },
];
/** 1. getDataFromServer function return a Promise with users data
 * as Array of objects from server as json
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 *
 * 4. return to step 2, and create render function
 * that will display the users on the html page
 */

/** 1 */

const getDataFromServer = (arr) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (arr) res(JSON.stringify(arr));
      else rej("404 no data found");
    }, 2000);
  });
};

const render = (arr) => {
  const body = document.getElementsByTagName("body")[0];
  const html = arr.map((item) => {
    return `<div>
        ${item.username}  ${item.email} 
    </div>`;
  });
  body.innerHTML = html.join("");
};

/** 2 */

// console.log('before');
// getDataFromServer(users)
//   .then((data) => {
//     // console.log(JSON.parse(data));
//     // render(JSON.parse(data))
//     return JSON.parse(data);
//   })
//   .then((data) => {
//     // console.log(data);
//     return new Promise((res) => {
//       res(data.find((item) => item.username === "bbb"));
//     });
//   })
//   .then((user) => {
//     return user.email;
//   })
//   .then((usereamil) => {
//     console.log(usereamil);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   console.log('after');

/** Promises static methods */

// Promise.resolve
// Promise.reject

// function getX() {
//     // return new Promise((res) => {
//     //     res(5)
//     // })
//     return Promise.reject(333)
// }

// console.log(getX().catch(e=>console.log(e)));

/**
 * Promise.all(array)
 * Promise.allSettled(array)
 * Promise.race(array)
 * Promise.any(array)
 */

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolve promise1");
//   }, 2 * 1000);
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolve promise2");
//     // rej("reject promise2");
//   }, 3 * 1000);
// });

// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolve promise3");
//   }, 4 * 1000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((items) => {
//     console.log(items);
//   })
//   .catch((err) => {
//     console.log("error=>", err);
//   });


