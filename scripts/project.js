/* W05: Programming Tasks */

/* Declare and initialize global variables */
const governorsElement = document.querySelector('#governors');

let governorList = [];

/* async displayTemples Function */

const displaygovernors = (governors) => {
    governors.forEach(governor => {
    let article = document.createElement('article');
    let stateName = document.createElement('h3');
    stateName.textContent = governor .stateName;
    let region = document.createElement('h3');
    region.textContent = governor .region;
    let year = document.createElement('h3');
    year.textContent = governor .year;
    let governorName = document.createElement('h3');
    governorName.textContent = governor .governorName;
    let img = document.createElement('img');
    img.setAttribute('src', governor .imageUrl);
    img.setAttribute('alt', governor .location);
    article.appendChild(stateName);
    article.appendChild(region);
    article.appendChild(year);
    article.appendChild(governorName);
    article.appendChild(img);
    governorsElement.appendChild(article);

});
}
 /* async getGovernors Function using fetch()*/

 const getGovernors = async() => {
    const response = await fetch("https://thompsontst.github.io/cse121b/project.json")
    governorList = await response.json()
    // console.log(`Temple Data:`, governorList);
    displaygovernors(governorList);
 };
/* reset Function */
const reset = () => {
    governorsElement.innerHTML = '';
}
/* compare states Function */
function compare(state1, state2) {
    console.log('state1', state1);
        if(state1.governors<state2.governors){
        return 1
    }
    if(state1.governors>state2.governors){
        return -1
    }
    else {
         return 0
    }
    
     }
/* sortBy Function */
const sortBy = (governors) => {
    reset()
    switch(document.querySelector('#sortBy').value) {
        case "south-south":
            displaygovernors(governors.filter(governor  => governor.region.includes("South-South")));
            break;
        case "south-East":
            displaygovernors(governors.filter(governor  => governor.region.includes("South-East")));
            break;
        case "south-West":
            displaygovernors(governors.filter(governor  => governor.region.includes("South-West")));
            break;
        case "North-East":
            displaygovernors(governors.filter(governor  => governor.region.includes("North-East")));
            break;
        case "North-West":
            displaygovernors(governors.filter(governor  => governor.region.includes("North-West")));
            break;
        case "North-Central":
            displaygovernors(governors.filter(governor  => governor.region.includes("North-Central")));
            break;
        case "incumbent_Govenors":
            displaygovernors(governors.filter(governor  => governor.year.includes("Incumbent")));
            break;
        case "older":
            displaygovernors(governors.filter((governor ) => !governor.year.includes("Incumbent")));;
            break;
        case "all":
            displaygovernors(governorList);
            break;
    }
};
 

getGovernors();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(governorList));