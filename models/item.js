module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("item", { 
    Item: {
      type: DataTypes.TEXT,
      allowNull: false,
    },    
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Store, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
}