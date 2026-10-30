const countEl = document.getElementById("count")
const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const double = document.getElementById("double")

let count = 0

function update(){
    countEl.textContent = count
}

decrease.addEventListener("click", () => {
    count--
    update()
})
increase.addEventListener("click", () => {
    count++
    update()
})
reset.addEventListener("click", () => {
    count = 0
    update()
})
double.addEventListener("click", () => {
    count = count * 2
    update()
})


const themeToggle = document.getElementById("themeToggle")

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️"
    } else {
        themeToggle.textContent = "🌙"
    }
})