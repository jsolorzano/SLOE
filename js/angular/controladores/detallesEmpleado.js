miAppAngular.controller('detallesEmpleado', function($scope, $http, $routeParams, configuracionGlobal, $location){
    
    $scope.config = configuracionGlobal;
    
    $scope.nombrePagina1 = "Employee details";
    
    $scope.nombrePagina2 = "Employee edit";
    
    $http.get(configuracionGlobal.api_url + "empleados/details", {
        
        params: { empleadoID: $routeParams.employeeId }  // Enviamos el id que viene como parámetro en la url capturándolo con $routeParams
        
    }).then(function(respuesta){
        
        $scope.empleado = respuesta.data[0];
        
    });
    
    $scope.guardarInfo = function(){
        
        if($scope.form_empleado.$valid){
            $http({
               url: configuracionGlobal.api_url + "empleados/save",
               method: "POST",
               data: $scope.empleado,
               headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(respuesta){
                //alert(respuesta.data['response']);
                if(respuesta.data['response'] == 'ok'){
                    alert("Datos guardados correctamente...");
                    $location.path("/employees");
                }
            });
        }/*else{
            alert("Faltan casillas por rellenar");
        }*/
        
    };
    
});
