let arr = [1, 2, 3];

let a = arr.map((value) => {
    console.log(value);
    return value+1;
});

console.log(a);

let arr3 = [1, 5, 6, 4, 3, 2];
let a3 = arr3.reduce((d1,d2)=> {
  return d1*d2;
});

let a4 = arr3.reduce((d1,d2,d3)=>{
  return d1*d2*d3;
})
console.log("a3: " + a3);
console.log("a4: " + a4);