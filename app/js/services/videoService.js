(function () {
    function videoService($http, $q, config) {
        var self = this;

        //http://api.kptaipei.tw/v1/videos/?accessToken={token}
        self.getVideoGroups = function(){
            var defer = $q.defer();
            var url = config.apiUrl + 'videos/?accessToken=' + config.apiKey;

            $http.get(url, {cache: true})
                .success(function(result){
                    if(result.isSuccess){
                        defer.resolve(result.data);
                    }
                    else{
                        defer.reject(result.errorMessage);
                    }
                });

            return defer.promise;
        };

        //http://api.kptaipei.tw/v1/videos/{id}?accessToken={token}
        self.getVideosByGroupId = function(categoryId){
            var defer = $q.defer();
            var url = config.apiUrl + 'videos/'+ categoryId +'?accessToken=' + config.apiKey;

            $http.get(url, {cache: true})
                .success(function(result){
                    if(result.isSuccess){
                        defer.resolve(result.data);
                    }
                    else{
                        defer.reject(result.errorMessage);
                    }
                });

            return defer.promise;
        };
    }

    angular.module('kpApp')
        .service('videoService', videoService);
})();