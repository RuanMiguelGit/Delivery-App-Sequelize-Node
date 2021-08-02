const { sale, user, product, salesProducts } = require('../database/models');

const messageError = 'Algo deu errado';

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
// ----------------------------------------------------------------------

// teste com POST **UTILIZAR CAMEL CASE NA CREATED**
const createSale = async (req, res) => {
  const { 
     userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
     products, 
     quantity } = req.body;
    const t = totalPrice.replace(/,/g, '.');
    const data = await 
    sale.create({ 
    userId, sellerId, totalPrice: t, deliveryAddress, deliveryNumber, status, saleDate: new Date(),
    });
    // const saleId= 'sale_id',
    const { id } = await sale.findOne({ where: { id: data.id } });
    await products.forEach((item, index) => {
     console.log(item);
     console.log(id);
    salesProducts.create({ [['sale_id']]: id, [['product_id']]: item, quantity: quantity[index] });
    console.log(quantity[index]);
     });
    
    return res.status(201).json(id);
};
// ----------------------------------------------------------------------

// callbacks validas
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

const createRelation = async (req, res) => {
  const data = await salesProducts.findAll({});
  return res.status(200).json(data);
};

module.exports = {
  getAllSalesUser,
  getAllSalesProducts,
  createSale,
  getSalesByUser,
  createRelation,
};
