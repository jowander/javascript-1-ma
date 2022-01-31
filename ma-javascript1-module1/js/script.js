const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1:
// Create an object called cat.
// Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
    complain: "Meow!"
}

function catComplain() {
    console.log(cat["complain"]);
}

catComplain()

// Question 2:
// Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.

const heading = document.querySelector("h3");

// Question 3:
// Use the style property on the heading variable from the question above to change its font size to "2em".

heading.style.fontSize = "2em";

// Question 4:
// Add a class to the heading variable called subheading.

heading.classList.add("subheading");

// Question 5:
// Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
// Loop through the p elements and change the colour of each to "red"

const myParagraph = document.querySelectorAll("p");

for (let i = 0; i < myParagraph.length; i++) {
    if (i < myParagraph.length) {
        myParagraph[i].style.color = "red";
    }
}

// Question 6:
// Select the div with a class of results, 
// assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.

const resultsContainer = document.querySelector(".results");
const paragraphText = "New Paragraph";

resultsContainer.innerHTML = `<p>${paragraphText}</p>`;

// Question 7:
// Create a function that has one parameter called list.
// Inside the function, loop through the list parameter and console log the name property in each object.
// Call the function and pass in the cats variable in the script.js file in the repo.

function catList(list) {
    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}

catList()

// Question 8:

// Create a function called createCats. The function will have one parameter called cats.
// Inside the function loop through the value passed in as cats and create HTML for each object in the array.
// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
// If the age property is missing, it should display “Age unknown” instead.
// Return the HTML from the function.
// Call the function and pass in the cats array as the argument.
// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.

const newDivs = document.querySelector(".cat-container");

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let catName = cats[i].name;
        let catAge = cats[i].age;
        if (catAge === undefined) {
            catAge = "Age Unknown";
        }
        html += `<div><h5>${catName}</h5><p>${catAge}</p></div>`;
    }
    newDivs.innerHTML = html;
}

createCats(cats)


/*
const newDivs = document.querySelector(".cat-container");


function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        const catName = cats[i].name;
        const catAge = cats[i].age;
        if ((cats[i].age === "number") && (cats[i].name === "string")) {
            newDivs.innerHTML = `<div><h5>${catName}</h5><p>${catAge}</p></div>`;
        } 
            

    }    
}


createCats(cats)
*/