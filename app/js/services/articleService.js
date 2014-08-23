(function () {
    function articleService($http, $q, config) {
        var self = this;

        //http://api.kptaipei.tw/v1/category/?accessToken={token}
        self.getCategories = function(){
            var defer = $q.defer();
            var url = config.apiUrl + 'category/?accessToken=' + config.apiKey;

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

        //http://api.kptaipei.tw/v1/category/{id}?accessToken={token}
        self.getArticlesByCategoryId = function(categoryId){
            var defer = $q.defer();
            var url = config.apiUrl + 'category/'+ categoryId +'?accessToken=' + config.apiKey;

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
        .service('articleService', articleService);
})();