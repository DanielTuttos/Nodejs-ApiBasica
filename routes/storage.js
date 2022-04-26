const express = require("express");
const { createItem, getItems, getItem, updateItem, deleteItem } = require("../controllers/Storage.controller");
const authMiddleware = require("../middleware/session");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage.validator");
const router = express.Router()


router.get("/",[authMiddleware], getItems)
router.get("/:id", [validatorGetItem, authMiddleware], getItem)
router.post("/", [uploadMiddleware.single("myfile"), authMiddleware], createItem)
// router.put("/:id", [validatorGetItem], updateItem)
router.delete("/:id", [validatorGetItem, authMiddleware], deleteItem)

module.exports = router;