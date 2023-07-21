const Url = require('../models/urlModel')
const shortId  = require('shortid')

const get_home = async (req, res) => {

    const shrinked = ""
    res.render('index', {shrinked})

}
const post_url = async (req, res) => {


    const shortCode = shortId.generate()
    const uniqueId = shortId.generate()
    const shortUrl = `http://localhost:3000/${shortCode}`
    const longUrl = req.body.longurl
    // res.send({longUrl, shortUrl})

    try{
        const newUrl = new Url({longUrl, shortUrl, shortCode, uniqueId})
        const shrinked = await newUrl.save()
        // res.send(shrinked)
        res.render('index', {shrinked})
    } catch(err) {
        console.log(err)
    }


}

const check_unique = async (req, res) => {

    const uniqueId = req.body.uniqueId

    const getDetails = await Url.findOne({uniqueId})

    // res.send(getDetails)

    if (getDetails === null) {
        res.status(404).render("404")
    }else{
        
        res.redirect(`/olly/details/${getDetails.id}`)

    }

}

const load_details = async(req, res) => {
    const id = req.params.id
    
    const details = await Url.findById(id)

    res.render('deets', {shrinked: details})

}

const reditolong = async (req, res) => {
    const shortCode = req.params.shorturl

    const getlong = await Url.findOne({ shortCode })

    if (getlong === null) {
        res.status(404).send("Url does not exist")
    }else{
        getlong.clicks ++
        getlong.save()
    }
    res.redirect(getlong.longUrl)

}


// const get_singleUrl = async (req, res) => {
//     const id = req.params.id

//     const result = await findByID(id)
//     res.render('deets', {result})

    
// }

module.exports = {
    get_home,
    post_url,
    reditolong,
    check_unique,
    load_details
    
}