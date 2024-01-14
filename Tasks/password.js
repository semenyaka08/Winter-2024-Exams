// Generate random password

const GeneratePassword = (alphabet, lengthOfPassword) => {
  const MAX = alphabet.length;
  let generatedKey = '';
  for (let i = 0; i < lengthOfPassword; i++) {
    let indexInAlphabet = Math.floor(Math.random() * MAX);
    generatedKey = generatedKey + alphabet[indexInAlphabet];
  }
  return generatedKey;
};

module.exports = GeneratePassword;
