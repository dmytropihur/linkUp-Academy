const removeSpecialCharacters = (str) => {
  return str.replace(/[^a-zA-Z0-9-_ ]/g, '');
};

console.log(removeSpecialCharacters('D0n$c sed 0di0 du1'));
