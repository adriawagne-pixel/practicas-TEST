const {sum, multiply, divide } = require('./02-math');

describe("test for math", () => {
  describe("tests for sum", () => {
    test("adds 1 + 3 should be 4", () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe("tests for multiply", () => {
    test("adds 1 * 4 should be 4", () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });
  describe("tests for divide", () => {
    test("adds 4 / 2 should be 2", () => {
      const rta = divide(4, 2);
      expect(rta).toBe(2);
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });
    test("should divide for zero", ()=>{
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  });
});