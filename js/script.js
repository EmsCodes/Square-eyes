//confirm purchase/payment

const confirmPurchase = document.querySelector("#confirm-purchase");
const movieBox = document.querySelector(".container");

movieBox.onclick = function confirmBox(){
    
    confirmPurchase.innerHTML = `<div id="confirm-box">
                                    <div class="closing-icon">
                                    <a href="payperview.html">
                                    <i class="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <h1 id="confirm-header">Confirm purchase</h1>
                                    <p>Movie: Name</p>
                                    <p>Price: 5$</p>
                                    <a href="selectedmovie.html"><button class="form-cta">Confirm payment</button></a>
                                    <a href="payperview.html" id="close-link">Close</a>
                                    </div>`
}

//Contact form validation and error-message

const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const textarea = document.querySelector("#textarea");
const textareaError = document.querySelector("#textarea-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");


const message = document.querySelector("#message");
const contactSubmitButton = document.querySelector("#contact-submit-button");


function validateForm(event){
    event.preventDefault();

    if(checkLength(fullName.value, 0)){
        nameError.style.display = "none";
    }
    else{
        nameError.style.display = "block";
    }
    if(checkLength(textarea.value, 10)){
       textareaError.style.display = "none";
    }
    else{
        textareaError.style.display = "block";
    }
    if(validateEmail(email.value)){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);


function checkLength(value, lenght) {
    if (value.trim().length > lenght ) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
