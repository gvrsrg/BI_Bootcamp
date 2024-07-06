// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

function ex2(){
    const form = document.querySelector('form')
    console.log(form)
    const fName = document.querySelector('#fname')
    console.log(fName)
    const lName = document.querySelector('#lname')
    console.log(lName)

    const firstName = document.querySelector('input[name="firstname"]')
    console.log(firstName)
    const lastName = document.querySelector('input[name="lastname"]')
    console.log(lastName)


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const firstName = document.querySelector('#fname').value
        const lastName = document.querySelector('#lname').value
        if (firstName === '' || lastName === '') {
            alert('Please fill in all the fields')
            } else {
                const usersAnswer = document.querySelector('.usersAnswer')
                const lifname = document.createElement('li')
                lifname.textContent = firstName
                usersAnswer.appendChild(lifname)
                const lilname = document.createElement('li')
                lilname.textContent = lastName
                usersAnswer.appendChild(lilname)
            }
    })
}

ex2()