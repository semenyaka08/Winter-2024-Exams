// Extract substring between prefix and suffix

const getValueBetween = (string, prefix, suffix) => {
  i = string.indexOf(prefix);
  if (i === -1) return '';
  string = string.substring(i + prefix.length);
  if (suffix) {
    i = string.indexOf(suffix);
    if (i === -1) return '';
    string = string.substring(0, i);
  }
  return string;
};

module.exports = getValueBetween;
