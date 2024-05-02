const submit = document.querySelector("#submit")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#btn")
const userList = document.querySelector("#user__list")
const foobar = document.querySelector("#user__list")



submit.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {})
  console.log(JSON.stringify(data))
})



btn.addEventListener("click", async (e) => {
  const users = await getUsers()
  console.log(e)
  document.body.style.backgroundColor = "red"
  document.body.style.color = "yellow"
  users.forEach(user => {
    createHtml("li", user.name, "user")
  })
})


const getUsers = async function () {
  const result = await fetch("http://localhost:1234/users", {
    method: "post",
    body: JSON.stringify([
      {
        name: "Ali",
        age: 22,
        gender: "M"
      },
      {
        name: "Bek",
        age: 21,
        gender: "M"
      },
      {
        name: "Maftuna",
        age: 20,
        gender: "F"
      },
      {
        name: "Bekzod",
        age: 10,
        gender: "M"
      },
      {
        name: "Munisa",
        age: 11,
        gender: "F"
      },
      {
        name: "Maftuna",
        age: 20,
        gender: "F"
      }
    ])
  })

  console.log(result)
  if (!result.ok) {
    return alert("Error")
  }
  const json = await result.json()
  return json
}

const createHtml = (element, content, className) => {
  const li = document.createElement(element)
  li.innerHTML = content
  li.className = className
  userList.appendChild(li)
}




///
//


///