// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
// {name: "John", lastName: "Doe"}


const form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const lastName = document.querySelector("#lastname").value
    const person = {
        name: name,
        lastName: lastName
    }
    const newPerson = document.createElement("div")
    newPerson.textContent = JSON.stringify(person)
    document.querySelector("#result").appendChild(newPerson)

})



