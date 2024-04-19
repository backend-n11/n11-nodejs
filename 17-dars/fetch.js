const url = "https://jsonplaceholder.typicode.com/users"


const getNames = async (url) => {
  const nameList = []
  const res = await fetch(url)
  if (res.ok) {
    const json = await res.json()
    json.forEach(element => {
      nameList.push(element.name)
    })
  }
  return nameList
}

getNames(url).then(data => {
  console.log(data)
})