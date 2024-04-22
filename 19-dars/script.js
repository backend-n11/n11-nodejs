// const ul = document.querySelector("ul") //tagName
// const ul = document.querySelector("#hobby-list") //id 
// const ul = document.querySelector(".hobby") //id 
const ul = document.querySelector("#hobby-list") //id 
const lis = document.querySelectorAll("li") //id 
const button = document.querySelector("button") //id 
const div = document.querySelector("div") //id 
const form = document.querySelector("#form") //id 



form.addEventListener("submit", (e) => {
  e.preventDefault()

  const data = new FormData(e.target)
  console.log([...data.entries()])
})

let count = 0
function countRabbits() {
  count++
  span.innerHTML = count
  if (count == 10) {
    alert("WINNER")
    span.style.background = "red"
    span.style.color = "white"
  }
}


div.addEventListener("click", () => {
  console.log(div.hasAttribute("class"))
  div.setAttribute("class", "hobby")
  // console.log(div.hasAttribute("class"))
})



button.addEventListener("click", async () => {
  console.log("clicked")
  document.body.style.background = "black"
  document.body.style.color = "white"

  // 1. Create <div> element
  let childDiv = document.createElement('div')
  console.log(childDiv)
  // 2. Set its class to "alert"
  childDiv.className = "alert"

  // 3. Fill it with the content
  childDiv.innerHTML = "<strong>Hi there!</strong> You've read an important message."

  // div.appendChild(childDiv)
  document.body.append(childDiv)

  const data = await fetchdata()
  data.forEach((el) => {
    const res = createHTML("div", "post", el.title)
    console.log(res)
    ul.appendChild(res)
  })
})


const createHTML = (tagName, className, content) => {
  console.log(content)
  let childDiv = document.createElement(tagName)
  childDiv.className = className
  childDiv.innerHTML = `<li>${content} </li>`
  return childDiv
}



const fetchdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (res.ok) {
    const json = await res.json()
    return json
  }
}
lis.forEach((data) => {
  data.innerHTML = "<strong>SALOM</strong>"
  data.innerText = "<strong>SALOM</strong>"
})


elem.onclick = function (event) {
  alert(event.type)
  alert(event.currentTarget)
  alert("Coordinates: " + event.clientX + ":" + event.clientY)
}
