const mongoose = require("mongoose")

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true, //TODO createAt, UpdateAt
        versionKey: false
    }
)

module.exports = mongoose.model("storages", StorageSchema)