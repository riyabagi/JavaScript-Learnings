let alien = {
  name: "Riya",
  tech: "js",
  laptop: {
    cpu: "i5",
    ram: 4,
    brand: "Honer",
  },
}

for(let key in alien){
    console.log(key, alien[key]);
}

for(let key in alien.laptop){
        console.log(key, alien.laptop[key])
    }
