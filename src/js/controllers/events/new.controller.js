angular
  .module('bringItApp')
  .controller('NewEventCtrl', NewEventCtrl);

NewEventCtrl.$inject = ['Event', '$state'];
function NewEventCtrl(Event, $state) {
  const vm = this;
  vm.event = {};
  vm.create = newEvent;

  function newEvent() {
    Event
      .save(vm.event)
      .$promise
      .then(() => {
        $state.go('eventShow');
      });
  }
}
