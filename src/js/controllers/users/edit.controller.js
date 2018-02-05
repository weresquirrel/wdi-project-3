angular
  .module('bringItApp')
  .controller('EditUserCtrl', EditUserCtrl);


EditUserCtrl.$inject = ['User', '$state'];
function EditUserCtrl(User, $state) {
  const vm = this;
  vm.user = User.get($state.params);
}
