//Contact form validation and error-message

// const form = document.querySelector("form");
// const fullName = document.querySelector("#name");
// const nameError = document.querySelector("#nameError");
// const textarea = document.querySelector("#textarea");
// const textareaError = document.querySelector("#textarea-error");
// const email = document.querySelector("#email");
// const emailError = document.querySelector("#emailError");


// const message = document.querySelector("#message");
// const contactSubmitButton = document.querySelector("#contact-submit-button");


// function validateForm(event){
//     event.preventDefault();

//     if(checkLength(fullName.value, 0)){
//         nameError.style.display = "none";
//     }
//     else{
//         nameError.style.display = "block";
//     }
//     if(checkLength(textarea.value, 10)){
//        textareaError.style.display = "none";
//     }
//     else{
//         textareaError.style.display = "block";
//     }
//     if(validateEmail(email.value)){
//         emailError.style.display = "none";
//     }
//     else {
//         emailError.style.display = "block";
//     }
// }

// form.addEventListener("submit", validateForm);


// function checkLength(value, lenght) {
//     if (value.trim().length > lenght ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// }


//Fetch REST API

const url = "https://makra-stenkloev.no/Square-eyes/wp-json/wc/store/products";

const popularContainer = document.querySelector("#popular-movies");
const recentlyAdded = document.querySelector("#recently-added");
const recommended = document.querySelector("#recommended-movies");
const continueWatching= document.querySelector("#continue-watching");
const highlightedMovie = document.querySelector("#movies-highlight-content");



async function fetchProducts(){
    
    try{

        const response = await fetch(url);

        const json = await response.json();

        const result = json; 

         popularContainer.innerHTML = "";

         recentlyAdded.innerHTML = "";

         recommended.innerHTML = "";

         continueWatching.innerHTML = "";

        highlightedMovie.innerHTML = "";

        for(let i=0; i<result.length; i++){

            console.log(result[i].id);
            
            const movieHtml =
            `<div class="movie-content-container">
                <a href="selectedmovie.html?id=${result[i].id}">
                    <div class="container" style="background-image: url(${result[i].images[0].src};" alt="${result[i].name}">
                        <h4>${result[i].name} <i class="fas fa-heart"></i></h4>'
                        <p>Rating: ${result[i].average_rating} <i class="fas fa-star"></i></p>
                    </div>
                </a>
            </div>`; 

            popularContainer.innerHTML += movieHtml;

            recentlyAdded.innerHTML += movieHtml;

            recommended.innerHTML += movieHtml;

            continueWatching.innerHTML += movieHtml;

            if(result[i].categories[0].name === "Highlight"){

            highlightedMovie.innerHTML += 
            `<div class="container-highlight" style="background-image: url(${result[i].images[0].src};" alt="${result[i].name}">
            <div id="highlight-text">
                <h4>${result[i].name}</h4>
                <p class="short-movie-description">${result[i].short_description}</p>
            </div>
            </div>`
            }
        }
    }
    catch(error){
        console.log(error);
    }
}

fetchProducts();


//Create html from API

// function createHtml(products){
    
//     popularContainer.innerHTML = "";

//     recentlyAdded.innerHTML = "";

//     recommended.innerHTML = "";

//     continueWatching.innerHTML = "";

//     highlightedMovie.innerHTML = "";

//     products.forEach(function(product){ 

//        const movieHtml =`<div class="movie-content-container">
//                             <a href="selectedmovie.html?id=${product.id}">
//                                 <div class="container" style="background-image: url(${product.images[0].src};" alt="${product.name}">
//                                     <h4>${product.name} <i class="fas fa-heart"></i></h4>'
//                                     <p>Rating: ${product.average_rating} <i class="fas fa-star"></i></p>
//                                 </div>
//                             </a>
//                         </div>`; 

//         popularContainer.innerHTML += movieHtml;

//         recentlyAdded.innerHTML += movieHtml;

//         recommended.innerHTML += movieHtml;

//         continueWatching.innerHTML += movieHtml;

//         if(product.categories[0].name === "Highlight"){

//             highlightedMovie.innerHTML += 
//             `<div class="container-highlight" style="background-image: url(${product.images[0].src};" alt="${product.name}">
//                 <div id="highlight-text">
//                     <h4>${product.name}</h4>
//                     <p class="short-movie-description">${product.short_description}</p>
//                 </div>
//             </div>`
//         }
//     })
// }