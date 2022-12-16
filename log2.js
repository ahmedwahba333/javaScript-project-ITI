var password = document.getElementById('pass');
var email = document.getElementById('email');
var form = document.getElementsByTagName('form')[0];

function GetInfo(e)
{
    e.preventDefault();

    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    if (email.value == storedEmail && password.value == storedPw) {
      location.assign("./index.html")
    } else {
        alert('Error on login');
    }
}