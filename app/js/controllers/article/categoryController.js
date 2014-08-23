(function () {
    function categoryController($stateParams, $state, categories, articles) {
        var self = this;

        self.$stateParams = $stateParams;
        self.$state = $state;

        self.categories = categories;
        self.articles = articles;

        if (!self.$stateParams.articleId) {
            var articleId = self.articles[0].id;
            this.$state.go('article.category.detail', {articleId: articleId});
        }
    }

    categoryController.prototype.isCurrentCategory = function (category) {
        var self = this;
        return category.id === self.$stateParams.categoryId;
    };

    angular.module('kpApp')
        .controller('categoryController', categoryController);
})();