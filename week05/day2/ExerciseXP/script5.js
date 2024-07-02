// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

function exercise5(){

    const container = document.getElementById('container')
    console.log(container)
    const lists = document.getElementsByClassName('list')
    let firstList = lists[0]
    let secondList = lists[1]

    let items1 = firstList.getElementsByTagName('li')
    let items2 = secondList.getElementsByTagName('li')



    items1[1].innerHTML = 'Richard'

    items2[1].remove()

    for (let list of lists) {
        let items = list.getElementsByTagName('li')
        items[0].innerHTML = "Sergey"
    }
    firstList.classList.add('student_list')
    secondList.classList.add('student_list')

    firstList.classList.add('university')
    firstList.classList.add('attendance')


    container.style.backgroundColor = 'lightblue'
    container.style.padding = '20px'
    let items = container.getElementsByTagName('li')
    for (let item of items) {
        if (item.innerHTML === 'Dan') {
            item.style.display = 'none'
        }
        if (item.innerHTML === 'Richard') {
            item.style.border = '1px solid black'
        }
    }

    document.body.style.fontSize = '20px'
    
    

    //document.style.fo


}

