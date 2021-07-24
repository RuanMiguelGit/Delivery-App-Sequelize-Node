const { sale, user } = require('../database/models');


const getAll = async (req, res) => {
  const data = await sale.findAll({
    include: [{ model: user, as: 'users', through: { attributes: [] } }],
  });
  console.log(data);
  return res.status(200).json(data);
}
console.log(new Date());
module.exports = {
  getAll,
}