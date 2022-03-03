const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2')
const button = document.getElementById('button')
function getFieldName(input){
    console.log(input.id)
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}
function btnDisable(){
    button.className = "btn btn-disable";
}
function btnSuccess(){
    button.className = "btn btn-primary";
}

form.addEventListener('submit',function(e){
e.preventDefault();
checkRequired([username,email,password,password2]);
checkPasswordMatch(password, password2);
})
window.onload = function() {
    btnDisable();
  };
function checkRequired(inputAttributes){
inputAttributes.forEach(function(input){
    if(input.value.trim()===''){
        showError(input,`${getFieldName(input)} is Required`);
    }
    else{
        showSuccess(input);
        btnSuccess();
    }
})
}

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    console.log(small)
    small.innerText = message;
    console.log(small.innerText)
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function checkPasswordMatch(password1,password2){
    console.log(password1);
    console.log(password2);
if(password1.value!=password2.value){
    showError(password2,"Passwords Not Match")
}
}