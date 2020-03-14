var attempt = 3
function validation(){
    
    let firstname = document.querySelector('#firstname')
    let lastname = document.querySelector('#lastname')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirmPassword')

    if(firstname.value == '' || lastname.value == '' || email.value == '' || password == '' || confirmPassword == '' ){
        alert('field should not be empty')
    }else if(password.value !== confirmPassword.value){
        alert('password mis-matching')
    }else if(email.value == 'user@gmail.com' && password.value == 'password') {
        window.location = 'login.html'
        return false
    }else {
        attempt--;
        alert(`You have ${attempt} attempts remaining`)
        if (attempt == 0) {
            document.querySelector('#btmbutton').disabled = true
            return false
        }
    }
}

function login(){
    window.location = 'login.html'
    return false
}

    
    // if( email.value == 'user@gmail.com' && password.value == 'password') {
    //     window.location = "welcome.html";
    //     return false

    // }else
    // {
    //     attemp--;
    //     alert(`You have ${attemp} attempts remaining`)
    //     if (attemp == 0) {
    //         document.querySelector('#btmbutton').disabled = true;
    //         return false
    //     }
    // }
