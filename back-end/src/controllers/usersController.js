const { sale, user } = require('../database/models');

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
    return res.status(500).json({ message: 'Algo deu errado', err: err.message });
  }
};
// ----------------------------------------------------------------------

// callbacks validas

module.exports = {
  getAllUsersSale,
};