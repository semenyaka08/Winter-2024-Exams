// Sum all number values in dict

const count = (dictionary) => {
  let sum = 0;
  Object.keys(dictionary).forEach((key) => {
    if (typeof dictionary[key] === 'number') sum += dictionary[key];
  });
  return sum;
};

module.exports = count;
