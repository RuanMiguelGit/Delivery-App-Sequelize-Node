const jwt = require('jsonwebtoken');
const fs = require('fs');
const { user } = require('../database/models');
const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';

const secret = fs
.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' }).trim();

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

const tokenGenerator = async (email, hash) => {
<<<<<<< HEAD
    const data = await user.findOne({
        where: { email, password: hash },
    })
    
    .then((res) => res)
    .catch((err) => err);
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
      const {id, name} = data
      
      const token = jwt.sign({ data:id, email, name }, secret, jwtConfig);
     return { token };
}

module.exports = {
    loginUservalidator,
    tokenGenerator
=======
const data = await user.findOne({
where: { email, password: hash },
})

.then((res) => res)
.catch((err) => err);
const jwtConfig = {
expiresIn: '7d',
algorithm: 'HS256',
};
const { id, name } = data;

const token = jwt.sign({ data: id, email, name }, secret, jwtConfig);
return { token };
>>>>>>> 73845d0c212f41edab24ea6d0a3f87506a05dbf2
};

module.exports = {
loginUservalidator,
tokenGenerator,
};