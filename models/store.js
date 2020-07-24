module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("store", { 
    id:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },    
    Name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },    
  });

  Store.associate = function(models) {
    Store.hasMany(models.Item, {
    });
  };
  
  return Store;
  }


