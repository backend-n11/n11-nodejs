describe("test function", () => {
  // beforeAll(() => {
  //   console.log(" test  before all");
  // });

  // beforeEach(() => {
  //   console.log("Before  each");
  // });

  // afterEach(() => {
  //   console.log("After   ch");
  // });

  // afterAll(() => {
  //   console.log("test After all");
  // });
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("the shopping list has milk on it", () => {
    console.log("test 1");
    expect(shoppingList).toContain("milk");

    expect(new Set(shoppingList)).toContain("milk");
  });

  test("the shopping list has kleenex on it", () => {
    console.log("test 2");
    expect(shoppingList).toContain("kleenex");

    expect(new Set(shoppingList)).toContain("kleenex");
  });
});
