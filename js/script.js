/*
	-=[ Milestone 1 ]=-
	Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
	in cui è presente il nome dell'icona e l'icona stessa.

	-=[ Milestone 2 ]=-
	Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare
	le icone del colore corrispondente.

	-=[ Milestone 3 ]=-
	Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
	(animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare
	solamente le icone corrispondenti.

	-=[ BONUS ]=-
	1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico:
	generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal
	simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

	2- popolare le options della select della milestone 3 dinamicamente.
*/

// Given structure
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green'
	},
		{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue'
	},
		{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue'
	},
		{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue'
	}
];

// Filter event listener
let select = document.querySelector("select[name='typeOfSearch']");

select.addEventListener("change", function() {filter(this.value)});

function filter(item){
	// Get the container 
	let container = document.getElementById("myspace");

	// Clear the container
	container.innerHTML = "";

	// Foreach element in the icons arry
	icons.forEach(element => {
		// If icon element matches the select value
		if(element.type == item || item == "all")
			// Generate the card with the element data
			container.innerHTML += `
			<div class="myExCard">
				<div class="d-flex flex-column align-items-center justify-content-center card p-2 py-3 display-2">
					<i class="${element.prefix}${element.family} ${element.prefix}${element.name} my-${element.color} py-2"></i>
					<h4 class="text-uppercase m-0">${element.name}</h4>
				</div>
			</div>`;
	});
}

filter("all");