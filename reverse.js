function reverse(arr) {
  let n = arr.length - 1;

  for (let i = 0; i <= n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
  }
  return arr;
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// testcase
const isSameExpected = (output, testOutput) => {
  let isSame = true;
  output.forEach((element, index) => {
    if (element !== testOutput[index]) isSame = false;
  });
  return isSame;
};

console.log(isSameExpected(reverse(input), expectedOutput));
