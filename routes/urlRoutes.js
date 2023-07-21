const express = require('express')
const router = express.Router()
const { get_home, post_url, get_singleUrl, reditolong } = require('../controllers/urlCont')


router.get('/olly', get_home)
router.post('/olly/new-shrink', post_url)
router.get('/:shorturl', reditolong)
// router.get('/url/:id', get_singleUrl)

module.exports = router