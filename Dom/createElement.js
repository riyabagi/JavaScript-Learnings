let element = document.createElement("li");

element.className = "liNavbar";
element.id = "profile";
element.setAttribute("title", "myTitle");
element.innerText = "profile";

let ul = document.querySelector('ul.this');
ul.appendChild(element);

console.log(ul);
console.log(element);
