let userNumber = document.querySelector('#user')
let computerNumber = document.querySelector('#computer')
let drawAll = document.querySelector('#draw')
let btnGenerate = document.querySelector('#btn-gen')

let userNumberCasual = Math.floor(Math.random () * 6 + 1)
let computerNumberCasual = Math.floor(Math.random () * 6 + 1)

userNumber.innerHTML = 'Hai tirato:' + userNumberCasual;
computerNumber.innerHTML = 'Il computer ha tirato:' + computerNumberCasual;


if (userNumberCasual > computerNumberCasual ) {
    drawAll.innerHTML = 'Hai vinto'
} else if (computerNumberCasual > userNumberCasual) {
    drawAll.innerHTML = 'Il computer ha vinto'
} else {
    drawAll.innerHTML = 'Pareggio'
}

btnGenerate,addEventListener('click', function () {
    location.reload()
})



