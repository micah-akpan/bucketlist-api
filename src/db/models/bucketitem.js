
export default (sequelize, DataTypes) => {
  const BucketItem = sequelize.define('BucketItem', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    done: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  BucketItem.associate = (models) => {
    BucketItem.belongsTo(models.Bucketlist, {
      foreignKey: 'id',
      as: 'items'
    });
  };
  return BucketItem;
};
