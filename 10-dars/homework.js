//CRUD
const database = {
  studentsList: {
    'xamidullo': {
      name: "xamidullo",
      age: 33,
      id: 123,
      tolov: false
    }
  },

  create(obj) {
  },
  read(obj) {
  },
  update(id, obj) {
  },
  delete(name) {
    delete this.studentsList["xamidullo"]
  }
}
database.create({
  name: "xamidullo",
  age: 33,
  id: 123,
  tolov: false // yoki true
})
database.update(123, {
  name: "azizbek",
  age: 21,
  tolov: true
})

database.delete("xamidullo")

console.log(database.studentsList)
