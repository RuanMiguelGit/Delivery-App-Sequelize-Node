const jwt = require('jsonwebtoken');
const fs = require('fs');
const { user } = require('../database/models');

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
};

module.exports = {
loginUservalidator,
tokenGenerator,
};