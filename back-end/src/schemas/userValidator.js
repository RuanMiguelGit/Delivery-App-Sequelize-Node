const { user } = require('../database/models');

const validateName = async (name) => {
    const data = await user.findOne({
        where: { name },
    })
    .then((res) => res)
    .catch((err) => err);
    console.log(data);
     if (data !== null) {
 return {
         message: 'Usuario já registrado',
         code: 409,
     }; 
}
     return {};
};

const validateEmail = async (email) => {
    const data = await user.findOne({
        where: { email },
    })
    .then((res) => res)
    .catch((err) => err);
    console.log(data);
     if (data !== null) {
 return {
         message: 'Usuario já registrado',
         code: 409,
     }; 
}
     return {};
};

const validateCreation = async (name, email) => {
const nameValid = await validateName(name);
if (nameValid.message) return nameValid;
const emailValid = await validateEmail(email);
if (emailValid.message) return emailValid;
return {};
};

module.exports = {
    validateCreation,
};