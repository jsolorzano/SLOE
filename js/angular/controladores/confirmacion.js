miAppAngular.controller('confirmacion', function($scope, carritoDeCompras){
    
    $scope.productos = carritoDeCompras.productos;
    
    $scope.total = carritoDeCompras.total;
    
});
