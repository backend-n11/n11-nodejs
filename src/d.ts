function renameClass(newName: string) {
  return function (constructor: Function) {
    Object.defineProperty(constructor, "name", { value: newName });
  };
}

@renameClass("RenamedClass")
class MyClass {
  constructor(public name: string) { }
}

console.log(MyClass.name); // RenamedClass
