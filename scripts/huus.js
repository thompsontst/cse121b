function outputTemples(templeList){
    console.log('Temple Output Param', templeList);
    const templeDiv = document.querySelector('#temples')
    


    templeList.forEach(temple => {
        const templeNameH3 = document.createElement('h3')
        console.log('temple', temple);
        templeNameH3.innerHTML = temple.templeName
        templeDiv.append(templeNameH3)
    });
}


let templeList = []

async function getTempleData(){
    const response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
    templeList = await response.jason()
if(response.ok){
    outputTemples(templeList)
}
else {
    console.log("Data could not be fetch")
}
    console.log('Temple Data:', templeList ); 


outputTemples(templeList)
}

getTempleData()

function reset() {
    document.querySelector("#temples").textContent = ''
}

function sortTemples() {
    reset()
    
    const sortedTemples =  templeList.sort(compare)
    console.log('Temple1', sortedTemples);
    outputTemples(sortedTemples )
}

function compare(temple1, temple2) {
console.log('Temple1', temple1);
    if(temple1.templeName<temple2.templeName){
    return 1
}
if(temple1.templeName>temple2.templeName){
    return -1
}
else {
     return 0
}

 }
document.querySelector('#sortby').addEventListener
('click', sortTemples)


temples.sort((a,b) => {
    if(a.templeName<b.templeName){
        return 1
    }
    if(a.templeName>b.templeName){
        return -1
    }
    else {
         return 0
    }
    });
    displayTemples(templeList); 
};
