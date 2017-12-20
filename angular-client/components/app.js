angular.module('app')
  .controller('AppCtrl', function () {
    this.getAll = (data) => {
      console.log('clicked');
      this.items = data;
    };
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
