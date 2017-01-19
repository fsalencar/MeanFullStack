'use strict'

angular.module('LivroMean').controller('ContatoController',
 function($scope, $routeParams, $resource, Contato){

  // let Contato = $resource('/contatos/:id');

   if ($routeParams.contatoId){
      Contato.get({id: $routeParams.contatoId}, function(contato){
       $scope.contato = contato;
     },
   function(erro){
     $scope.mensagem = {
       texto: 'não foi possivel obter o contato.'
     };
     console.log(erro);
   }
   );
  }else {
   $scope.contato = new Contato();
    };

    $scope.salva = function(){
      $scope.contato.$save() //save() Cria uma requisição POST implicitamente
      .then(function(){
            $scope.mensagem = {texto: 'Contato Salvo!'};
            $scope.contato = new Contato(); //instancia e limpa o contato
            })
              .catch(function(erro){
                $scope.mensagem = {texto: 'Não foi possível salvar'};
              });
            };

 });
