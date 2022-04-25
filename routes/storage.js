const express = require("express");
const { createItem, getItems, getItem, updateItem, deleteItem } = require("../controllers/Storage.controller");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage.validator");
const router = express.Router()


router.get("/", getItems)
router.get("/:id", [validatorGetItem], getItem)
router.post("/", [uploadMiddleware.single("myfile")], createItem)
// router.put("/:id", [validatorGetItem], updateItem)
router.delete("/:id", [validatorGetItem], deleteItem)

module.exports = router;