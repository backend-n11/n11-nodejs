let students = [
  {
    firstName: "johongir",
    lastName: "FAMILIYAsi",
    age: 23,
    markaz: "Najot ta'lim",
    tolov: false,
    ortachaBahosi: 40,
    darsQoldirish: 50,
    uygaVazifaBajarmaslik: 60,
    mahorati: ["o'qish", "yozish"],
  }, {
    firstName: "azizbek",
    lastName: "FAMILIYAsi",
    age: 23,
    markaz: "Najot ta'lim",
    tolov: true,
    ortachaBahosi: 40,
    darsQoldirish: 50,
    uygaVazifaBajarmaslik: 60,
    mahorati: ["o'qish", "yozish"],
  }, {
    firstName: "xamidullo",
    lastName: "FAMILIYAsi",
    age: 23,
    markaz: "Najot ta'lim",
    tolov: false,
    ortachaBahosi: 40,
    darsQoldirish: 50,
    uygaVazifaBajarmaslik: 60,
    mahorati: ["o'qish", "yozish"],
  }
]

for (let i = 0; i < students.length; i++) {
  const firstName = students[i].firstName

  if (!students[i].tolov) {
    console.log(` ${firstName} darsga kira olmaysiz uzur!`)
  }
}