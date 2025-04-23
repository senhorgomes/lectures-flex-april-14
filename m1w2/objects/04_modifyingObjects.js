// Reassinging key values

const favSciFiShowObject = {
    // key : key value
    showName: "Black Mirror",
    amountOfSeasons: 7,
    showType: "SciFi",
    streamingPlatform: "Netflix",

}
// We can't modify the key name, only the key value associated to it
// We can modify with dot notation
favSciFiShowObject.showName = "Star Trek";
// We can modify with square brakcet notation
favSciFiShowObject["amountOfSeasons"] = 15;

favSciFiShowObject.releaseDate = 1980;

// Cloning whole objects?
// Not the ideal way to clone objects
// const cloneObjects = favSciFiShowObject;

// Create a new object and a new reference

const clonedObject = {...favSciFiShowObject}

// Can i modify this cloned object as well?
clonedObject.streamingPlatform = "Some other platform";
console.log(clonedObject);


delete favSciFiShowObject.streamingPlatform
console.log("Fav object:",favSciFiShowObject); //What will be the key value for streamingPlatform? Will it be Netflix or Some other platform?