//Why objects?

// Is there a benefit to them?
// Arrays can only be ordered and items can only be accessed in order
// More organized
// Reuse them
// Easy to add and to modify

// Shows and I want to list

const favSciFiShow = ["Black Mirror", 7, "SciFi", "Netflix"];
const anotherShow = ["The Pitt", 1, "Medical Drama", "Crave"];
const jasonsShow = [2, "Drama", "Apple TV" ,"Severence"];

// console.log(jasonsShow[0]);
// Amazing for creating a single item
const jasonsShowObject = {
    showName: "Severance",
    showType: "Drama",
    amountOfSeasons: 2,
    streamingPlatform: "Apple TV"
}
const favSciFiShowObject = {
    amountOfSeasons: 7,
    showName: "Black Mirror",
    showType: "SciFi",
    streamingPlatform: "Netflix"
}
// console.log(favSciFiShowObject.showName)

// Arrays are great for storing multiple items

const aListOfShows = [jasonsShowObject, favSciFiShowObject]


function modifyShowName(object){
    object.showName = "Some Random Show";

    // console.log(object);
}

modifyShowName(favSciFiShowObject);

console.log("After modifications:",favSciFiShowObject);