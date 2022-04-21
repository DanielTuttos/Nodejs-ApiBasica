const express = require("express");
const { createItem } = require("../controllers/Storage.controller");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router()


router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router;