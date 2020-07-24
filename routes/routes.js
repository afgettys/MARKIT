var db = require("../models");
const {DataTypes} = require("sequelize")
const store = require("../models/store")(db.sequelize, DataTypes)

module.exports = function(app) {
    app.get("/api/store", function(req, res) {
        
        store.findAll({}).then(function(dbList) {
        res.json(dbList);
        });
});
    app.post("/api/store", function(req, res) {
    console.log("Enter Here", req.body);
        store.create({
        name: req.body.itemName,
        complete: req.body.complete
        }).then(function(dbList) {
            res.json(dbList);
        })
        .catch(function(err) {
            res.json(err);
});
    });
    app.delete("/api/store/:id", function(req, res) {
        store.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(dbList) {
        res.json(dbList);
        });
    });
};