const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", (req, res) =>{})
router.post("/api/burgers", (req, res)=> {})
router.put("/api/burgers/:id", (req, res) =>{})

// Export routes for server.js to use.
module.exports = router;