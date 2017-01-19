angular.module ('LivroMean').factory('Contato',
function($resource){
    return $resource('/contatos/:id');
});
