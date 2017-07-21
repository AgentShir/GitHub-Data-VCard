let request = new XMLHttpRequest();
request.addEventListener("load", displayInfo)
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
fuction displayInfo () {
  let data = JSON.parse(this.responseText);
  let list = ' ';
}

// Redo below
data.results.forEach (function(person) {
  list += `<li>${person.login}</li>`;
});

// // Our display function
// function displayCharacters () {
//   // Parse our response text
//   let data = JSON.parse(this.responseText);
//   let list = '';
//
//   data.results.forEach( function (person) {
//     list += `<li>${person.name}</li>`;
//   });

// htmlString +=
// `<div class="customer">
//   <img src="${item.picture.large}">
//     <h2>${item.name.first} ${item.name.last}</h2>
//       <p>${item.email}</p>
//       <p>${item.location.street}</p>
//       <p>${item.location.city}, ${item.location.state} ${item.location.postcode}</p>
//       <p>${item.phone}</p>
//       <p>${item.id.value}</p>
// </div>`
// })
// htmlString += `</div>`

// Header <h1>${data.name}</h1>
// Two column layout
// The Basics
// login, html_url, company, blog
// The Story
//
