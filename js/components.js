function message(error, message = "Error") {
    return `<div class="error" id="error"${error}">${message}</div>`;
}


// movie options dropdown-menu

const optionsButton = document.querySelector(".dropdown-button");
const optionsList = document.querySelector(".side-nav");
const optionBtnArrow = document.querySelector(".fa-chevron-down");


function dropDownMenu(){

    if(optionsList.style.display === "none"){

        optionsList.style.display = "block";
        optionBtnArrow.style.transform = "rotate(0.5turn)";

    }else{
        optionsList.style.display = "none"
        optionBtnArrow.style.transform = "none";
    }

}
