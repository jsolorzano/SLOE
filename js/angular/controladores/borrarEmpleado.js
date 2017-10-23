miAppAngular.controller('borrarEmpleado', function($scope, $http, $routeParams, configuracionGlobal, $location){
    
    $scope.config = configuracionGlobal;
    
    $scope.borrarEmpleado = function(){
        
        //var txt;
        var r = confirm("¿Está seguro de borrar el empleado?");
        if (r == true) {
            //txt = "You pressed OK!";
            $http({
               url: configuracionGlobal.api_url + "empleados/delete",
               method: "POST",
               data: { empleadoID: $routeParams.employeeId },
               headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(respuesta){
                //alert(respuesta.data['response']);
                if(respuesta.data['response'] == 'ok'){
                    alert("Empleado eliminado correctamente...");
                    $location.path("/employees");
                }else{
                    alert("Ocurrió un error, contacte con el administrador...");
                }
            });
        }
        
    };
    
});
