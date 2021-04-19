const saludo = (req , res, PORT) => {
    let time 
    if (PORT == 8080) {
        time = new Date().toLocaleTimeString().split(':')[0]
    }else {
        time = new Date().toLocaleTimeString().split(':')[0] - 3
        console.log(time);
    }  
    
    if (time >= 6 && time <= 12 ) {
        res.status(200).send(`<h1 style="color:red;"> Buenos dias!</h1>`)
    }else if (time >= 13 && time <= 19 ) {
        res.status(200).send(`<h1 style="color:red;"> Buenas tardes!</h1>`)
    }else {
        res.status(200).send(`<h1 style="color:red;"> Buenas noches!</h1>`)
    }
} 


export default {
    saludo
}