// VIsualização de perfil

const { User } = require('../models');

class UserController {
  // GET /users/profile
  async profile(req, res) {
    try {
      // Simulação: ID vindo do middleware de autenticação
      const userId = req.userId;

      // ORM PURO: findByPk substitui "SELECT * FROM users WHERE id = ?"
      const user = await User.findByPk(userId, {
        // Seleciona apenas os campos necessários, omitindo a senha
        attributes: ['id', 'name', 'email', 'createdAt']
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.json(user);
    } catch (error) {
      console.error(error); // É bom logar o erro real no servidor
      return res.status(500).json({ error: 'Erro ao consultar perfil' });
    }
  }

  // ADICIONAL: Método para criar usuário (para podermos testar)
  async create(req, res) {
    try {
        const { name, email, password } = req.body;
        // ORM PURO: .create() substitui "INSERT INTO..."
        const newUser = await User.create({ name, email, password });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();