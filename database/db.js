const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect("mongodb+srv://root:admin@cluster0.k80m18v.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(() => {
        console.log("Banco de dados conectado com sucesso!")
    }).catch((err) => {
        console.log(`Falha ao se conectar ao bando de dados ${err}`)
    })
}

module.exports = connectToDb