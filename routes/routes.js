var db = require("../models");
module.exports = function(app) {
    app.get("/api/tobuy", function(req, res) {
        
        db.Tobuy.findAll({}).then(function(dbTobuy) {
        res.json(dbTobuy);
        });
});
    app.post("/api/tobuy", function(req, res) {
        db.Tobuy.create({
        text: req.body.text,
        complete: req.body.complete
        }).then(function(dbTobuy) {
            res.json(dbTobuy);
        })
        .catch(function(err) {
            res.json(err);
});
    });
    app.delete("/api/tobuy/:id", function(req, res) {
        db.Tobuy.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(dbTobuy) {
        res.json(dbTobuy);
        });
    });
};