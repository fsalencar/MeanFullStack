'use strict'

module.exports = function() {
    let controller = {};
    controller.index = function (req, res) {// retornando uma página index.ejs
        res.render('index', {nome: 'Express'});
    };
    return controller;
};
