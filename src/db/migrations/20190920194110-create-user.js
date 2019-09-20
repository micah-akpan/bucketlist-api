
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'last_name'
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
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
  down: (queryInterface) => queryInterface.dropTable('Users')
};
