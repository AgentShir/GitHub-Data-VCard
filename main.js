let req = new XMLHttpRequest();
request.open('GET', '/https://api.github.com/users/AgentShir');
request.send();

function reqListener () {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/");
req.addEventListener("load", reqListener);
req.send();
