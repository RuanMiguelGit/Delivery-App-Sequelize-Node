module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {   
     quantity: { type: DataTypes.INTEGER  },
     productId: { type: DataTypes.INTEGER, foreignKey: true },
     saleId: { type: DataTypes.INTEGER, foreignKey: true }

},
  
    { timestamps: false, tableName:'salesProducts', underscored:true});
    
  
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
