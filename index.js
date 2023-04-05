const express = require('express');//importanto

const app= express();//atribuindo a biblioteca express a variavel

app.listen(3333,() => {// criando porta
    console.log("Servidor online");
})