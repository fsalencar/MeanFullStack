'use strict'

let contatos = [
  {_id: 1, nome: 'Toninho 1',
  email: 'tonoimalaquinho@gmail.com'},
  {_id: 2, nome: 'Bonaldo 2',
  email: 'bonaldinho@gmail.com'},
  {_id: 3, nome: 'Jhontinha',
  email: 'jhontinhaswinguero@gmail.com'}
];

module.exports = function(app) {
//  let controller = app.controllers.contato;

  let ID_CONTATO_INC = 3;

 let controller = {};
  controller.listaContatos = function(req, res){
    res.json(contatos);
    //Envia a lista

  };
    controller.salvaContato = function(req, res) {
      let contato = req.body;
          contato = contato._id ? atualiza(contato): adiciona(contato);
      res.json(contato);
    };

    function adiciona(contatoNovo) {

        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    };

    function atualiza(contatoAlterar) {
      contatos = contatos.map(function(contato){
        if(contato._id == contatoAlterar._id){
          contato = contatoAlterar;
        }
        return contato;rs
      });
      return contatoAlterar;
    }

    controller.removeContato = function(req, res){
    let idContato = req.params.id;
    contatos = contatos.filter(function(contato){
      return contato._id != idContato;
    });
    res.status(204).end();
  };

  controller.obtemContato = function(req,res){
    console.log(req.params.id);

    let idContato = req.params.id;
    let contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];
      contato ?  res.json(contato) :  res.status(404).send('Contato não encontrado');
        app.delete('/contatos:id', controller.removeContato);
  };
  return controller;
};
