import fs from "fs";
const info = async (req,res) => {
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
        
        res.status(200).send(`<h2 style="color:blue;"> Archivo info.txt modificado</h2>`)

    } catch (error) {
        res.status(404).send(`<h2 style="color:red;">ERROR 404: recurso <span style="color:orange;">${archivo}</span> no encontrado</h2>`)
    }
}

export default {
    info
}