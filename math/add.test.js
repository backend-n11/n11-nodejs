import { describe, expect, test } from "vitest";
import { add } from "./add.js";

describe("add function", () => {
  test("should be add correcly", () => {
    //Arrange
    const a = 1;
    const b = 1;

    //act
    const result = add(a, b);

    //assert
    expect(result).toBe(2);
  });

  test("testing nomi qanday qiymat kutilyotgani ", () => {
    //test
  });
});
