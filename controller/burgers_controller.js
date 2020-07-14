const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//route for getting the database of burgers
router.get("/", (req, res) => {
  burger.all((data) => {
    //sending the burger data to the index handlebar
    let borgerobj = {
      burger: data,
    };
    res.render("index", borgerobj);
  });
});

//route for adding a new burger
router.post("/api/burgers", (req, res) => {
  //insert the name and send the new id
  burger.insert(req.body.name, (data) => {
    res.json({ id: data.insertId });
  });
});
//route for updating the burgers devour state
router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.body.devour, req.params.id, (result) => {
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
