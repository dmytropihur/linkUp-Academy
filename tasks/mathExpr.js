const mathExpr = (str) => {
  const regex = /\d+\s*[+-/*%]\s*\d+/;
  return regex.test(str);
};

console.log(match(' f % 2 '));
