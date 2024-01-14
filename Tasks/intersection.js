// Find an intersection of two dictionaries

const intersection = (firstDictionary, secondDictionary) => {
  for (attributeName of Object.keys(firstDictionary)) {
    if (firstDictionary[attributeName] != secondDictionary[attributeName]) {
      delete firstDictionary[attributeName];
    }
  }
  return firstDictionary;
};

module.exports = intersection;
