const models = {
    usersModel : require("./NoSql/Users.model"),
    tracksModel : require("./NoSql/Tracks.model"),
    storageModel : require("./NoSql/Storage.model")
}

module.exports = models

// const engine = process.env.ENGINE_DB || null;

// const pathModel = engine === "mysql" ? "./sql" : "./nosql"
// const models = {
//     usersModel : require(`./${pathModel}/Users.model`),
//     tracksModel : require(`./${pathModel}/Tracks.model`),
//     storageModel : require(`./${pathModel}/Storage.model`)
// }

// module.exports = models