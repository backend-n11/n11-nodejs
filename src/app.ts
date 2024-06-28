function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Usul chaqirildi: ${propertyKey} bilan argumentlar: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class ToDo {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  @LogMethod
  markAsCompleted() {
    console.log(`ToDo bajarildi: ${this.title}`);
  }
}

const todo = new ToDo("dev")

todo.markAsCompleted()
