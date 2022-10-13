const buttons = document.querySelectorAll('.btn')
const result = document.getElementById('result')

buttons.forEach((btn => {
    btn.addEventListener('click', (e) => {
        result.textContent += e.target.id
    })
}))

clear.addEventListener('click', () => {
    result.textContent = ""
})

equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent)
})