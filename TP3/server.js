import express from "express";
import config from "./config/configServer.js";
import fs from "fs";

const app = express()
const PORT = process.env.PORT || config.CONFIG_SERVER.port

app.get('/', (req,res) => {
    let time = new Date().toLocaleTimeString().split(':')[0]
    if (time >= 6 && time <= 12 ) {
        res.send(`<h2 style="color:red;"> Buenos dias!</h2>`)
    }
    else if (time >= 13 && time <= 19 ) {
        res.send(`<h2 style="color:red;"> Buenas tardes!</h2>`)
    }else {
        res.send(`<h2 style="color:red;"> Buenas noches!</h2>`)
    }
})


app.get('/random', (req,res) => {
    let obj = new Object
    let numberRandom
    for (let i = 0; i < 10000; i++) {
        numberRandom = Math.floor(Math.random() *20 + 1)
        if ( !obj.hasOwnProperty(numberRandom) ) {
            obj[numberRandom] = 1
        }else{
            obj[numberRandom]++
        }
    }
    res.send(obj)
})


app.get('/info', async (req,res) => {
    let archivo = './package.json'
    let infoFile = './info.txt'
    try {
        let file = await fs.promises.readFile(archivo, 'utf-8')
        let fileStr = JSON.stringify(JSON.parse(file))
        let fileObj = JSON.parse(file)

        let info = {
        contenidoStr: fileStr ,
        contenidoObj: fileObj,
        size: file.length
        }

        console.log("\n Objeto info", info);

        await fs.promises.writeFile(infoFile, JSON.stringify(info,null, 4))
        
        res.send(`<h2 style="color:blue;"> Archivo info.txt modificado</h2>`)

    } catch (error) {
        res.end(`<h2 style="color:red;">ERROR 404: recurso <span style="color:orange;">${archivo}</span> no encontrado</h2>`)
    }

   

    
    
    
    
})


 
app.listen(PORT, () => {
    console.log("*********************************************");
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
    console.log("*********************************************");
})
