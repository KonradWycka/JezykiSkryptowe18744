
function checkForm() {
var error=false;
var contactName=document.getElementById("imienazwisko");
var contactEmail=document.getElementById("email");

if (contactName.value==""){
document.GetElementById('errorName').className='alert alertdanger' += "imię\n"
error=true;
}

if (contactEmail.value=="") {
document.GetElementById('errorMail += "emial\n"
error=true;
}
else {
var emaill=contactEmail.value;
var regex= /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
 if (regex.test(emiall)==false)
 {
 errorText +="błedny email\n";
 error=true;
 }
 }

if (!error) return true; else {
alert ("Nie wypełniłeś następujących pól:\n" + errorText);
return false;}
}


