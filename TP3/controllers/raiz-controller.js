const saludo = (req , res, PORT) => {
    let time 
    let hours
    if (PORT == 8080) {
        time = new Date()
        let timeHours = time.getHours()
        hours = timeHours
    }else {
        time = new Date()
        let timeHours = time.getHours()
        hours = timeHours - 3 
    }  
    
    if (hours >= 6 && hours <= 12 ) {
        res.status(200).send(`<h1 style="color:red;"> Buenos dias!</h1>`)
    }else if (hours >= 13 && hours <= 19 ) {
        res.status(200).send(`<h1 style="color:red;"> Buenas tardes!</h1>`)
    }else {
        res.status(200).send(`<h1 style="color:red;"> Buenas noches!</h1>`)
    }
} 


export default {
    saludo
}