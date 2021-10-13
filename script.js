const fonts = [
    'Arial', 
    'Arial Black', 
    'Verdana', 
    'Tahoma', 
    'Trebuchet MS', 
    'Impact', 
    'Times New Roman', 
    'Didot', 
    'Georgia', 
    'American Typewriter', 
    'Andalé Mono', 'Courier', 
    'Lucida Console', 'Monaco', 
    'Bradley Hand', 
    'Brush Script MT', 
    'Luminari', 
    'Comic Sans MS'
];
const colors = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen',
];

// Random Color API
// https://www.colourlovers.com/api/colors/random&format=json

// Add Javascript Here

/* SELECT FONTS */
let fontSelection = document.querySelector("#font-selection");
let previewPlaceholder = document.querySelector("#preview-placeholder");
// Array of fonts. For each of these, we will create an element.
for (let font of fonts) {
    let option = document.createElement("option");
    option.textContent = font;
    option.value = font;
    // option.style.fontFamily = font // josh: try to change font on selection
    fontSelection.append(option);
}

/* Change the `previewPlaceholder` to selected option */
fontSelection.addEventListener("change", (e)=>{
    // console.log("trigger", e.target.value);
    previewPlaceholder.style.fontFamily = e.target.value;
})


/* SELECT COLORS */
let colorSelection = document.querySelector("#color-selection");
for (let color of colors) {
    let option = document.createElement("option");
    option.textContent = color;
    option.value = color;
    // option.style.color = color; // josh: try to change font on selection
    colorSelection.append(option);
}

/* Change the `previewPlaceholder` to selected option */
colorSelection.addEventListener("change", (e)=>{
    // console.log("trigger", e.target.value);
    previewPlaceholder.style.color = e.target.value;
})

/* Add an Event Listener to the `textarea` box */
let textInput = document.querySelector("#text-input");
textInput.addEventListener("input", (e)=>{
    /* e.target.value is extremely common (will be using it heavily in the future) */
    // console.log("Trigger", e.target.value);
    previewPlaceholder.textContent = e.target.value;
})


/*
SELECT SAVE BUTTON
Grab multiple elements from this page, and then do something
*/
let button = document.querySelector("#save-button");
button.addEventListener("click", ()=>{
    /* Console.log the 3 values we want. Use `.value` to have access to them */
    console.log(textInput.value, fontSelection.value, colorSelection.value);
    /* Select our `list` ul. Create a list item element */
    let list = document.querySelector("#saved-list ul");
    let li = document.createElement("li");

    /* Using `textContent` on the list item bc its informational */
    li.textContent = textInput.value; // add text content
    li.style.fontFamily = fontSelection.value; // change styling - font
    li.style.color = colorSelection.value; // change styling - color
    // <li>
    //     BlahBlahBlah
    // </li>
    /* Append it to our page */
    list.append(li);
});


/* //////////// STAR WARS CODE //////////// */
/*
Fetch this data:
https://swapi.dev/api/people/ - star wars
OR...insert any API you want to look at.

Going to make a div for every one of these characters.
*/
let starWars = document.querySelector("#star-wars");
fetch("https://swapi.dev/api/people/")
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data.results);
        let characterList = data.results;

        /* iterate through `characterList` */
        for (let character of characterList){
            let div = document.createElement("div");
            div.textContent = character.name;
            /* Appending children to this div for every character in the `data` object */
            starWars.append(div);
        }
    })
    .catch((err)=>{
        console.log(err);
    })












/*
Select these values
create a list item
Save these values
 */

/*
while typing in `#text-input` value needs to be in preview
Add text to preview
Add font to preview - selecting font - array of fonts
Add color to preview - selecting color - array of colors
`#save-button` - add event listener
add text from preview to `#saved-list`
*/

/* christina found this:
https://www.thecolorapi.com/id?hex=24B1E0
*/

/*
Greg didn't use in class:
http://hp-api.herokuapp.com/api/characters - harry potter
*/