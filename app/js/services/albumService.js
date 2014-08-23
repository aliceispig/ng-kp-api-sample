(function () {
    function albumService($http, $q, config) {
        var self = this;

        //http://api.kptaipei.tw/v1/albums/?accessToken={token}
        self.getAlbums = function () {
            var defer = $q.defer();
            var url = config.apiUrl + 'albums/?accessToken=' + config.apiKey;

            $http.get(url, {cache: true})
                .success(function (result) {
                    if (result.isSuccess) {
                        defer.resolve(result.data);
                    }
                    else {
                        defer.reject(result.errorMessage);
                    }
                });

            return defer.promise;
        };

        //http://api.kptaipei.tw/v1/albums/{id}?accessToken={token}
        self.getPhotosByAlbumId = function (albumId) {
            var defer = $q.defer();
            var url = config.apiUrl + 'albums/' + albumId + '?accessToken=' + config.apiKey;

            $http.get(url, {cache: true})
                .success(function (result) {
                    if (result.isSuccess) {
                        defer.resolve(result.data);
                    }
                    else {
                        defer.reject(result.errorMessage);
                    }
                });

            return defer.promise;
        };
    }

    angular.module('kpApp')
        .service('albumService', albumService);
})();