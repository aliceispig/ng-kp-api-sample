(function () {
    function videoController($stateParams, $sce, videos) {
        var self = this;

        angular.forEach(videos, function (item) {
            if(item.id === $stateParams.videoId){
                self.video = item;
                self.embededUrl = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + self.video.id);

                return false;
            }
        })

    }

    angular.module('kpApp')
        .controller('videoController', videoController);
})();