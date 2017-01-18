'use strict'

angular.module('LivroMean').controller('ContatosController',
  function($resource,$scope){

            $scope.contatos = [];
          //  $scope.total = 0;
            $scope.filtro=''; //Declara o filtro da html contatos para utilizar a propriedade FILTER na página
            $scope.mensagem={texto:''};

            let Contato = $resource('/contatos/:id');

            function buscaContatos(){

              console.log('passeio');
              Contato.query(
                function(contatos){
                  $scope.contatos = contatos;
                },
                function(erro){
                  $scope.mensagem={texto:'Não foi possível remover o contato'};
                  console.log(erro)
                }
              );
            }
            buscaContatos();

            $scope.remove = function(contato) {
            Contato.delete({id: contato._id}, buscaContatos, function(erro) {
              $scope.mensagem={texto:'Não foi possível remover o contato'};
              console.log(erro);
                }
              );
            }

            });


            // $http.get('/contatos').success(function(data){
            //   $scope.contatos = data;
            // })
              // .error(function(statusText){
              //   console.log("Não foi possivel completar a lista de contatos");
              //   console.log(statusText);
              // });
