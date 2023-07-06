const suma = (numA, numB) => {
    return numA + numB;
}

const resta = (numA, numB) => {
    return numA - numB;
}

const multiplicacion = (numA, numB) => {
    return numA * numB;
}

// export{
//     suma,
//     resta,
//     multiplicacion,
// } Exportando objeto con propiedades nombradas

export default {suma,resta,multiplicacion}; //export dafult para hacer desestructuración en el main
