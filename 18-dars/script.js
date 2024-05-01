const URL = "https://jsonplaceholder.typicode.com/posts"


const ul = document.querySelector("ul")
const getAllPosts = async () => {
  const res = await fetch(URL)
  const posts = await res.json()

  posts.forEach(element => {
    const li = document.createElement("li")
    li.innerText = element.title
    ul.appendChild(li)
  })

}

getAllPosts()
