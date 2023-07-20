const express = require('express')
const router = express.Router()
const { get_home, post_url } = require('../controllers/urlCont')


router.get('/url-shortner', get_home)
router.post('/post-url', post_url)

module.exports = router