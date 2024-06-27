class Car {
  private startEngine() {
    ///
  }

  public start() {
    this.startEngine()
    console.log("Car is starting");
  }
}

const car = new Car()

car.start()



class Database {
  constructor(private uri: string) {
  }

  private connect() {
    ///conect

  }

  private disconnect() {
    ///disconnect

  }


  create() {
    this.connect()
    ///

    this.disconnect()
  }


  update() {

  }
  findOne() {

  }
  delete() {

  }

}


const db = new Database("postgres")

db.create({ name: "xamida", age: 2 })
///
