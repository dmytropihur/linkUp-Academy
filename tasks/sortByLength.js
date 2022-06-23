const sortByLength = (arr) => {
  const newArray = arr.slice();

  return newArray.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(['Turing', 'Einstein', 'Jung']));
