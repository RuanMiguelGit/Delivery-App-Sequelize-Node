module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    total_price: { type: DataTypes.DECIMAL(9,2) },
    delivery_address: { type: DataTypes.STRING },
    delivery_number: { type: DataTypes.STRING },
    sale_date: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscore: 'true'
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'users' });
  };  
  
  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'seller' });
  };

  return sale;
};