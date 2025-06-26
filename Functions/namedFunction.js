function logName(name) {
  console.log(name);
}

function processUser(callback) {
  const username = "Riya";
  callback(username);
}

processUser(logName); // Named callback
