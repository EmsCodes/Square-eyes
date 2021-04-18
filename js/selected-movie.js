const h1Title = document.querySelector("#title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);


const url = "https://makra-stenkloev.no/Square-eyes/wp-json/wc/store/products/" + id;

async function getDetails() {
	try {
		const response = await fetch(url);
		const details = await response.json();

		const result = details;

		console.log(result);

        h1Title.innerHTML = 
        `<div>
          <h1>${result.id}</h1>
        </div>`


	} catch (error) {
		console.log(error);
	}
}

getDetails();
