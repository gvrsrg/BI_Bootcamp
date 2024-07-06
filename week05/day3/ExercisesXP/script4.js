//Write a JavaScript program to calculate the volume of a sphere. 

function sphereVolume(radius){
    return (4/3)*Math.PI*radius**3;
}

function ex4(){
    const form = document.querySelector('#MyForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const radius = document.querySelector('#radius').value
        console.log(radius)
        const inputVolume = document.querySelector('#volume')
        if(isNaN(radius)){
            inputVolume.value = ''
            alert('Please enter a number')
            return
        }
        inputVolume.value = sphereVolume(parseFloat(radius))
    })
}

ex4()