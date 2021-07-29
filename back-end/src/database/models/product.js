module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL(4,2) },
    urlImage: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return product;
};
