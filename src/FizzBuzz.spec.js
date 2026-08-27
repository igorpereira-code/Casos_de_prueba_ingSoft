import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia retornar el mismo numero ingresado, si no sigue la regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
});
