let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let display = document.getElementById("display")
let value = 0

increment.addEventListener("click" , function() {
    value += 1
    display.textContent = value
} )

decrement.addEventListener("click" , function() {
    if (value >0){
        value -= 1
        display.textContent = value
    }
})