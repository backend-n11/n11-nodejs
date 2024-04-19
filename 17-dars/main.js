const a = [
  "realziko",
  "Kumush93",
  "BehruzbekIslomov7",
  "ShavkatRakhmatov2005",
  "ganiyevm",
  "Abduvohid",
  "developerAsilbek1",
  "oybekjon08",
  "KHab1bull0",
  "LayloLisa1",
  "amirbek",
  "ganiyevm",
  "FullJsDeveloper",
  "oybek12",
  "Xusanjo",
  "repowpolsturj"
]


async function getAllName(arr) {
  const names = []
  for (let i = 0; i < arr.length; i++) {
    const username = arr[0]
    const result = await fetch(`https://api.github.com/users/xam1dullo`)
    if (result.ok) {
      const json = await result.json()
      names.push(json.name)
    }

  }
  return names
}

getAllName(a)


// const a = [
//   "realziko",
//   "Kumush93",
//   "BehruzbekIslomov7",
//   "ShavkatRakhmatov2005",
//   "ganiyevm",
//   "Abduvohid",
//   "developerAsilbek1",
//   "oybekjon08",
//   "KHab1bull0",
//   "LayloLisa1",
//   "amirbek",
//   "ganiyevm",
//   "FullJsDeveloper",
//   "oybek12",
//   "Xusanjo",
//   "repowpolsturj"
// ]
