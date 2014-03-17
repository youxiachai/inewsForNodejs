/**
 * Created by youxiachai on 14-3-14.
 */


var inewsServices = angular.module('inews.services', ['ngResource']);

//获取文章
inewsServices.factory('Article', ['$resource', function ($resource){
    return {
        list : $resource('/api/v1/articles/:id')

    }
}])

// 获取评论
inewsServices.factory('Comment', ['$resource', function ($resource) {
     return {
         list : $resource('/api/v1/articles/:id/comments')

     }
}])

inewsServices.factory('Notify', ['$resource', function ($resource) {
    return {
        list : $resource('notify', {}),
        detail : $resource(),
        update : $resource()
    }
}])

inewsServices.factory('Diggs', ['$resource', function ($resource) {
    return {
        list : $resource('notify', {}),
        detail : $resource(),
        post : $resource()
    }
}])


inewsServices.factory('User', ['$resource',function ($resource) {
    return {
        signin :  $resource(),
        signup : $resource(),
        info :  $resource()
    }
}])