import express from "express";
import config from "./config/configServer.js";
import raiz from "./controllers/raiz-controller.js";
import random from "./controllers/random-controller.js";
import txt from "./controllers/info-controller.js";
import operaciones from "./controllers/operaciones-controller.js";

const app = express()
const PORT = process.env.PORT || config.CONFIG_SERVER.port

app.get('/', (req,res) => {
    raiz.saludo(req,res, PORT)
})


app.get('/random', (req,res) => {
    random.number(req,res, PORT)
})


app.get('/info', async (req,res) => {
    txt.info(req,res)
})

app.get('/operaciones', (req,res) => {
    operaciones.operacion(req,res)
})


app.get('*', (req,res) => {
    let { url, method } = req
    res.send(`<h1>LA RUTA ${url} EN METODO ${method} NO  ESTA DEFINIDA</h1>`)
})


app.set('PUERTO', PORT)

const server = app.listen(app.get('PUERTO'), () => {
    console.log("*********************************************");
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
    console.log("*********************************************");
})
server.on('error', error => console.log(`Error en Servidor: ${error}`))