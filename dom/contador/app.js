// inicializando nuestro contador
let count = 0

let value = document.getElementById('contador')
//const btnIncrement = document.getElementsByClassName('.increment')
//const btnDecrement = document.getElementsByClassName('.decrease')


function increment() {
    value = count++
    document.getElementById('contador').innerHTML = value + 1
}

function decrement() {
    value = count--
    document.getElementById('contador').innerHTML = value - 1
}