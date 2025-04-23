//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        }
      }
    }
  },
}
// Instead of retyping the same keys
const mainObjects = bigObject.floors.main;
console.log(mainObjects.floors.second.level);
console.log(mainObjects.level);

// console.log(bigObject["floors"]["main"]["floors"]["second"]["level"])