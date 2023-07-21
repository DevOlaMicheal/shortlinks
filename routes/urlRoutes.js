const express = require('express')
const router = express.Router()
const { get_home, post_url, check_unique, reditolong } = require('../controllers/urlCont')


router.get('/olly', get_home)
router.get('/:shorturl', reditolong)

router.post('/olly/new-shrink', post_url)
router.post('/olly/details', check_unique)
// router.get('/url/:id', get_singleUrl)

module.exports = router