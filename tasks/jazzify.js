const jazzify = (arr) => {
  return arr.map((item) => {
    return item.includes('7') ? item : (item += 7);
  });
};

console.log(jazzify(['F7', 'E', 'A7', 'Ab', 'Gm', 'C7']));
