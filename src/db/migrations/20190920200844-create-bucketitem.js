
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BucketItems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    done: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    bucketlistId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Bucketlists',
        key: 'id'
      },
      field: 'bucket_list_id'
    },
    dateCreated: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'date_created',
      defaultValue: Sequelize.NOW
    },
    dateModified: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'date_modified',
      defaultValue: Sequelize.NOW
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('BucketItems')
};
