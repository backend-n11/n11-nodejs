abstract class Player {
  constructor(public readonly name: string) {
  }

  public move(): void {
    console.log(`${this.name} is moving`)
  }
  abstract attack(): void
}


class Percay extends Player {
  constructor(name: string) {
    super(name)
  }

  attack(): void {
    console.log(`${this.name} is attacking`)
  }
}


const percey = new Percay("percey")

percey.move()
percey.attack()