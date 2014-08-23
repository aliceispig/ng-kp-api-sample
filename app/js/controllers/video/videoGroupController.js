(function () {
    function videoGroupController($stateParams, $state, videoGroups, videos) {
        var self = this;

        self.$stateParams = $stateParams;
        self.$state = $state;

        self.videoGroups = videoGroups;
        self.videos = videos;

        if (!self.$stateParams.videoId) {
            var videoId = self.videos[0].id;
            this.$state.go('video.group.detail', {videoId: videoId});
        }
    }

    videoGroupController.prototype.isCurrentGroup = function (videoGroup) {
        var self = this;
        return videoGroup.id === self.$stateParams.videoGroupId;
    };

    angular.module('kpApp')
        .controller('videoGroupController', videoGroupController);
})();