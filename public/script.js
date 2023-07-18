const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let GetJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => jokeContainer.innerHtml(item.joke));
}
btn.addEventListener("click",GetJoke);
GetJoke();