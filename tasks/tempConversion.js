const tempConversion = (num) => {
  if (typeof num !== 'number') {
    console.log('Your value is not a number');
    return;
  }
  const fahrenheit = parseFloat(((num * 9) / 5 + 32).toFixed(2));
  const kelvin = parseFloat((num + 273.15).toFixed(2));

  return [fahrenheit, kelvin];
};

console.log(tempConversion(26.85));
