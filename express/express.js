// npm init
// det kommer package.json
// klckar på vidare
//vi kommer hoppar över vidare
// döpar express projekt
//npm i express --save  : för node_modules mapp
//

//cd express
//ls

const express = require('express')
const path = require('path')
const api = require('./api')

const app = express()

const handleStaticFiles = express.static(path.join(__dirname, '..','build'))
app.use(handleStaticFiles)

app.use(api)


// app.get('/',(request, response)=>{
//     response.status(200)
//     response.send('Hello World')
// })

app.listen(8080, ()=>{console.log('Server started!')})
