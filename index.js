var UserName = document.getElementById("Name");
var email = document.getElementById("signUpEmail");
var password = document.getElementById("signUpPassword");
var Users=[];
var isEmpty=false;
var isExist=false;
var validate = document.getElementById("validate");
var validate1 = document.getElementById("validate1");
var errMsg="Please fill  all fields."
var NotUser="you are not user please signUp"
var LoginEmail=document.getElementById("LoginEmail");
var LoginPassword=document.getElementById("LoginPassword");
var toPrintName;
if(localStorage.getItem("Users") != null){
    Users = JSON.parse(localStorage.getItem("Users"))
}
function clearInput(){
    UserName.value= "";
    email.value= "";
    password.value= "";
}
function Empty(){
    if(UserName.value === "" || email.value === "" || password.value === ""){
        isEmpty = true;
    }else{
        isEmpty = false;
    }
}
function IsValidSignUp(){
    Empty();
    if(isEmpty){
        validate.innerHTML=errMsg;
    }
    else{
        validate.innerHTML='';
        for(var i=0;i<Users.length;i++){
            if(email.value===Users[i].Email){
                isExist=true
            }
        }
        if(isExist){
            validate.innerHTML=`Email should not be repeated`;
        }else{
            var UserData={
                Name: UserName.value,
                Email: email.value,
                Password: password.value
            }
            Users.push(UserData);
            localStorage.setItem("Users", JSON.stringify(Users));
            clearInput();
        }
    }
}
function EmptyLog(){
    if(LoginEmail.value === "" || LoginPassword.value === ""){
        isEmpty = true;
    }else{
        isEmpty = false;
    }
}
function IsValidLogIn(){
    EmptyLog();
    if(isEmpty){
        validate1.innerHTML=errMsg;
    }
    else{
        validate1.innerHTML='';
        for(var i=0;i<Users.length;i++){
            if(LoginEmail.value == Users[i].Email && LoginPassword.value == Users[i].Password){
                validate1.innerHTML=``;
                window.location.href = 'home.html';
                toPrintName=i;
                localStorage.setItem("toPrintName", JSON.stringify(toPrintName));
             }
             else{
                validate1.innerHTML=NotUser;
             }
        }
    }
}