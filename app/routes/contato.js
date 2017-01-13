'use strict'

module.exports = function(app) {
    let controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
      app.get('/contatos/:id', controller.obtemContato);
};
