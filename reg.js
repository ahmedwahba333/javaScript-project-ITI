var UserName = document.getElementById("fname");
var UserPass = document.getElementById("pass");
var ConfirmPass = document.getElementById("confirm password");
var UserEmail = document.getElementById("email");
var form = document.getElementsByTagName('form')[0];




function NameValid()
{
    if(UserName.value.length < 5)
    {
        UserName.style.border="red 2px solid"
        document.getElementById("err").style.display="block";


    }else
    {
        UserName.style.border="1px green solid";
        document.getElementById("err").style.display="none";
    }
}



// function ValidPass(){

//     if (UserPass.value==ConfirmPass.value){
//         ConfirmPass.style.border="2px green solid"
//         document.getElementById("err3").style.display="none";



//     }
//     else{
//         ConfirmPass.style.border="2px red solid"
//         document.getElementById("err3").style.display="block";


//     }

// }



function ValidEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (UserEmail.value.match(validRegex)) {
        UserEmail.style.border = "2px green solid"
        document.getElementById("err2").style.display = "none";

    }
    else {
        UserEmail.style.border = "2px red solid"
        document.getElementById("err2").style.display = "block";

    }


}


function SetInfo(e) {




    e.preventDefault();



    
    if (UserPass.value.length < 5) {
        UserPass.style.border = "2px red solid";
        document.getElementById("err5").style.display = "block";
        return;

    } else if (UserPass.value !== ConfirmPass.value) {

        UserPass.style.border = "2px red solid";
        document.getElementById("err3").style.display = "block";
        return;
    } else if (UserPass.value == ConfirmPass.value) {
        UserPass.style.border = "2px green solid";
        document.getElementById("err3").style.display = "none";
        document.getElementById("err5").style.display = "none";


        localStorage.setItem('username', UserName.value);
        localStorage.setItem('password', UserPass.value);
        localStorage.setItem('email', UserEmail.value);

        location.assign("./log2.html")

    }

}