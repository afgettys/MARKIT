var db = require("../models");
const { DataTypes } = require("sequelize")

module.exports = function (app) {
    app.get("/api/store", function (req, res) {

        db.Store.findAll({}).then(function (dbList) {
            res.json(dbList);
        });
    });
    app.post("/api/item", function (req, res) {
        console.log("Enter Here", req.body);
        db.Item.create({
            item: req.body.itemName
        }).then(function (dbList) {
            res.json(dbList);
        })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.delete("/api/store/:id", function (req, res) {
        db.Store.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbList) {
            res.json(dbList);
        });
    });
};