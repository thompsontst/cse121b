/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


let fullName = "Aniekan Thompson";

let currentYear = new Date();

const profilePicture = "./images/profilePics.jpg";



/* Step 3 - Element Variables */


const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const partnerElement = document.getElementById("partner");

const yearElement =  document.querySelector("#year");

const imageElement =  document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'profile picture of [fullName]');
yearElement.textContent = `${currentYear.getFullYear()}`;
/* Step 5 - Array */

let  favoriteFoods = ['Plantain Porridge','jollof rice', 'Afang soup', 'rice peppersoup','chicken peripperi'];
foodElement.textContent = favoriteFoods;
const anotherfavfood = 'Porridge Beans';

favoriteFoods.push(anotherfavfood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;






