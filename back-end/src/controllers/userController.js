const crypto = require('crypto');
const userService = require('../service/userService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const { message, code, data, token } = await userService.login(email, hash);
    if (message) return res.status(code).json({ message });
    return res.status(200).json({ 
      user: { name: data.name, email: data.email, role: data.role, token }, 
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

  const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const { message, code, data } = await userService.register(name, email, hash, role);
    if (message) return res.status(code).json({ message });
    return res.status(201).json({ newUser: data });
};
  
  module.exports = {
    login,
    register,
  };