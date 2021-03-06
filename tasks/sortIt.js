const sortIt = (arr) => {
  const newArr = arr.slice();
  return newArr.sort((a, b) => {
    let num1 = typeof a === 'number' ? a : a[0];
    let num2 = typeof b === 'number' ? b : b[0];
    return num1 - num2;
  });
};

console.log(sortIt([[3], 4, [2], [5], 1, 6]));
