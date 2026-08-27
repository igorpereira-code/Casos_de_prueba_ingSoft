import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia retornar el mismo numero ingresado, si no sigue la regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia retornar otro numero que no sigue la regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia retornar fizz con el numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("deberia retornar fizz con un numero multiple de 3", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });

  it("deberia retornar buzz con el numero 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("deberia retornar buzz con numeros multiplos de 5", () => {
    expect(fizzbuzz(25)).toEqual("Buzz");
  });

  it("deberia retornar fizzbuzz con numeros multiplos de 3 y 5", () => {
    expect(fizzbuzz(45)).toEqual("FizzBuzz");
  });
});
