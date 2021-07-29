const { sale, user, product } = require('../database/models');

// callback criadas para testes das associações
const getAllSalesUser = async (req, res) => {
  try {
    const data = await sale.findAll({
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: user, as: 'user', attributes: { exclude: ['id'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id'] } },
      ],
    });
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado', err: err.message });
  }
};

const getAllSalesProducts = async (req, res) => {
  try {
    const data = await sale.findAll({
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: product, as: 'products', through: { attributes: [] } },
      ],
    });
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado', err: err.message });
  }
};
// ----------------------------------------------------------------------

// teste com POST **UTILIZAR CAMEL CASE NA CREATED**
const createSale = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;
  try {
    const data = await sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    });
    const created = await sale.findOne({ where: { id: data.id } });

    return res.status(200).json(created);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado', err: err.message });
  }
};

// callbacks validas

module.exports = {
  getAllSalesUser,
  getAllSalesProducts,
  createSale,
};