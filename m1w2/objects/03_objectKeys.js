//Two ways to look up values in objects

// Dot notation
// Square bracket notation


const favSciFiShowObject = {
    // key : key value
    showName: "Black Mirror",
    amountOfSeasons: 7,
    showType: "SciFi",
    streamingPlatform: "Netflix",

}
const key = "streamingPlatform";
// Dot notation
console.log(favSciFiShowObject.favSeason)

// Square bracket notation



// console.log(favSciFiShowObject["streamingPlatform"]);
console.log(favSciFiShowObject[key]);


// Everythin in Javascript is technically an object

const jasonsShow = [2, "Drama", "Apple TV" ,"Severence"];

// array
// {
//     0: 2,
//     1: "Drama",
//     2: "Apple TV",
//     3: "Severance"
// }
// console.log(jasonsShow[0]);
