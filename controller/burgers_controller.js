const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all((data) => {
    let borgerobj = {
      burger: data,
    };
    res.render("index", borgerobj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insert(req.body.name, (data) => {
    res.json({ id: data.insertId });
  });
});
router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.body.devour, req.params.id, (data) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
