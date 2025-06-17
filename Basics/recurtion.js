let count = 1

function show() {
  console.log("Hi", count);
  count++;
  show();
}

show();
