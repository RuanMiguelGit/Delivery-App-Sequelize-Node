module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users'
  });
  user.associate = (models) => {
    user.hasOne(models.sale, { foreignKey: 'user_id', as: 'seller' });
  };
  return user;
};