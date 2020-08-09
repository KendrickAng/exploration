const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', function(req, res) {
    const data = {
        firstName: 'Kendrick',
        lastName: 'Ang'
    }
    res.render('index.html', data)
})

app.listen(3000)