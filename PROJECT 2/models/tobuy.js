module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Place", { 
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
  
  var Item = sequelize.define("Product", { 
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    item: {
      type: Datatype.STRING,
      allowNull:false,
      type: DataTypes.INTEGER
    },  
    });    
   return Item;
  }


  //Item: {
    //type: DataTypes.STRING,
    //defaultValue: false,
    //allowNull: false,
    

  //Notes:{
   // type: DataTypes.TEXT,
   // defaultValue: false,
   // allowNull: false,
  //}

