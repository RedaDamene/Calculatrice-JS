const buttons = document.querySelectorAll('.btn')
const result = document.getElementById('result')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
buttons.forEach((btn => {
    btn.addEventListener('click', (e) => {
        result.textContent += e.target.id
    })

    clear.addEventListener('click', () => {
        result.textContent = ""
    })
}))