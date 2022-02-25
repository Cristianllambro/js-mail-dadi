let btnCheck = document.querySelector('#btn-check')
let btnClear = document.querySelector('#clear')
let output = document.querySelector('#output')

let arrEmail = [
    'email@gmail.com', 
    'email1@gmail.com', 
    'email2@gmail.com', 
    'email3@gmail.com', 
    'email4@gmail.com', 
    'email5@gmail.com'
];

let register = false

btnCheck.addEventListener('click', function () {
    
    let inputEmailUser = document.querySelector('#email-user').value;

    for ( let i = 0; i < arrEmail.length; i++) {
        if (arrEmail[i] == inputEmailUser) {
            register = true
        }
    }

    if (register) {
        output.innerHTML = 'La tua E-mail è già registrata'
    }else {
        output.innerHTML = 'La tua E-mail non è registrata'
    }

})

btnClear.addEventListener('click', function () {
    let inputEmailUser = document.querySelector('#email-user').value = '';
    output.innerHTML = '';
})
