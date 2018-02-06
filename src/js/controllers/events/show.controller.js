angular
  .module('bringItApp')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['$state', '$sce', 'Event', 'EventComment', 'EventItem', 'AssignItem'];
function EventsShowCtrl($state, $sce, Event, EventComment, EventItem, AssignItem) {
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

  function addItem() {
    EventItem
      .save({ eventId: vm.event.id }, vm.newItem)
      .$promise
      .then((item) => {
        vm.event.items.push(item);
        vm.newItem = {};
      });
  }

  vm.addItem = addItem;

  function assignBringer(item) {
    AssignItem
      .update({ eventId: vm.event.id , itemId: item.id})
      .$promise
      .then((response) => {
        console.log(response);
        item.bringer = response.bringer;
      });
  }

  vm.assignBringer = assignBringer;

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
