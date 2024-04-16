const nt = {
  studentsList: [
    {
      name: 'xamidullo',
      id: 123,
      tolov: false
    },
    {
      name: "xamidu",
      id: "123",
      tolov: false,
    },
    {
      name: "xamidu",
      id: "123",
      tolov: false,
    },
    {
      name: "xamidu",
      id: "123",
      tolov: false,
    }],
  faceIDList: [{
    name: "sas",
    id: 12
  }, {
    name: "sas",
    id: 12
  }, {
    name: "sas",
    id: 12
  }],
  paidList: [{
    name: "sas",
    id: 12
  }, {
    name: "sas",
    id: 12
  }, {
    name: "sas",
    id: 12
  }],
  faceCheck(obj) {
    const { name, id } = obj
    const studentsList = this.studentsList
    for (let i = 0; i < studentsList.length; i++) {
      if (name === studentsList[i].name && id === studentsList[i].id) {
        return true
      }
    }
    return false
  },
  checkPaid(obj) {
  }
}
console.log(
  nt.faceCheck({
    name: 'azizbek',
    id: 123123,
    tolov: true
  })
)
