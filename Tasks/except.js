// Copy all values from dict except listed

const except = (incomingValuesArray, ...ignoreList) => {
  for(let value of Object.keys(incomingValuesArray, 'a', 'b', 'c')){
    if(ignoreList.includes(value)){
      delete incomingValuesArray[value];
    }
  }
  return incomingValuesArray;
};

module.exports = except;
