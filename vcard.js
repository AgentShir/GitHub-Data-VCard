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
  let avatar = data.avatar_url;
  let create = `<div class="wrapper">
              <div class="header">${name}</div>
                <div class="container">
                  <div class="basics">
                    <h2>The Basics</h2>
                    <div class="name">Name: ${name}</div>
                    <div class="url">GitHub URL: ${url}</div>
                    <div class="company">Company: ${company}</div>
                    <div class="website">Website: ${website}</div>
                  </div>
                  <div class="story">
                    <h2>The Story</h2>
                    <div class="bio">${bio}</div>
                  </div>
                  <div class="imageContainer">
                    <div class="image"><img src="${avatar}"</div>
                  </div>
                </div>
                </div>
                `;
  console.log(create);

  let page = document.getElementsByTagName('body')[0];
  page.innerHTML = create;
  console.log(page);
}
