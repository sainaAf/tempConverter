let $ = document

let titleElem = $.querySelector('.title')
let inputElem = $.querySelector('.input')
let convertBtn = $.querySelector('.convert')
let resetBtn = $.querySelector('.reset')
let changeBtn = $.querySelector('.change')
let showResult = $.querySelector('.result')


convertBtn.addEventListener('click', function () {
    let inputValue = inputElem.value

    if (inputElem.placeholder == 'C') {
        let result = (inputValue * 9 / 5) + 32
        result.toFixed(2)
        if (isNaN(result)) {
            showResult.innerHTML = 'please enter correct value'
        } else {
            showResult.innerHTML = 'C to F : ' + result.toFixed(2)
        }

    }
    if (inputElem.placeholder == 'F') {
        let result = (inputValue - 32) * 5 / 9
        if (isNaN(result)) {
            showResult.innerHTML = 'please enter correct value'
        } else {
            showResult.innerHTML = 'F to C : ' + result.toFixed(2)
        }

    }
})

resetBtn.addEventListener('click', function () {
    inputElem.value = ''
    showResult.innerHTML = ''
})

changeBtn.addEventListener('click', function () {

    if (inputElem.placeholder == 'C') {
        titleElem.innerHTML = 'Convert F to C'
        inputElem.placeholder = 'F'
    }
    else {
        titleElem.innerHTML = 'Convert C to F'
        inputElem.placeholder = 'C'
    }
})