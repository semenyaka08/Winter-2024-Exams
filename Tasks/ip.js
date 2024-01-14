// Split string by the first occurrence of separator

const parseIp = (inputIp) => {
  let numsOfIp = new Array();
  if (inputIp === '') return;
  const numsSplit = inputIp.split('.');
  if (numsSplit.length != 4) return;
  for (const num of numsSplit) {
    numsOfIp.push(parseInt(num));
    if (isNaN(numsOfIp[numsOfIp.length-1])) return;
  }
  return numsOfIp;
};



module.exports = parseIp;
