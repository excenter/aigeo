
aigeo.directive('appBody', [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/app-body.html',
    link: (scope)=>{

      console.log('fomrz is showing up');
      scope.text = 'bitch you guessed it';
      scope.report = function() {
        console.log('button Pressed');
      };
    }
  };
}]);
