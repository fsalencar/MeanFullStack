'use strict'

//Carregando módulo do express dentro da variável express (utilizando a função require)
let express = require('express');

module.exports = function(){
    let app = express();
    return app;
};
