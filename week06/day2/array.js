function addEmail(arr){
    emailArr = [...arr]
    emailArr.forEach((user,i)=> {emailArr[i] = `${user}@gmail.com`})
    return emailArr
}
//console.log(addEmail(["John", "Jane", "Bob"]));

function x2(arr){
    newArr = [...arr]
    newArr.forEach((x,i)=> newArr[i] = x*2)
    return newArr
}

//console.log(x2([1,2,3,4,5,6,7,8,9]));

let users = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 4, name: "Or", email: "aaa@gmail.com" },
  ];

function renderUsers(users){
    let userContainer = document.getElementById("userContainer")
    let result = users.map((user) =>{
        return `<p> ${user.name} : ${user.email}<\p>`
    })
    userContainer.innerHTML = result.join('')
}

renderUsers(users)

function array3(arr) {
    let newArr = []
    arr.forEach((x)=> {
        if (x>3){
            newArr.push(x)
        }
        })
        return newArr

    
}


console.log(array3([0,1,1,1,3,4,5,6]));

console.log(users.filter((user)=> {
    return user.name.toLowerCase().indexOf('o') != -1
}))


function howManyCandles(arr){
    maxCandle = Math.max(...arr);
    console.log(maxCandle);
    count = arr.filter(item => item===maxCandle).length
    return count
}

console.log(howManyCandles([2,8,4,4,8,1,8]))
let [a,b,c] = [2,8,4,4,8,1,8]
console.log(d, a,b,c,)
