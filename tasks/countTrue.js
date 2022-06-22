const countTrue = (arr) => {
  return arr.filter((e) => {
    return !!e;
  }).length;
};

console.log(countTrue([]));
