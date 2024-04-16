class Expenses {
  name = "azizbek";
  static addExpense(str) {
    console.log(str);
  }

  set setName(name) {
    this.name = name;
  }

  get setName() {
    return this.name;
  }
}
const expenses = new Expenses();

expenses.setName = "bilolbek";

console.log(expenses.setName);

