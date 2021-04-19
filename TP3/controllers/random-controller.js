const number = (req,res,PORT) => {
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
    res.send({PORT})
}


export default {
    number
}