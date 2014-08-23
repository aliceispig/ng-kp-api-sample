(function () {
    function albumController($stateParams, $state, albums, photos) {
        var self = this;

        self.$stateParams = $stateParams;
        self.$state = $state;

        self.albums = albums;
        self.photos = photos;
    }

    angular.module('kpApp')
        .controller('albumController', albumController);
})();