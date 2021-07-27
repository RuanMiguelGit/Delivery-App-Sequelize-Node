const { user } = require('../database/models');

const loginUservalidator = async (email, hash) => {
    const data = await user.findOne({
        where: { email, password: hash },
    })
    
    .then((res) => res)
    .catch((err) => err);
   
    if (!data || data === null) {
 return {
        message: 'Nome de usuario ou senha Incorretos',
        code: 404,
    }; 
}
    return {};
};

module.exports = {
    loginUservalidator,
};
