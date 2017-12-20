angular.module('app')
  .controller('AppCtrl', () => {
    this.getAll = (callback) => {
      console.log('clicked!');
      this.get('/faves')
        .then(({ data }) => {
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log('this is an app error ', err);
        });
    };
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
