const UsersModel = require("../models/NoSql/Users.model")
const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")


const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if (!dataToken._id) {
            handleHttpError(res, "TOKEN_NOT_VALID", 401)
            return
        }

        const user = await UsersModel.findById(dataToken._id)

        req.user = user

        next()

    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = authMiddleware