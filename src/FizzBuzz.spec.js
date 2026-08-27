import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia retornar el mismo numero ingresado, si no sigue la regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia retornar otro numero que no sigue la regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia retornar fizz con el numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fuzz");
  });

  it("deberia retornar fizz con un numero multiple de 3", () => {
    expect(fizzbuzz(9)).toEqual("Fuzz");
  });
});
