const trace = (arr) => {
  return arr.reduce((prev, curr, i) => {
    return (prev += curr[i]);
  }, 0);
};

console.log(
  trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4],
  ])
);
