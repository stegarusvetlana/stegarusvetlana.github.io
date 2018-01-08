document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded(){

}

function validare(){
    var inputFirst = document.getElementById('fname');
    var inputLast = document.getElementById("lname");
    var banner = document.getElementById('confirmation-banner');
    
    if (inputFirst.value == ''){
        inputFirst.className = "border-red";
    } else {
        inputFirst.classList.remove("border-red");
    }
    
    if (inputLast.value == ''){
        inputLast.className = "border-red";
    } else {
        inputLast.classList.remove("border-red");
    }
    
    if  (inputFirst.value != '' && inputLast.value != ''){
        banner.className = "show";
        banner.innerHTML = "Thank you for contacting us, " + inputFirst.value;
        
        console.log('First name: ' + inputFirst.value);
        console.log('Last name: ' + inputLast.value);
    } else {
        banner.innerHTML = "";
        banner.classList.remove("show");
    }
    
    
    var valueGender = document.querySelector('input[name="gender"]:checked').value;
       console.log('Gender:' + valueGender);
    var subjectValue = document.querySelector('textarea[name=message]').value;
        console.log(subjectValue);
}
    
    
    
    
    

