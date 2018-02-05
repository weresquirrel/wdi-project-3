angular
  .module('bringItApp')
  .controller('EventEditCtrl', EventsEditCtrl);

EventsEditCtrl.$inject = ['$state', 'Event'];
function EventsEditCtrl($state, Event) {
  const vm = this;

  Event.get($state.params)
    .$promise
    .then((event) => {
      vm.event = event;
    });

  vm.update = eventsUpdate;

  function eventsUpdate(){
    Event
      .update($state.params, vm.event)
      .$promise
      .then(() => {
        $state.go('eventShow',
          $state.params);
      });
  }
}
