

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

        console.log(result);

        createHtml(result);
        purchaseBox(result);
        
    }

    catch(error){
        console.log(error);
    }
}

fetchProducts();


//Create html from API

function createHtml(products){
    
    popularContainer.innerHTML = "";

    recentlyAdded.innerHTML = "";

    recommended.innerHTML = "";

    continueWatching.innerHTML = "";

    highlightedMovie.innerHTML = "";

    products.forEach(function(product){ 

       const movieHtml =`<div class="movie-content-container">
                                <div class="container" style="background-image: url(${product.images[0].src};" alt="${product.name}">
                                    <h4>${product.name} <i class="fas fa-heart"> <i class="fas fa-shopping-cart"></i></i></h4>'
                                    <p>Rating: ${product.average_rating} <i class="fas fa-star"></i></p>
                                </div>
                        </div>`; 

        popularContainer.innerHTML += movieHtml;

        recentlyAdded.innerHTML += movieHtml;

        recommended.innerHTML += movieHtml;

        continueWatching.innerHTML += movieHtml;

        if(product.categories[0].name === "Highlight"){

            highlightedMovie.innerHTML += 
            `<div class="container-highlight" style="background-image: url(${product.images[0].src};" alt="${product.name}">
                <div id="highlight-text">
                    <h4>${product.name}<i class="fas fa-shopping-cart"></i></h4>
                    <p class="short-movie-description">${product.short_description}</p>
                </div>
            </div>`
        }
    })
}

//confirm purchase/payment

const confirmPurchase = document.querySelector("#confirm-purchase");
const closingX = document.querySelector(".close-link");
const confirmBox = document.querySelectorAll(".box");



function purchaseBox(chosenMovie){

    chosenMovie.forEach(function(product){ 

        confirmBox.forEach(movieBox => {movieBox.addEventListener("click", function(){
    
            confirmPurchase.innerHTML += 
                        `<div id="confirm-box">
                            <div class="confirm-box-image" style="background-image: url(${product.images[0].src};" alt="${product.name}"></div>
                            <div class="closing-icon">
                                <i class="fas fa-times"></i>
                            </div>
                            <h5 id="confirm-header">Confirm purchase</h5>
                            <p>Movie: ${product.name} </p>
                            <p>Price:${product.price_html}</p>
                            <a href="selectedmovie.html?id=${product.id}""><button class="form-cta">Confirm payment</button></a>
                            <a href="payperview.html" id="close-link">Close</a>
                        </div>`;
                        
            }); 
        }) 
    }) 
}