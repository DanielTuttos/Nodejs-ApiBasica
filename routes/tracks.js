const express = require("express")
const { getItems, getItem, createItem } = require("../controllers/Tracks.controller")
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem } = require("../validators/tracks.validator")
const router = express.Router()

// TODO http://localhost/tracks get, post, delete put

router.get("/", getItems)
// router.get("/:id", getItem)
router.post("/", validatorCreateItem, customHeader, createItem)

module.exports = router