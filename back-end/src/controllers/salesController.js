const { sale, user, product } = require('../database/models');

const messageError = 'Algo deu errado';

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
    return res.status(500).json({ message: messageError, err: err.message });
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
    return res.status(500).json({ message: messageError, err: err.message });
  }
};

const getSalesByUser = async (req, res) => {
  const { email } = req.body;
  try {
    const { id } = await user.findOne({
      where: { email },
    });
    const data = await sale.findAll({
      where: { userId: id },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err: err.message });
  }
};

module.exports = {
  getAllSalesUser,
  getAllSalesProducts,
  getSalesByUser,
};
