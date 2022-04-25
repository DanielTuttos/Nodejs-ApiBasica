const express = require("express")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/Tracks.controller")
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks.validator")
const router = express.Router()

// TODO http://localhost/tracks get, post, delete put

router.get("/", getItems)
router.get("/:id", [validatorGetItem], getItem)
router.post("/", [validatorCreateItem], createItem)
router.put("/:id", [validatorGetItem, validatorCreateItem], updateItem)
router.delete("/:id", [validatorGetItem], deleteItem)

module.exports = router