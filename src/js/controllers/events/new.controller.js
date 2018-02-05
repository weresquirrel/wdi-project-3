angular
  .module('bringItApp')
  .controller('NewEventCtrl', NewEventCtrl);

NewEventCtrl.$inject = ['Event', '$state'];
function NewEventCtrl(Event, $state) {
  const vm = this;
  vm.event = {};
  vm.createEvent = newEvent;

  function newEvent() {
    Event
      .save(vm.event)
      .$promise
      .then((res) => {
        $state.go('eventShow', {id: res.data.eventId});
      });
  }
}
