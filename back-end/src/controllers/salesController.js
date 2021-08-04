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
    const { id, role } = await user.findOne({
      where: { email },
    });
    if (role === 'customer') {
      const data = await sale.findAll({
        where: { userId: id },
      });
      res.status(200).json(data);
    }
    const data = await sale.findAll({
      where: { sellerId: id },
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

const getGeneratedSell = async (req, res) => {
  const { sellId } = req.body;
  try {
    const data = await sale.findOne({
      where: { id: sellId },
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: user, as: 'seller', attributes: ['name'] },
        { model: product, as: 'products', through: { attributes: ['quantity'] } }],
    });
    console.log(data);
    return res.status(200).json({ data: [data] });
  } catch (err) {
    return res.status(500).json({ message: messageError, err: err.message });
  }
};

module.exports = {
  getAllSalesUser,
  getAllSalesProducts,
  createSale,
  getSalesByUser,
  createRelation,
  getGeneratedSell,
};
