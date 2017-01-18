let app = angular.module('LivroMean',['ngRoute', 'ngResource']);

angular.module('LivroMean', ['ngRoute', 'ngResource']).config(function($routeProvider){ //routeProvider para configurar as rotas (partials)
    $routeProvider.when('/contatos',{ //When define qual a rota pegar
      templateUrl: 'partials/contatos.html',
      controller:'ContatosController'

    });
    //Rota novo contato
    $routeProvider.when('/contato',{
      templateUrl: 'partials/contato.html',
      controller:'ContatoController'
    });
    //Rota contato (detalhe)
    $routeProvider.when('/contato/:contatoId',{
      templateUrl: 'partials/contato.html',
      controller:'ContatoController'
    });
});
