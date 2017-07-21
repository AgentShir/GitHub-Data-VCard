let container = document.querySelector('.basics');

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
// data.results.forEach (function(person) {
//   list += `<li>${person.login}</li>`;
// });

// // Our display function
// function displayCharacters () {
//   // Parse our response text
//   let data = JSON.parse(this.responseText);
//   let list = '';
//
//   data.results.forEach( function (person) {
//     list += `<li>${person.name}</li>`;
//   });

let header = document.querySelector('header')

let htmlString = ""
    htmlString = `<div class=header>
      <h1>Shireen Garcia</h1>
    </div>`

let htmlString = ""

htmlString +=
`<div class="basics">
    <h2>The Basics</h2>
      <p>Name: ${data.login}</p>
      <p>Github URL ${data.html_url}</p>
      <p>Company: ${data.company}</p>
      <p>Website: ${data.blog}</p>
</div>`
})
htmlString += `</div>`

// Header <h1>${data.name}</h1>
// Two column layout
// The Basics
// login, html_url, company, blog
// The Story
//
