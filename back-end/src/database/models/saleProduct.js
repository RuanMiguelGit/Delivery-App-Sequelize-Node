module.exports = (sequelize, _DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {},
    { timestamps: false, tableName: 'sales_products', underscore:true});
  
    salesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
};
