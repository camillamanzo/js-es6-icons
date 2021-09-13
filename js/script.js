/*
 * Milestone 1
 * Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
 * 
 * Milestone 2
 * Coloriamo le icone per tipo           
 *
 * Milestone 3
 * Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */

const icons =
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = ["teal", "magenta", "orange"]
let row = document.querySelector("#icon-row");
console.log(row);
printToPage(icons, row)
console.log(getPropertyValue(icons, "type"))
const colorizedItems = colorItems(icons, colors)
printToPage(colorizedItems, row)


// Creating a function that prints content on HTML.
function printToPage(array, container){
    let htmlContent = "";

    array.forEach(element => {
        const {name, prefix, type, family, color} = element;

        htmlContent += 
        `<div class="col-3"> 
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <h4 class="my_title">${name} (${type})</h4>
        </div>
        `
    });

    container.innerHTML = htmlContent;
}

//Creating a function that makes an array with the selected property in the element (without repetitions).
function getPropertyValue(array, property){
    const types = []

    array.forEach ((element, index) => {
        if(!types.includes(element[property]))types.push(element[property]);
    })

    return types;
}

//creating a function that colors items according to the type
function colorItems (array, colors){

    const types = getPropertyValue(array, "type");
    console.log = types;

    const colorItems = array.map((element) => {

        const indexOfType = types.indexOf(element.type);
        if( indexOfType !== -1 ){
            element.color = colors[indexOfType];
        }
        return element
    })
    return colorItems;
}




