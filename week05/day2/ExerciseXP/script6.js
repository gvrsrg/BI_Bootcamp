// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
// Display the text of each link. (Hint: use the textContent property).

function exercise6(){

    const navBar = document.getElementById('navBar')

    navBar.setAttribute('id', 'socialNetworkNavigation')

    const list = document.getElementsByTagName('ul')

    const newItem = document.createElement('li')
    const textNode = document.createTextNode("Logout");
    newItem.append(textNode)

    list[0].appendChild(newItem)

    const first = list[0].firstElementChild
    const last = list[0].lastElementChild

    console.log(first.textContent)
    console.log(last.textContent)

}
