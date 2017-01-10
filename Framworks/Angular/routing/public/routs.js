(function(){
  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('page1', {
        url: '/',
        templateUrl: './page1/page1.html',
        controller: 'page1',
      })
      .state('page2', {
        url: '/page2',
        templateUrl: 'page2/page2.html',
        controller: 'page2',
      })
      .state('page3', {
        url: '/page3',
        parent: 'page1',
        templateUrl: 'page3/page3.html',
        controller: 'page3',
      })
      .state('page4', {
        url: '/page4',
        parent: 'page1',
        templateUrl: 'page4/page4.html',
        controller: 'page4',
        resolve: {
        
       }
      })
     
    })

})()