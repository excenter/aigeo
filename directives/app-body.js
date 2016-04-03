
aigeo.directive('appBody', [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/app-body.html',
    link: (scope)=>{
      scope.winnipeg = 'I should show up';
      scope.text = 'bitch you guessed it';
      scope.report = function() {
        console.log('button Pressed');
      };
      banan();
    }
  };
}]);
