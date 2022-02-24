let inputEmailUser = document.querySelector('#email-user');
let btnCheck = document.querySelector('#btn-check')
let arrEmail = ['email@gmail.com', 'email1@gmail.com', 'email2@gmail.com', 
'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com'];


btnCheck.addEventListener('click', function () {
    for ( let inputUserName = 0; inputUserName <= arrEmail.length -1; inputEmailUser++) {
        if (arrEmail[inputEmailUser] = inputEmailUser)
    
        document.getElementById('output').innerHTML = `${inputEmailUser}, la tua E-mail e' gia' registrata.`
    }    


})
