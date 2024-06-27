



class CreateStack<T> {
  private stack: T[] = []
  public push(item: T): T {
    const index = this.stack.push(item)
    return this.stack[index - 1]
  }
  public pop(): T | undefined {
    return this.stack.pop()
  }
  public peek(): T | undefined {
    return this.stack[this.stack.length - 1]
  }
  public isEmpty(): boolean {
    return this.stack.length === 0
  }

  public size(): number {
    return this.stack.length
  }

  public clear(): void {
    console.log("clear")
    this.stack.length = 0
  }
}



const stack = new CreateStack<number>()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.clear())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.peek())
