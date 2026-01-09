const { hashPassword, comparePassword } = require('./src/utils/hash');

console.log('hashPassword:', hashPassword);
console.log('comparePassword:', comparePassword);

// Testando se hashPassword funciona
(async () => {
  try {
    const hash = await hashPassword('123456');
    console.log('Hash gerado:', hash);
  } catch (err) {
    console.error('Erro ao gerar hash:', err);
  }
})();
