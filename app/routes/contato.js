'use strict'

module.exports = function(app) {
    let controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
      app.get('/contatos/:id', controller.obtemContato);

      app.route('/contatos')
        //    .get(controller.listaTodos)
      //      .post(controller.salvaContato);

      app.post('/contatos', controller.salvaContato);

      app.route('/contatos/:id')
          //  .get(controller.obtemContato)
            .delete(controller.removeContato);

      //app.delete('/contatos', controller.removeContato);
};
