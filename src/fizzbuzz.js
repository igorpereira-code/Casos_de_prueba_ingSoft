function fizzbuzz(num) {
  if (num % 3 === 0) {
    return "Fuzz";
  } else {
    return num.toString();
  }
}

export default fizzbuzz;
