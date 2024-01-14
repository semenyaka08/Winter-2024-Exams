// Split string by the first occurrence of separator

const parseIp = (inputIp) => {
  const numsOfIp = inputIp.split('.').map((num) => num === '' ? undefined : Number(num));
  if (inputIp === '' || numsOfIp.length !== 4 || numsOfIp.some(isNaN)) return ; 
  return numsOfIp;
};

module.exports = parseIp;
