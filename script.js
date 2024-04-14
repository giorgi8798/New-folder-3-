const search = document.querySelector("input");
const btn = document.querySelector("button");
const avatar = document.querySelector("#img");
const header = document.querySelector("h1");
const link = document.querySelector("a");
const date = document.querySelector("#id1");
const bio = document.querySelector("#id2");
const repo = document.querySelector("#id3");
const followers = document.querySelector("#id4");
const following = document.querySelector("#id5");
const loca = document.querySelector("#id6");
const github = document.querySelector("#id7");
const twitter = document.querySelector("#id8");
const gitlink = document.querySelector("#id9");

let data1;

search.addEventListener("input", (e) => {
  data1 = e.target.value;
});

function sendReq() {
  console.log(data1);
  const url = ` https://api.github.com/users/${data1}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      avatar.src = data.avatar_url;
      header.textContent = data.name;
      link.href = data.events_url;
      date.textContent = data.created_at;
      bio.textContent = data.bio;
      repo.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      loca.href = data.location;
      github.href = data.html_url;
      github.textContent = data.html_url;
      twitter.href = data.twitter_username;
      gitlink.href = data.gists_url;
      console.log(data);
    });
}

btn.addEventListener("click", sendReq);
