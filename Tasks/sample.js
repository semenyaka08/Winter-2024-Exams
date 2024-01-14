// Get one random element from an array

const sampleRandomElement = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)];
};

module.exports = sampleRandomElement;
