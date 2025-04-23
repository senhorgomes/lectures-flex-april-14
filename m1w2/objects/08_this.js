//this???

const dogObject = {
    name: "Rex",
    breed: "Husky",
    age: 2,
    // Methods are functions that are stored as key values
    bark: function(){
        console.log("Bark!")
    },
    happyBirthday: function(){
        // dogObject.age = dogObject.age + 1
        this.age = this.age + 1
    }

}

console.log("Before birthday celebrations:", dogObject.age)
dogObject.happyBirthday();
console.log("After birthday celebrations:", dogObject.age)