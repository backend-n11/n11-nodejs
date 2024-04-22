var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
]

const div2 = document.createElement("div")
const ul2 = document.createElement("ul")


books.forEach((obj) => {
  const li = document.createElement("li")
  li.innerHTML = obj.title
  ul2.appendChild(li)
})

div2.append(ul2)
document.body.appendChild(div2)
