const Url = require('../models/urlModel')
const shortId  = require('shortid')

const get_home = async (req, res) => {

    const shrinked = ""
    res.render('index', {shrinked})

}
const post_url = async (req, res) => {


    const shortCode = shortId.generate()
    const shortUrl = `http://localhost:3000/${shortCode}`
    const longUrl = req.body.longurl
    // res.send({longUrl, shortUrl})

    try{
        const newUrl = new Url({longUrl, shortUrl, shortCode})
        const shrinked = await newUrl.save()
        // res.send(shrinked)

        res.render('index', {shrinked})
    } catch(err) {
        console.log(err)
    }


}

const reditolong = async (req, res) => {
    const shortCode = req.params.shorturl

    const getlong = await Url.findOne({shortCode })

    if (!getlong) {
        res.status(404).send("Url does not exist")
    }

    getlong.clicks ++
    getlong.save()

    res.redirect(getlong.longUrl)

}

const track_link = async (req, res) => {
    res.render('track')
}

// const get_singleUrl = async (req, res) => {
//     const id = req.params.id

//     const result = await findByID(id)
//     res.render('deets', {result})

    
// }

module.exports = {
    get_home,
    post_url,
    reditolong
    
}