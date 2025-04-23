//Primitive Data Types?
// If almost every data type can have a truthy/falsey

// Boolean => true/false
// String => "Hello"/""
// Numbers => -1/1  / 0
// Null => falsey
// undefined => falsey


// Data Structures

// If a harddrive/memory card is empty

// Arrays => ["String", 0] / [] = truthy
// Objects => {key:"value"} / {} = truthy


// Big Int/Symbol
// NaN => A way to prevent our code from crashing

// console.log(5*"hello")

function checkFalseyValues(primitiveDataType){
  if(primitiveDataType){
    console.log("This is truthy!")
  } else {
    console.log("This is falsey...")
  }
}
checkFalseyValues({})