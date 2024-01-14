// Generate random password

const GeneratePassword = (alphabet, lengthOfPassword) => {
  let generatedKey = '';
  while (lengthOfPassword != generatedKey.length) {
    generatedKey += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return generatedKey;
};

module.exports = GeneratePassword;
