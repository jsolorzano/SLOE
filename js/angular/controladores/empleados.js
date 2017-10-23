miAppAngular.controller('empleados', function($scope, configuracionGlobal, $http, $location){
	
    $scope.config = configuracionGlobal;
    
    $scope.nombrePagina = "Employee list";
        
    $http.get(configuracionGlobal.api_url + "empleados").then(function(respuesta){
//        console.log(respuesta);
        $scope.empleados = respuesta.data;
    });
    
    $scope.crearNuevo = function(){
        //alert(idEmpleado);
        $location.path("employeeNew");
    };
    
    $scope.editarDetalles = function(idEmpleado){
        //alert(idEmpleado);
        $location.path("employeeEdit/"+idEmpleado);
    };
    
    $scope.verDetalles = function(idEmpleado){
        //alert(idEmpleado);
        $location.path("employeeDetails/"+idEmpleado);
    };
                
});