function showMessage(){
    mess = document.createElement('div')
    mess.setAttribute('id','message')
    mess.innerHTML = "helloworld"
    document.body.append(mess)
}

function deleteMessage(){
    mess = document.getElementById('message')
    mess.parentNode.removeChild(mess)
}


function startShowing(){
    showMessage()
    setTimeout(deleteMessage,10000)

}

let toShow = setInterval(showMessage, 5*1000)
let toDelete = setInterval(deleteMessage, 10*1000)
