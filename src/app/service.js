'use strict';

// API叩く部分をサービスに切り出す
angular.module('angularQiitaApp')
  .factory('GetJson', function ($resource) {
    var url = 'https://qiita.com/api/v2/items?'
        + [
            // angularjsタグを持つ記事20件取得
            // 'query=' + encodeURIComponent($scope.query),
            'query=tag%3Aangularjs',
            'page=1',
            'per_page=20',
            'callback=JSON_CALLBACK'
        ].join('&');

    var res = $resource(url);

    return {
      all: function () {
        return res.query();
      }
    };
  });
