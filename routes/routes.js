var db = require("../models");
module.exports = function(app) {
    app.get("/api/store", function(req, res) {
        
        db.List.findAll({}).then(function(dbList) {
        res.json(dbList);
        });
});
    app.post("/api/store", function(req, res) {
        db.List.create({
        text: req.body.text,
        complete: req.body.complete
        }).then(function(dbList) {
            res.json(dbList);
        })
        .catch(function(err) {
            res.json(err);
});
    });
    app.delete("/api/store/:id", function(req, res) {
        db.List.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(dbList) {
        res.json(dbList);
        });
    });
};