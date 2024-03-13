const passwordText = document.getElementById("passwordtext");
const eyeslashdiv = document.getElementById("eyeslashdiv");
const eyeslash = document.getElementById("eyeslash");
const emailbox = document.getElementById("emailbox");
const uyari = document.getElementById("uyari");

const uyazi = document.createElement("p");
const node = document.createTextNode("Invalid emaid address");
uyazi.appendChild(node);
uyazi.style.color="red", uyazi.style.padding="5px 0";


let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var isValid = 1;

eyeslashdiv.addEventListener("click", function () {
  if (passwordText.type === "password") {
    passwordText.type = "text";
    eyeslashdiv.style.opacity = "1";
    eyeslash.classList.remove("fa-eye-slash");
    eyeslash.classList.add("fa-eye");   
  } else {
    passwordText.type = "password";
    eyeslashdiv.style.opacity = ".4";
    eyeslash.classList.remove("fa-eye");
    eyeslash.classList.add("fa-eye-slash");
  }
});

emailbox.addEventListener("blur", function () {
  if (emailbox.value.match(validRegex)) {
   	if(isValid === "0"){
   		emailbox.style.borderColor="rgba(0,0,0,0.4)";
   		uyari.innerHTML="";
   	}
   	isValid = "1";
  } else {
  	if(isValid == "1"){	
  		emailbox.style.borderColor="red";
		uyari.appendChild(uyazi);	
  	}
  	isValid = "0";
  }
});
