// Return an array without duplicates

'use strict';

const duplicate = (valueToDuplicate, numberOfDuplicates) => {
  if (numberOfDuplicates <= 0) return [];
  return new Array(numberOfDuplicates).fill(valueToDuplicate);
};

module.exports = duplicate;
