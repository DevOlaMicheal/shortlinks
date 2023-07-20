const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const shortId = require('shortid')

const UrlSchema = new Schema({
    longUrl: {type: String, required: true},
    shortUrl: {type: String, required: true},
    clicks: {type: Number, required: true, default: 0}
}, { timestamps: true })


const Url = mongoose.model("url", UrlSchema)

module.exports = Url