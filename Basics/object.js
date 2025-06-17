let alien = {
  // This is an object
  name: "Riya",
  tech: "js",
};

// console.log(alien, typeof alien);
// console.log(alien.name);
// console.log(alien.tech);

let alien1 = {
  name: "Riya",
  tech: "js",
  laptop: {
    cpu: "i5",
    ram: 4,
    brand: "Honer",
  },
}

console.log(alien1?.laptop?.brand1?.length)

console.log(alien1)
delete alien1.tech
console.log(alien1)