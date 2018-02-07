angular
  .module('bringItApp')
  .controller('NewEventCtrl', NewEventCtrl);

NewEventCtrl.$inject = ['Event', '$state', '$http'];
function NewEventCtrl(Event, $state, $http) {
  const vm = this;
  vm.event = {};
  vm.createEvent = newEvent;

  function newEvent() {


    Event
      .save(vm.event)
      .$promise
      .then((res) => {
        console.log(res.id);
        $state.go('showEvent', {id: res.id});
      });
  }

  getCoordinates();
  function getCoordinates() {
    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBKstuur4XOTCAojB7tzkVjo4XlA0jbGmY&components=postal_code:ub100rl',
      skipAuthorization: true
    })
      .then(res => {
        console.log(res);
      });
  }
}
