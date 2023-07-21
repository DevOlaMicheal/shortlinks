const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoDb= require('./config/db')
const port = 3000

app.set('view engine', "ejs")
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

mongoDb()

app.get('/', (req, res) => {
   res. redirect('/olly')
})

app.get('/track', async (req, res) => {
   res.render('track')
})

app.use(require('./routes/urlRoutes'))

app.use((req, res) => {
   res.status(404).render('404')
})
app.listen(port, () => console.log(`app listening on port ${port}!`))