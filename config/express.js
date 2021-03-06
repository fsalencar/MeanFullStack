'use strict'

//Carregando módulo do express dentro da variável express (utilizando a função require)
let express = require('express');
//let home = require('../app/routes/home');
let load = require('express-load');
let bodyParser = require('body-parser');

module.exports = function(){
    let app = express();
    app.set('port',3000)
    app.use(express.static('./public')); //middleware

//body-parser

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(require('method-override')());

//    home(app);

load('models', {cwd:'app'})
  .then('controllers')
  .then('routes')
  .into(app);

    app.set('view engine','ejs'); /*View utilizada, no caso EJS, torna-se padrão o próprio express
                                  passa a utilizar .ejs no fim dos arquivos*/
    app.set('views','./app/views'); //Diretório das VIEWS

    return app;
};
