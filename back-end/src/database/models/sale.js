module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true }, // Comentário no course - bloco 30 - dia 3 // A declaração da Foreign Key é opcional no model
    sellerId: { type: DataTypes.INTEGER, foreignKey: true }, // Comentário no course - bloco 30 - dia 3 // A declaração da Foreign Key é opcional no model
    totalPrice: { type: DataTypes.DECIMAL(9,2) },
    deliveryAddress: { type: DataTypes.STRING(100) },
    deliveryNumber: { type: DataTypes.STRING(50) },
    saleDate: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING(50) },
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
    sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'seller' });
  };

  return sale;
};