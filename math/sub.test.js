import { describe, expect, test } from "vitest";
import { sub } from "./sub.js";

describe("sub function", () => {
  test("should be sub correcly", () => {
    //Arrange
    const a = 4;
    const b = 1;

    //act
    const result = sub(a, b);

    //assert
    expect(result).toBe(3);
  });

  test("should be return NAN", () => {
    //Arrange
    const a = 0;
    const b = 1;

    //act
    const result = sub(a, b);

    //assert
    expect(result).toBe(-1);
  });
});
