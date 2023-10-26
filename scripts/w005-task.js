// "use strict" /* W05: Programming Tasks */

/* Declare and initialize global variables */

const templeElement = document.getElementById("temples");
let templeList = [];

const displayTemple = (temples) => {
    temples.forEach(element => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = element.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", element.imageUrl);
        img.setAttribute("alt", element.location);

        article.appendChild(img);
        article.appendChild(h3);
        templeElement.appendChild(article)
    });
};















/* async getTemples Function using fetch()*/
let getTemples = async () => {
    const uri = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"; //https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
    let res = await fetch(uri);
    if (res.ok) {
        console.log("SUCCESSFULLY FETCHED")
        resp = await res.json();
        let list = resp.filter(x => x);
        templeList = list;
        // console.log(templeList[0])

    } else {
        console.log("Could not fetch data")
    }
    displayTemple(templeList);

}

// getTemples();
// console.log(templeList);
/* reset Function */
let reset = function () {
    templeElement.innerHTML = ""
}

/* sortBy Function */
let sortBy = function (temples) {
    reset();
    // let filter = ;
    // let val = filter.val
    switch (document.querySelector("#sortBy").value) {
        case "utah":
            displayTemple(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemple(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemple(temples.filter((temple) => temple.dedicated > new Date(1950, 0, 1)));
            break;
        default:
            displayTemple(temples);

    }
}

// getTemples();
getTemples();

/* Event Listener */

let event = document.querySelector("#sortBy").addEventListener("change", () => sortBy(templeList));