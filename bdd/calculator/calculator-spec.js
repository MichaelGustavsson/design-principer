describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();

    jasmine.addMatchers({
      toMatch: function (x, y) {
        return {
          compare: function (actual, expected1, expected2) {
            return {              
              pass: actual >= expected1 && actual <= expected2,
              message: "Expected " + actual  + " to match expected " + expected1 + " " + expected2,
            };
          },
        };
      },
    });
  });

  it("should be able to add 5 and 5", () => {
    expect(calc.add(5, 5)).toBe(10);
  });

  it("should be able subtract 10 from 30", () => {
    expect(calc.subtract(30, 10)).toBe(20);
  });

  it("should be able to divide 10 and 2", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  //Extra special uppgift...
  it("should be able to divide a rational number", () => {
    expect(calc.divide(1, 3)).toMatch(0.3, 0.4);
  });
});
