function fizzBuzz(n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }
  console.log(output);
  return output;
}

// Test case
const test_01 = [1, 2, "Fizz", 4, "Buzz"]; // <- test case for n=5
const test_02 = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]; // <- test case for n=10
const test_03 = [
  1,
  2,
  "Fizz",
  4,
  "Buzz",
  "Fizz",
  7,
  8,
  "Fizz",
  "Buzz",
  11,
  "Fizz",
  13,
  14,
  "FizzBuzz",
]; // <- test case for n=15

// Testcase function fizz buzz
const isSameExpected = (output, testOutput) => {
  let isSame = true;
  output.forEach((element, index) => {
    if (element !== testOutput[index]) isSame = false;
  });
  return isSame;
};

// Test case for n=5
console.log(isSameExpected(fizzBuzz(5), test_01));

// Test case for n=10
console.log(isSameExpected(fizzBuzz(10), test_02));

// Test case for n=15
console.log(isSameExpected(fizzBuzz(15), test_03));
