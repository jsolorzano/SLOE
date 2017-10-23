miAppAngular.controller('nuevoEmpleado', function($scope, $http, configuracionGlobal, $location){
    
    $scope.config = configuracionGlobal;
    
    $scope.nombrePagina1 = "Employee register";
    
    $scope.guardarInfo2 = function(){
        
        if($scope.form_empleado.$valid){
            $http({
               url: configuracionGlobal.api_url + "empleados/register",
               method: "POST",
               data: {nombre: $scope.nombre, descripcion: $scope.descripcion},
               headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(respuesta){
                //alert(respuesta.data['response']);
                if(respuesta.data['response'] == 'ok'){
                    alert("Datos guardados correctamente...");
                    $location.path("/employees");
                }else if(respuesta.data == '1'){
                    alert("Disculpe, el empleado ya existe");
                }
            });
        }/*else{
            alert("Faltan casillas por rellenar");
        }*/
        
    };
    
});
