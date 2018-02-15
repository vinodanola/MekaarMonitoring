var App = angular.module('App', ['onsen' , 'ui.router' , 'ngStorage' , 'ngMask' , 'g1b.datetime-range' , 'g1b.scroll-events' , 'angularMoment']);

App.config( function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        
    $stateProvider
    
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl',
            data: {
                pageTitle: 'Dashboard'
            }
        })
        
        .state('dashboard', {
            url: '/',
            templateUrl: 'partials/dashboard.html',
            controller: 'dashboardCtrl',
            data: {
                pageTitle: 'Dashboard'
            }
        })
        
        .state('dashboard.regions', {
            url: 'regions',
            templateUrl: 'partials/region-list.html',
            controller: 'regionsCtrl',
            data: {
                pageTitle: 'Regions'
            }
        })
        
        .state('dashboard.areas', {
            url: 'areas',
            templateUrl: 'partials/area-list.html',
            controller: 'areasCtrl',
            data: {
                pageTitle: 'Areas'
            }
        })
        
        .state('dashboard.branchs', {
            url: 'branchs',
            templateUrl: 'partials/branch-list.html',
            controller: 'branchsCtrl',
            data: {
                pageTitle: 'Branchs'
            }
        })
        
        .state('details', {
            url: '/details',
            templateUrl: 'partials/details.html',
//            controller: 'userManagementCtrl',
            data: {
                pageTitle: 'Details'
            }
        })
        
        .state('sidemenu', {
            url: '/sidemenu',
            templateUrl: 'partials/sidemenu.html',
//            controller: 'userManagementCtrl',
            data: {
                pageTitle: 'Sidemenu'
            }
        })
        
        ;
        
        $urlRouterProvider.otherwise('/');
        
        /* CACHE DISABLE */
        
        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.cache = false;
        
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        
        /* CHECK XHR LOADED */
        
//        $httpProvider.interceptors.push('httpInterceptor');

});




App.run(['$sessionStorage','$location', '$rootScope', '$stateParams', '$state', '$window',
    function($sessionStorage, $location, $rootScope, $stateParams, $state, $window ) {
        
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            
            
        });
            
        $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {
            
        });
        
        $rootScope.historyBack = function () {
            $window.history.back();
        };
        
        $rootScope.historyForward = function () {
            $window.history.forward();
        };
        
    }
]);

App.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'Default title';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);

App.controller('loginCtrl',function($scope,$state){
    
    $scope.auth = function(){
        $state.go('dashboard');
    };
    
});

App.controller('dashboardCtrl',function($scope){
    
    $scope.start = moment();
    $scope.end = moment().add(1, 'days').add(1, 'hours');

    $scope.presets = [
        {
            name    : 'This Day',
            start   : moment().startOf('day'),
            end     : moment().endOf('day'),
        },
        {
            name    : 'This Week',
            start   : moment().startOf('week').startOf('day'),
            end     : moment().endOf('week').endOf('day'),
        }, {
            name    : 'This Month',
            start   : moment().startOf('month').startOf('day'),
            end     : moment().endOf('month').endOf('day'),
        }, {
            name    : 'This Year',
            start   : moment().startOf('year').startOf('day'),
            end     : moment().endOf('year').endOf('day'),
        }
    ];

    $scope.changed = function () {
      console.log('changed start or end datetime objects');
    };
    $scope.changedStart = function () {
      console.log('changed start datetime object');
    };
    $scope.changedEnd = function () {
      console.log('changed end datetime object');
    };
    $scope.closed = function () {
      console.log('edit popover closed');
    };
    
    $scope.regions = [
        {
            kode    : 'A',
            nama    : 'Region A'
        },
        {
            kode    : 'B',
            nama    : 'Region B'
        }
    ];
    
    $scope.areas = [
        {
            kode    : 'A',
            nama    : 'Area B'
        },
        {
            kode    : 'B',
            nama    : 'Area B'
        }
    ];
    
    
    
});

App.controller('regionsCtrl',function($scope){
    
});

App.controller('areasCtrl',function($scope){
    
});

App.controller('branchsCtrl',function($scope,filterFilter){
     
    $scope.branchs = [
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        {
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },{
            kode    : 'A',
            nama    : 'Branch A'
        },
        {
            kode    : 'B',
            nama    : 'Branch B'
        },
        
        
        
        
        
    ];
    
    $scope.listBranchWithFilter = filterFilter($scope.branchs,'A');
    
    $scope.listbranch = {
        configureItemScope: function(index, itemScope) {
            itemScope.item = $scope.branchs[index];
        },
        countItems: function() {
            return $scope.branchs.length;
        },
        calculateItemHeight: function() {
            return ons.platform.isAndroid() ? 48 : 44;
        }
    };
    
    
     
});





