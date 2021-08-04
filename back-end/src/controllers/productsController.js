const { sale, product } = require('../database/models');

// callback criadas para testes das associações
const getAllProductsSales = async (req, res) => {
  try {
    const data = await product.findAll({
      include: [
        { model: sale, as: 'sales', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado', err: err.message });
  }
};
// ----------------------------------------------------------------------

// callbacks validas
const getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      attributes: { exclude: ['sales'] },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado', err: err.message });
  }
};

module.exports = {
  getAllProductsSales,
  getProducts,
};