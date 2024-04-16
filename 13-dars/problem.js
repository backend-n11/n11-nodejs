const Contact = {
  contacts: new Map(),
  cread(personData) {
    const id = this.contacts.size + 1
    this.contacts.set(id, personData)
    return id
  },
  read(id) {
    if (this.contacts.has(id)) {
      console.log("CONTACT BOR!!")
      return this.contacts.get(id)
    }

    return {
      message: `This is ${id} not found`
    }
  },
  update(id, personData) {
    if (this.contacts.has(id))
      return this.contacts.set(id, personData)

    return {
      message: `This is ${id} not found`
    }
  },

  delete(id) {
    if (this.contacts.has(id)) {
      this.contacts.delete(id)
      return this.contacts.values()
    }

    return {
      message: `This is ${id} not found`

    }
  }

}

const id1 = Contact.cread({
  ism: "sasa",
  number: 1234,
  mail: 'test @test.com'
})

const id2 = Contact.cread({
  ism: "xamidullo",
  number: 12345,
  mail: 'x@test.com'
})
Contact.read(111)
let result = Contact.update(id1, {
  ism: "mrx",
  number: "464464646",
  mail: "test@test.com"
})

let del = Contact.delete(id1)

console.log(del)

// console.log(Contact.contacts)