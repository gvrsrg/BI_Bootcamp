
let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("container");
        data.forEach(user => {
            const div = document.createElement("div");
            div.innerHTML = `${user.name}`;
            container.appendChild(div);
        });
    })
    .catch(error => console.log(error))

let postOptions = {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        title: "My Title 3",
        body: "foo foo foo",
        userId: 4
    })
}

fetch(url, postOptions)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log(error))

function submitUser(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData)
    let {name, username, email} = Object.fromEntries(formData.entries())
    console.log(name, username, email)
    console.log(JSON.stringify(Object.fromEntries(formData.entries())))


    fetch('https://users-18kl.onrender.com/userjson', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({name, username, email})
      })
      .then((response) => { 
        return response.json()
      })
      .then((data) => { 
        const container = document.getElementById("userjson");
        container.innerHTML =  data.map((item) => {
            return `<div>${item.name} ${item.username} ${item.email}</div>`;
        }).join('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
const form = document.getElementById('form');

form.addEventListener('submit', submitUser);

async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

}

getUsers()