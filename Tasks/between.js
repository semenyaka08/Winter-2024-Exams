// Extract substring between prefix and suffix

const getValueBetween = (string, prefix, suffix) => {
  const prefixIndex = string.indexOf(prefix);
  const suffixIndex = string.indexOf(suffix);
  if (prefixIndex === -1 || suffixIndex === -1) return '';
  string = string.substring(prefixIndex + prefix.length, suffixIndex);
  return string;
};

module.exports = getValueBetween;
