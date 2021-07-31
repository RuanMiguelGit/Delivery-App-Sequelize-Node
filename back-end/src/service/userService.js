const { user } = require('../database/models');
const validator = require('../schemas/loginValidator');
const userValidator = require('../schemas/userValidator');

const login = async (email, hash) => {
  const { message, code } = await validator.loginUservalidator(email, hash); 
  const { token } = await validator.tokenGenerator(email);

  if (message) return { message, code };
    const data = await user.findOne({
      where: {
        email,
        password: hash,
      },
    });
    return { data, token }; 
  };

  const register = async (name, email, hash, role) => {
    const { message, code } = await userValidator.validateCreation(name, email);
    if (message) return { message, code };
    const data = await user.create({ name, email, password: hash, role });
    return { data };
};
  
  module.exports = {
    login,
    register,
  };
