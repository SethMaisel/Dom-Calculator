document.addEventListener('DOMContentLoaded', () => {
    const buttonDiv = document.querySelector('.buttons')
    const operators = document.getElementsByClassName('operator')
    const buttonArray = buttonDiv.childNodes
    let screenArray = []
    let operatorArray = []
    operatorArray.push(operators)
    buttonArray.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault()
            let screen = document.getElementById('screen')
               if (event.target.innerText === '÷'){
                    screen.innerText += '/'
                    screenArray.push('/')
                } else if (event.target.innerText === 'x'){
                    screenArray.push('*')
                } else if (event.target.id === 'equals') {
                    if (screen.innerText.includes('/0')) {
                        screen.innerText = 'SUPER ERROR'
                    } else {
                        screen.innerText = eval(screen.innerText)
                        screenArray = []
                    }
                } else {
                    screenArray.push(button.innerText)
                    screen.innerText = screenArray.join('')
                }
            if (event.target.id === 'clear'){
                screen.innerText = ''
                screenArray = []
            }
            if (screen.innerText === 'undefined'){
                screen.innerText = 'Error'
            }
        })
    })
})
