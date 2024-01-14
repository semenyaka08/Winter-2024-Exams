// Find an intersection of two dictionaries

const intersection = (firstDictionary, secondDictionary) => {
  firstKeys = Object.keys(firstDictionary);
  for (attributeName of firstKeys) {
    if (firstDictionary[attributeName] === secondDictionary[attributeName]) {
      secondDictionary[attributeName] = firstDictionary[attributeName];  
    } else {
      delete firstDictionary[attributeName];
    }
  }
  return firstDictionary;
};

module.exports = intersection;
