(function () {
    function articleController($stateParams, $sce, articles) {
        var self = this;

        angular.forEach(articles, function (item) {
            if(item.id === $stateParams.articleId){
                self.content = $sce.trustAsHtml(item.content);

                return false;
            }
        })

    }

    angular.module('kpApp')
        .controller('articleController', articleController);
})();