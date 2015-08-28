(function() {
  'use strict';

  angular
    .module('todoApp', ['ui.router']) // source the ui router as a dependency 
    .config(MainRouter); // configure the ui router

 
  // the function takes two variables to store our configuration
  function MainRouter($stateProvider, $urlRouterProvider) {
    // ... all of our setup goes in here
    $stateProvider // stores all our states in here instead of using http routes
      .state('todoHome', { // name
        url: '/',          // URL (after the #)
        templateUrl:  'todoHome.html', // template
        controller:   'TodosController', // controller
        controllerAs: 'vm' // name for the controller in template
      }) // controls switching from state to state
      .state('todoArchive', {
        url: '/archive',
        templateUrl:  'todoArchive.html',
        controller:   'TodosController',
        controllerAs: 'vm'
      });

    // stores setup for our app that is regardless of state
    $urlRouterProvider.otherwise('/');  } // default state

})();