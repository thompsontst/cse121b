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
    let Region = document.createElement('h3');
    Region.textContent = governor .Region;
    let img = document.createElement('img');
    img.setAttribute('src', governor .imageUrl);
    img.setAttribute('alt', governor .location);
    article.appendChild(stateName);
    article.appendChild(Region);
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

/* sortBy Function */
const sortBy = (governors) => {
    reset()
    switch(document.querySelector('#sortBy').value) {
        case "States":
            displaygovernors(governors.filter(governor  => governor .Region.includes("South-East")));
            break;
        case "Govenors":
            displaygovernors(governors.filter(governor  => governor .location.includes("Govenors")));
            break;
        case "older":
            displaygovernors(governors.filter((governor ) => governor .dedicated > new date(1950, 0, 1)));
            break;
        case "all":
            displaygovernors(governorList);
            break;
    }
};
 

getGovernors();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(governorList));
