const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('/', 'html')
app.use(express.static(path.join(__dirname, '/')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index')
})

/* app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) */
app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})