const { sale, user } = require('../database/models');

const message = 'Algo deu errado';
// callback criadas para testes das associações
const getAllUsersSale = async (req, res) => {
  try {
    const data = await user.findAll({
      include: [
        { model: sale, as: 'saleByUser', attributes: { exclude: ['user_id', 'seller_id'] } },
        { model: sale, as: 'saleBySeller', attributes: { exclude: ['user_id', 'seller_id'] } },
      ],
    });
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message, err: err.message });
  }
};
// ----------------------------------------------------------------------
const getAllSalesUser = async (req, res) => {
  try {
    const data = await user.findAll({
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: user, as: 'user', attributes: { exclude: ['id'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id'] } },
      ],
    });
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message, err: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await user.findAll({});
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message, err: err.message });
  }
};
// callbacks validas

module.exports = {
  getAllUsersSale,
  getAllSalesUser,
  getAllUsers,
};