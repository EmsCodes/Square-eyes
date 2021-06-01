
const popularContainer = document.querySelector("#popular-movies");
const recentlyAdded = document.querySelector("#recently-added");
const recommended = document.querySelector("#recommended-movies");
const continueWatching= document.querySelector("#continue-watching");
const highlightedMovie = document.querySelector("#movies-highlight-content");


const url = "https://makra-stenkloev.no/Square-eyes/wp-json/wc/store/products";



async function fetchProducts(){
    
    try{

        const response = await fetch(url);

        const json = await response.json();

        const result = json; 

        purchaseBox(result);

         popularContainer.innerHTML = "";

         recentlyAdded.innerHTML = "";

         recommended.innerHTML = "";

         continueWatching.innerHTML = "";

        highlightedMovie.innerHTML = "";

        for(let i=0; i<result.length; i++){
            
            const movieHtml =
            `<div class="movie-content-container">
                <div class="container" style="background-image: url(${result[i].images[0].src}" alt="${result.name}">
                    <h4>${result[i].name} <i class="fas fa-heart"></i><i class="fas fa-shopping-cart"></i></h4>
                    <p>Rating: ${result[i].average_rating} <i class="fas fa-star"></i></p>
                </div>
            </div>`; 

            popularContainer.innerHTML += movieHtml;

            recentlyAdded.innerHTML += movieHtml;

            recommended.innerHTML += movieHtml;

            continueWatching.innerHTML += movieHtml;

            if(result[i].categories[0].name === "Highlight"){

            highlightedMovie.innerHTML += 
            `<div class="container-highlight" style="background-image: url(${result[i].images[0].src}" alt="${result[i].name}">
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


// confirm purchase/payment

const confirmPurchase = document.querySelector("#confirm-purchase");
const closingX = document.querySelector(".close-link");
const confirmBox = document.querySelectorAll(".box");



function purchaseBox(chosenMovie){

    chosenMovie.forEach(function(product){ 

        confirmBox.forEach(movieBox => {movieBox.addEventListener("click", function(){
    
            confirmPurchase.innerHTML += 
                        `<div id="confirm-box">
                            <div class="closing-icon">
                                <i class="fas fa-times"></i>
                            </div>
                            <h5 id="confirm-header">Confirm purchase</h5>
                            <p>Movie: ${product.name} </p>
                            <p>Price: ${product.price_html}</p>
                            <a href="selectedmovie.html?id=${product.id}""><button class="form-cta">Confirm payment</button></a>
                            <a href="payperview.html" id="close-link">Close</a>
                        </div>`;
                        
            }); 
        }) 
    }) 
}