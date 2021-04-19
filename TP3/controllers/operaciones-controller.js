const operacion = (req,res) => {
    let {num1, num2, operacion} = req.query
    let objResultado = new Object
    if (!isNaN(num1) && !isNaN(num2) && isNaN(operacion) ) {
        num1 = parseInt(num1)
        num2 = parseInt(num2) 
        switch (operacion) {
            case 'suma':
                objResultado.num1 = num1
                objResultado.num2 = num2
                objResultado.operacion = 'suma'
                objResultado.resultado = num1 + num2
                break;
            case 'resta':
                objResultado.num1 = num1
                objResultado.num2 = num2
                objResultado.operacion = 'resta'
                objResultado.resultado = num1 - num2
                break;
            case 'multiplicacion':
                objResultado.num1 = num1
                objResultado.num2 = num2
                objResultado.operacion = 'multiplicacion'
                objResultado.resultado = num1 * num2
                break;
            case 'division':
                objResultado.num1 = num1
                objResultado.num2 = num2
                objResultado.operacion = 'division'
                objResultado.resultado = num1 / num2
                break;
            default:
                let error = {
                    num1: {valor:num1, tipo:typeof num1},
                    num2: {valor:num2, tipo:typeof num2},
                    operacion: {valor:operacion, tipo:typeof operacion},
                }
               return res.status(404).json({ERROR:'ERROR EN LOS PARAMETROS INGRESADOS', error})
        }
        res.status(200).send({objResultado})
    }else{
        let error = {
            num1: {valor:num1, tipo:typeof num1},
            num2: {valor:num2, tipo:typeof num2},
            operacion: {valor:operacion, tipo:typeof operacion},
        }
        res.status(404).json({ERROR:'ERROR EN LOS PARAMETROS INGRESADOS', error})
    }
}


export default {
    operacion
}