/*global angular: false*/
/*global csvExportService: false*/
/*global csvExportController: false*/
/*global csvExportDirective: false*/

if (angular) {
    
    var csvExportModule = angular.module('CsvExportModule', []);
    
    // Criando um serviço para exportação de um arquivo csv.
    csvExportModule.factory('$csvExportService', [csvExportService]);
    
    // Criando um controller para exportação de um arquivo csv.
    csvExportModule.controller('CsvExportController', ['$scope', '$csvExportService', csvExportController]);
    
    // Criando uma diretiva para exportação de um arquivo csv.
    csvExportModule.directive('csvExportDirective', [csvExportDirective]);
    
    
}