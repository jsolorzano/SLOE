var miAppAngular = angular.module('navegacion', ['ngRoute']);

miAppAngular.config(function($routeProvider){
        
        $routeProvider.when('/', {
            templateUrl: 'views/inicio.html',
            controller: 'inicio'
        }).when('/employees', {
            templateUrl: 'views/employees.html',
            controller: 'empleados'
        }).when('/employeeNew', {
            templateUrl: 'views/employeeNew.html',
            controller: 'nuevoEmpleado'
        }).when('/employeeEdit/:employeeId', {
            templateUrl: 'views/employeeDetails.html',
            controller: 'detallesEmpleado'
        }).when('/employeeDetails/:employeeId', {
            templateUrl: 'views/employeeView.html',
            controller: 'detallesEmpleado'
        }).when('/404', {
            templateUrl: 'views/404.html',
            controller: 'inicio'
        }).otherwise({
            redirectTo: '/404'
        })
        
});

miAppAngular.constant('configuracionGlobal', {
    
    'nombreDelSitio':'Lista de Empleados',
    'api_url':'http://localhost/Simple-APIPHP/',
    'carpeta_imagenes':'http://localhost/angular/Static_Full_Version/img/'
    
})
