// Extract substring between prefix and suffix

const getValueBetween = (string, prefix, suffix) => {
  const indexes = [string.indexOf(prefix), string.indexOf(suffix)];
  if (indexes[0] === -1 || indexes[1] === -1) return '';
  return string.substring(indexes[0] + prefix.length, indexes[1]);
};

module.exports = getValueBetween;
