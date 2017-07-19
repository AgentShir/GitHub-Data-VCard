let req = new XMLHttpRequest();
request.open('GET', '/https://api.github.com/users/AgentShir');
request.send();

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/");
// req.addEventListener("load", reqListener);
// req.send();

// function reqListener () {
//   console.log(this.responseText);
// }

// Look carefully at the function
fuction displayCharacters () {
  let data = JSON.parse(this.responseText);
  let list = ' ';
}

// Redo below
data.results.forEach (function(person) {
  list += `<li>${person.name}</li>`;
});
