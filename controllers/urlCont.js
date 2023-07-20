const Url = require('../models/urlModel')
const shortId  = require('shortid')

const get_home = (req, res) => {
    res.render('index')
}
const post_url = async (req, res) => {


    const shortCode = shortId.generate()
    const shortUrl = `http://localhost:3000/${shortCode}`
    const longUrl = req.body.longurl
    // res.send({longUrl, shortUrl})

    try{
        const newUrl = new Url({longUrl, shortUrl})
        await newUrl.save()
        const r = res.json(newUrl._id)
        res.redirect('/')
    } catch(err) {
        console.log(err)
    }


}

const get_singleUrl = async (req, res) => {
    const id = req.params.id

    
}

module.exports = {
    get_home,
    post_url
}