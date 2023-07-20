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
   res. redirect('/url-shortner')
})

app.use(require('./routes/urlRoutes'))



app.listen(port, () => console.log(`app listening on port ${port}!`))