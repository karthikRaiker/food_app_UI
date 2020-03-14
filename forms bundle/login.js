var attemp = 3

function validate(){
    
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    
    if( email.value == 'user@gmail.com' && password.value == 'password') {
        window.location = "welcome.html";
        return false

    }else
    {
        attemp--;
        alert(`You have ${attemp} attempts remaining`)
        if (attemp == 0) {
            document.querySelector('#btmbutton').disabled = true;
            return false
        }
    }
}