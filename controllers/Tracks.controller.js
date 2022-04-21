const { tracksModel } = require("../models")

/**
 * obtener lista de la base de datos
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({})
    res.send({ data })
}

/**
 * obtiene un detalle
 */
const getItem = (req, res) => {

}

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req
    // console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})
}

/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {

}

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {

}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}