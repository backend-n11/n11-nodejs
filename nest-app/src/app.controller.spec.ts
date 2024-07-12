import { } from '@nestjs/testing';

describe('add function', () => {
  test("shoud be add corecly", () => {
    expect(1 + 2).toBe(3)
  })

  test("shoud be add corecly", () => {
    expect(1 + 2).not.toBe(1)
    const a = 12

    expect(a).toBeDefined()
  })
});
