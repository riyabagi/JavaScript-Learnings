let element = document.createElement("li");

element.className = "liNavbar";
element.id = "profile";
element.setAttribute("title", "myTitle");
element.innerText = "profile";

let ul = document.querySelector('ul.this');
ul.appendChild(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let text = document.createTextNode('profile heading');
elem2.appendChild(text);

element.replaceWith(elem2);

console.log(ul);
console.log(element);
