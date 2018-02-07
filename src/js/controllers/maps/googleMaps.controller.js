angular
  .module('bringItApp')
  .controller('geoCode', geoCode);

geoCode.$inject = ['$http'];
function geoCode($http) {
  const vm = this;
  vm.address = '';
  vm.getCoordinates = getCoordinates;

  function getCoordinates() {
    $http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${vm.address} &components=country:GB&key=AIzaSyBKstuur4XOTCAojB7tzkVjo4XlA0jbGmY`)
      .then((res) => {
        vm.all = res.data.results[0].formatted_address;
        console.log(vm.all);

      });
  }

}
