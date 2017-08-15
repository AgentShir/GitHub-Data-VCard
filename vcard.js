let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/agentshir");
req.addEventListener("load", reqListener);
req.send();
//
// function reqListener(){
//   let data = JSON.parse(this.responseText);
//
//

// }

function reqListener(){
  let data = JSON.parse(this.responseText);
  let name = data.name;
  let url = data.url;
  let company = data.company;
  let website = data.blog;
  let bio = data.bio;
  let create = `<div>${name}</div>
                <div>${url}</div>
                <div>${company}</div>
                <div>${website}</div>
                <div>${bio}</div>
                `;
  console.log(create);

  let page = document.getElementsByTagName('body')[0];
  page.innerHTML = create;
  console.log(page);
}
