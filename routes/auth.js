const express = require("express")
const { loginCtrl, registerCtrl } = require("../controllers/Auth.controller")
const { validatorLogin, validatorRegister } = require("../validators/auth.validator")
const router = express.Router()

// login
router.post("/login", validatorLogin, loginCtrl)

//register
router.post("/register", validatorRegister, registerCtrl)

module.exports = router