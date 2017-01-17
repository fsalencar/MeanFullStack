

angular.module('LivroMean').controller('ContatosController',
  function($scope){

            $scope.total = 0;
            $scope.incrementa = function() {
              $scope.total++;
            };
            $scope.contatos = [
              {"_id": 1,
              "nome":"Jhontinha Noob",
              "email":"jhontinha@stefanini.com"
              },
              {"id":2,
              "nome":"Gaucho",
              "email":"capoeiraDeGaucho@gmail.com"
            },
            {"id":3,
            "nome":"Zenon",
            "email":"SenhorBarriga@gmail.com"
          },
        ];
        $scope.filtro=''; //Declara o filtro da html contatos para utilizar a propriedade FILTER na página

});
