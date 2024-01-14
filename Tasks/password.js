// Generate random password

const GeneratePassword = (alphabet, lengthOfPassword) => {
  let generatedKey = '';
  for (let i = 0; i < lengthOfPassword; i++) {
    generatedKey += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return generatedKey;
};

module.exports = GeneratePassword;
