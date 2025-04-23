//How can we iterate(or loop) through objects?

// How can we loop through an array?
// for loop ... c style loop
// for of
// forEach()
// while

const anotherShow = ["The Pitt", 1, "Medical Drama", "Crave"];

const objectForAnotherShow = {
    name: "The Pitt",
    seasons: 1,
    showType:  "Medical Drama",
    streamingPlatform: "Crave"
    // trying to look for a key called "key"
}

// for(const element of objectForAnotherShow){
//     console.log(element);
// }

// for...in loop
// inherited prototype functions

// for(const key in objectForAnotherShow){
//     console.log(key, objectForAnotherShow[key]);
// }

// for of

// Create an array of keys or values
const arrayOfKeys = Object.keys(objectForAnotherShow);
console.log(arrayOfKeys)
const arrayOfKeyValues = Object.values(objectForAnotherShow);
console.log(arrayOfKeyValues)

// But what if we need the key and the key value?

const arrayOfAnObject = Object.entries(objectForAnotherShow);
console.log(arrayOfAnObject)
// [
//     [ 'name', 'The Pitt' ],
//     [ 'seasons', 1 ],
//     [ 'showType', 'Medical Drama' ],
//     [ 'streamingPlatform', 'Crave' ]
//  ]

for(const keyValuePair of arrayOfAnObject){
    const key = keyValuePair[0];
    const value = keyValuePair[1];
    console.log(key, value)
}
