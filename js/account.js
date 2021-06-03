const url = "https://makra-stenkloev.no/Square-eyes/wp-json/wc/store/products";

const favourites =document.querySelector("#favourites");
const purchases =document.querySelector("#purchases");

async function fetchMovies(){
    
    try{

        const response = await fetch(url);

        const json = await response.json();

        const result = json; 
            
        favourites.innerHTML = "";

        purchases.innerHTML = "";

    for(let i=0; i<result.length; i++){
        
        const movieHtml =
        `<div class="movie-content-container">
            <a href="selectedmovie.html?id=${result[i].id}">
                <div class="container" style="background-image: url(${result[i].images[0].src}" alt="${result[i].name}">
                    <h4>${result[i].name} <i class="fas fa-heart"></i></h4>
                    <p>Rating: ${result[i].average_rating} <i class="fas fa-star"></i></p>
                </div>
            </a>
        </div>`; 

            favourites.innerHTML += movieHtml;

            purchases.innerHTML += movieHtml;
        }
    }
    catch(error){
        console.log(error);
    }
}

fetchMovies();