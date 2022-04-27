const express = require("express")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/Tracks.controller")
const checkRol = require("../middleware/rol")
const authMiddleware = require("../middleware/session")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks.validator")
const router = express.Router()

// TODO http://localhost/tracks get, post, delete put

router.get("/", [authMiddleware, checkRol(["admin", "user"])], getItems)
router.get("/:id", [validatorGetItem, authMiddleware], getItem)
router.post("/", [validatorCreateItem, authMiddleware, checkRol(["admin", "user"])], createItem)
router.put("/:id", [validatorGetItem, validatorCreateItem, authMiddleware], updateItem)
router.delete("/:id", [validatorGetItem, authMiddleware], deleteItem)

module.exports = router