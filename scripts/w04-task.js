/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Aniekan Thompson",
    photos: "./images/profilePics.jpg",
    favoriteFoods: favoriteFoods = ['Plantain Porridge',
    'Jollof rice', 
    'Afang soup', 
    'Rice peppersoup',
    'Chicken peripperi'],
    hobbies: ["Reading",
     "Cooking",
      "Travelling"],
      placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    places: "Abuja, Nigeria",
    length: "1, year"
    }
);

myProfile.placesLived.push(
    {
    places: "Eket, Nigeria",
    length: "5, years"
    }

);
myProfile.placesLived.push(
    {
    places: "Benue state, Nigeria",
    length: "2, years"
    }
);

/* DOM Manipulation - Output */


/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photos);
document.querySelector('img').setAttribute('alt', 'profile picture of Aniekan Thompson');

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild (li);
});
/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild (li);
});
/* Places Lived DataList */
let locations = "";
let durations = "";
place = myProfile.placesLived
place.forEach(myFunction)
place.forEach(countPlaces)

document.querySelector("#places-lived").textContent = locations;

document.querySelector("#places-lived").innerHTML = durations;

function myFunction(place) {
    locations += place.places + place.length; 
  }
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
function countPlaces(place) {
    durations += "<dd>" + place.places + "</dd>" + "<dd>" + place.length + "</dt>";
}
