const url = "https://jsonplaceholder.typicode.com/photos"

const divGlobal = document.querySelector("div");

(async () => {
  const res = await fetch(url)
  const json = await res.json()
  json.forEach(element => {
    const div = document.createElement("div")
    const imageUrl = document.createElement("img")
    const h1 = document.createElement("h1")
    div.style.textAlign = "center"
    h1.innerText = element.title
    imageUrl.src = element.url
    console.log(element.url)
    div.appendChild(h1)
    div.appendChild(imageUrl)
    divGlobal.appendChild(div)
  })




})();


(function () {

})()