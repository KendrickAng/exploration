const express = require('express')
const app = express()
const md = require('markdown-it')({
    html: true, // enable html tags in the source string
    linkify: true, // convert URL-like text into links. Uses linkify-it
})

// configure plugins
md.use(require('markdown-it-mark'))

const markdown = `
# ==welcome== to markdown-it.com!
`

app.get('/', (req, res) => res.send(md.render(markdown)))
app.listen(3000)