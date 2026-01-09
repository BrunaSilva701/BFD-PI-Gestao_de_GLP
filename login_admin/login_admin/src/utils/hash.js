const bcrypt = require('bcrypt');

const hashPassword = async (senha) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(senha, salt);
};

const comparePassword = async (senha, hash) => {
  return await bcrypt.compare(senha, hash);
};

module.exports = { hashPassword, comparePassword };



