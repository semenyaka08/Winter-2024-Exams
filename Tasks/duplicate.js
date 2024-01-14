// Return an array without duplicates

const duplicate = (valueToDuplicate, numberOfDuplicates) => {
  if (numberOfDuplicates <= 0) return [];
  else {
    let res = new Array();
    for (let i = 0; i < numberOfDuplicates; i++) {
      res[i] = valueToDuplicate;
    }
    return res;
  }
};

module.exports = duplicate;
