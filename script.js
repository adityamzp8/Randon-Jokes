let jokeContainer = document.getElementById("joke")
let btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist"

let getJokes = () =>{
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.innerText = `${item.joke}`
        jokeContainer.classList.add("fade")
    });
}
btn.addEventListener("click" , getJokes)
getJokes();