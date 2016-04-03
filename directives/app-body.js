
aigeo.directive('appBody', [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/app-body.html',
    link: (scope)=>{
      scope.text = 'you know it';
      scope.report = function() {
        console.log('button Pressed');
      };
    }
  };
}]);
