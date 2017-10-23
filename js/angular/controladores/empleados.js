miAppAngular.controller('empleados', function($scope, configuracionGlobal, $http, $routeParams, $location, $window){
	
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
    
    $scope.borrarEmpleado = function(idEmpleado){
        
        //var txt;
        var r = confirm("¿Está seguro de borrar el empleado?");
        if (r == true) {
            //txt = "You pressed OK!";
            $http({
               url: configuracionGlobal.api_url + "empleados/delete",
               method: "POST",
               data: { empleadoID: idEmpleado },
               headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(respuesta){
                //alert(respuesta.data['response']);
                if(respuesta.data['response'] == 'ok'){
                    alert("Empleado eliminado correctamente...");
                    //$location.path("/employees");
                    location.reload();
                }else{
                    alert("Ocurrió un error, contacte con el administrador...");
                }
            });
        }
        
    };
                
});