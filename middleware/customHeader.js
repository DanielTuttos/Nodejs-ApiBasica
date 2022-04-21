const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key
        if (apiKey == 'daniel-01') {
            next()
        } else {
            res.status(403)
            res.send({ error: "Api_key no es correcta" })
        }
    } catch (error) {
        res.status(403)
        res.send({ error: "Algo ocurrio en el custom header" })
    }
}

module.exports = customHeader