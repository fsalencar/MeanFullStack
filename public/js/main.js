

angular.module('LivroMean', ['ngRoute']).config(function($routeProvider){ //routeProvider para configurar as rotas (partials)
    $routeProvider.when('/contatos',{ //When define qual a rota pegar
      templateUrl: 'partials/contatos.html',
      controller:'ContatosController'

    });
    $routeProvider.when('/contato/:contatoId',{
      templateUrl: 'partials/contato.html',
      controller:'ContatoController'
    });
});
