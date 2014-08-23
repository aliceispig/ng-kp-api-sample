(function () {
    var config =
    {
        apiKey: '{{YOUR_API_KEY}}',
        apiUrl: 'http://api.kptaipei.tw/v1/'
    };

    angular.module('kpApp')
        .constant('config', config);
})();