
export default (sequelize, DataTypes) => {
  const Bucketlist = sequelize.define('Bucketlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'created_by'
    }
  }, {});
  Bucketlist.associate = (models) => {
    Bucketlist.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user'
    });

    Bucketlist.hasMany(models.BucketItem, {
      foreignKey: 'id',
      as: 'items'
    });
  };
  return Bucketlist;
};
