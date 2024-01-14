// Split string by the first occurrence of separator

const parseIp = (inputIp) => {
  let numsOfIp = new Array();
  if (inputIp === '') return;
  else {
    const numsSplit = inputIp.split('.');
    if (numsSplit.length != 4) return;
    j = 0;
    for (const num of numsSplit) {
      numsOfIp[j] = parseInt(num);
      if (isNaN(numsOfIp[j])) return;
      j++;
    }
  }
  return numsOfIp;
};

module.exports = parseIp;
