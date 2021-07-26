module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(32),
    role: DataTypes.STRING(20),
  },
  {
    timestamps: false,
    tableName: 'users'
  });
  
  user.associate = (models) => {
    user.hasOne(models.sale, { foreignKey: 'user_id', as: 'saleByUser' });
    user.hasOne(models.sale, { foreignKey: 'seller_id', as: 'saleBySeller' });
  };

  return user;
};