module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("store", { 
    id:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },    
    Name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },    
  });

  Store.associate = function(models) {
    Store.hasMany(models.Item, {
    });
  };
  
  return Store;
  }


