

angular.module('LivroMean').controller('ContatosController',
  function($scope, $http){

            $scope.contatos = [];
            $scope.incrementa = function() {
            $scope.total++;
            };
            $scope.total = 0;

            $http.get('/contatos').success(function(data){
              $scope.contatos = data;
            })
              .error(function(statusText){
                console.log("Não foi possivel completar a lista de contatos");
                console.log(statusText);
              });

        $scope.filtro=''; //Declara o filtro da html contatos para utilizar a propriedade FILTER na página

});
