module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", { 
    id:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },    
    Store: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },    
  });
  
 
   return Store;
  }


