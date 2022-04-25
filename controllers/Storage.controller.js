const { matchedData } = require("express-validator")
const { storageModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")
const fs = require("fs")

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

/**
 * obtener lista de la base de datos
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
}

/**
 * obtiene un detalle
 */
const getItem = async (req, res) => {
    try {
        // req = matchedData(req);
        const { id } = matchedData(req);
        // console.log(id)
        const data = await storageModel.findById(id)
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

        const { body, file } = req
        // console.log(file)
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
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
// const updateItem = async (req, res) => {

// }

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        // req = matchedData(req);
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id)
        await storageModel.deleteOne({_id:id})
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}


module.exports = {
    getItems,
    getItem,
    createItem,
    // updateItem,
    deleteItem
}