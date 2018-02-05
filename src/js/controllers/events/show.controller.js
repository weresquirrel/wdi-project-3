angular
  .module('bringItApp')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['$state', '$sce', 'Event', 'EventComment'];
function EventsShowCtrl($state, $sce, Event, EventComment) {
  const vm = this;

  Event.get($state.params)
    .$promise
    .then((event) => {
      vm.event = event;
    });

  vm.delete = eventsDelete;

  function eventsDelete(){
    Event.delete($state.params)
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  }

  function addComment() {
    EventComment
      .save({ eventId: vm.event.id }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.event.comments.push(comment);
        vm.newComment = {};
      });
  }

  vm.addComment = addComment;
}
