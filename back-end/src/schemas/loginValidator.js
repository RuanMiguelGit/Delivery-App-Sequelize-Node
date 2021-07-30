const jwt = require('jsonwebtoken');
const fs = require('fs');
const { user } = require('../database/models');

const secret = fs
.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const loginUserValidator = async (email, hash) => {
const data = await user.findOne({
where: { email, password: hash },
})

.then((res) => res)
.catch((err) => err);

if (!data || data === null) {
return {
message: 'Nome de usuário ou senha incorretos',
code: 404,
};
}
return {};
};

const tokenGenerator = async (email) => {
const jwtConfig = {
expiresIn: '7d',
algorithm: 'HS256',
};

const token = jwt.sign({ data: email }, secret, jwtConfig);
return { token };
};

module.exports = {
loginUserValidator,
tokenGenerator,
};
