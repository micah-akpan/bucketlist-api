
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Bucketlists', {
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
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'created_by'
    },
    dateCreated: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'date_created',
      defaultValue: new Date()
    },
    dateModified: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'date_modified',
      defaultValue: new Date()
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('bucketlists')
};
