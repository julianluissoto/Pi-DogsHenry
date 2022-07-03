const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("temperament", {
    temperament: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
  });
};
