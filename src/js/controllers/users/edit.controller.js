angular
  .module('bringItApp')
  .controller('EditUserCtrl', EditUserCtrl);

EditUserCtrl.$inject = ['User', '$state'];
function EditUserCtrl(User, $state) {
  const vm = this;
  vm.user = User.get($state.params);

  User.get($state.params)
    .$promise
    .then((user) => {
      vm.user = user;
    });

  vm.update = userUpdate;

  function userUpdate() {
    User
      .update($state.params, vm.user)
      .$promise
      .then(() => {
        $state.go('userShow', $state.params);
      });
  }
}
