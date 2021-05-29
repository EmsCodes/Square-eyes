const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);


const url = "https://makra-stenkloev.no/Square-eyes/wp-json/wc/store/products/" + id;

async function getDetails() {

    container.innerHTML ="";

	try {
		const response = await fetch(url);
		const details = await response.json();

		const result = details;

		console.log(result);

        container.innerHTML += 
        `<div>
            <div class="flex-container">
            <div class="movie-container" style="background-image: url(${result.images[0].src};" alt="${result.name}"</div>
            </div>
            <div class="movie-text-area">
            <h1>${result.name}</h1>
            <p class="movie-info movie-text">
            ${result.description}
            </p>
            </div>
        </div>`


	} catch (error) {
		console.log(error);
	}
}

getDetails();
