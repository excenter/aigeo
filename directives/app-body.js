
aigeo.directive('appBody', [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/app-body.html',
    link: (scope)=>{
      scope.text = 'bitch you guessed it';
    }
  };
}]);
