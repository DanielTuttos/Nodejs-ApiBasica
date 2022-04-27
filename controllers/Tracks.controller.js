const { matchedData } = require("express-validator")
const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

/**
 * obtener lista de la base de datos
 */
const getItems = async (req, res) => {

    try {
        const user = req.user;
        const data = await tracksModel.findAllData({})
        res.send({ data, user })
    } catch (error) {
        // console.log(error)
        handleHttpError(res, "ERROR_GET_ITEMS")
    }

}

/**
 * obtiene un detalle
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findOneData(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM")
    }
}

/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await tracksModel.findOneAndUpdate(id, body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM")
    }
}

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.delete({ _id: id })
        res.send({ data })
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_DETELE_ITEM")
    }
}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}