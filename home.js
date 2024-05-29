var hello=document.getElementById("Hello");
if(localStorage.getItem("toPrintName") != null){
    toPrintName = JSON.parse(localStorage.getItem("toPrintName"))
}
if(localStorage.getItem("Users") != null){
    Users = JSON.parse(localStorage.getItem("Users"))
}
hello.innerHTML=`Welcome ${Users[toPrintName].Name}`;