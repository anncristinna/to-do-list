const express= require('express')
const app = express()
const path = require("path")
const routes = require('./routes/routes')
const connectToDb = require('./database/db')
const { urlencoded } = require('express')

//configuações

    connectToDb()    
    app.set("view engine", "ejs")
    app.use(express.static(path.join(__dirname, "public"))) //para indentificar que os arquivos estáticos estão na pasta public
    app.use(express.urlencoded())
    app.use(routes)




const port = 8081
app.listen(port, () => {
    console.log(`Servidor rodando na URL http://localhost:${port}`)
})