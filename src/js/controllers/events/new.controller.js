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
        console.log(res.id);
        $state.go('showEvent', {id: res.id});
      });
  }
}
