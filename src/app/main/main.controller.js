'use strict';

angular.module('angularQiitaApp')
  .controller('MainCtrl', function ($scope,GetJson) {
    $scope.article = null;

    // GetJsonサービスをよんでくる
    $scope.articles = GetJson.all();

  });
