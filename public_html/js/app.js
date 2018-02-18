var App = angular.module('App', ['onsen' , 'ui.router' , 'ngStorage' , 'ngMask' , 'g1b.datetime-range' , 'g1b.scroll-events' , 'angularMoment', 'base64']);

App.config( function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $provide, $base64 ) {
    
    $provide.value("apiBase", "http://103.76.17.197/api_MonMekaar/");
    
    $provide.value("Authorization", "Basic dXNlcm5hbWU6cGFzc3dvcmQ=");
        
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
            url: '/details/:region/:area/:branch/:startDate',
            templateUrl: 'partials/details.html',
            controller: 'detailCtrl',
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
        
        $httpProvider.defaults.cache = false;
        
        /* CHECK XHR LOADED */
        
        $httpProvider.interceptors.push('httpInterceptor');

});


App.run(['$sessionStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http',
    function($sessionStorage, $location, $rootScope, $stateParams, $state, $window, $http ) {
        
        $rootScope.$on('loading:progress', function (){
                dialog.show();
        });
        $rootScope.$on('loading:finish', function (){
                dialog.hide();
        });
        
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

/* Directives */

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

/* Factories */

App.factory('httpInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
        var loadingCount = 0;

        return {
            request: function (config) {
                if(++loadingCount === 1) $rootScope.$broadcast('loading:progress');
                return config || $q.when(config);
            },

            response: function (response) {
                if(--loadingCount === 0) $rootScope.$broadcast('loading:finish');
                return response || $q.when(response);
            },

            responseError: function (response) {
                if(--loadingCount === 0) $rootScope.$broadcast('loading:finish');
                return $q.reject(response);
            }
        };
    }
]);

/* Controllers */

App.controller('loginCtrl',function($scope,$state){
    
    $scope.auth = function(){
        $state.go('dashboard');
    };
    
});

App.controller('dashboardCtrl',function($rootScope,$scope,$http,apiBase,Authorization,$q){
    
    $rootScope.dashboard = [];
    $rootScope.dashboard.region = {
        id : '',
        name : 'All'
    };
    $rootScope.dashboard.area = {
        id : '',
        name : 'All'
    };
    $rootScope.dashboard.branch = {
        id : '',
        name : 'All'
    };
    
    $rootScope.dashboard.startDate = moment();
    $rootScope.dashboard.endDate = moment().add(1, 'days').add(1, 'hours');

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
    
    $scope.closed = function (R) {
      console.log('edit popover closed');
    };
    
    $scope.getAmounts = function(d){
        
        var url = apiBase + 'MonitoringHeader?date='+d['date']+'&region='+d['region']+'&area='+d['area']+'&branch='+d['branch'];
        
        $http({
            method      : "GET",
            url         : url,
            dataType    : 'json',
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        })
        .then(function success(R) {

            console.log('Amount',R);
            
            $scope.debit = R.data.Data[0].DebitAmount;
            $scope.credit = R.data.Data[0].CreditAmount;

        }, function error(R) { console.log(R.statusText); });
        
    };
    
//    $rootScope.$watchGroup(['dashboard.region.id','dashboard.area.id','dashboard.branch.id','dashboard.startDate','dashboard.endDate'],function(newValue){
//        if (newValue){
            
//        }
//    });

    $scope.searchAmount = function(){
        if (
                typeof $rootScope.dashboard.region.id != 'undefined' &&
                typeof $rootScope.dashboard.area.id != 'undefined' &&
                typeof $rootScope.dashboard.branch.id != 'undefined' &&
                typeof $rootScope.dashboard.startDate != 'undefined' &&
                typeof $rootScope.dashboard.endDate != 'undefined' 
            ) {
                $scope.getAmounts({
                    date    : $rootScope.dashboard.startDate.format('YYYY-MM-DD'),
                    region  : $rootScope.dashboard.region.id,
                    area    : $rootScope.dashboard.area.id,
                    branch  : $rootScope.dashboard.branch.id
                });
            }
    };
    
    $scope.searchAmount();
    
});

App.controller('regionsCtrl',function($rootScope,$scope,$http,apiBase,Authorization,$state){
    
    $scope.getRegions = function(){
        $http({
            method      : "GET",
            url         : apiBase + 'Region',
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.regions = R.data.Data;

        }, function error(R) { console.log(R.statusText); });
    };
    $scope.getRegions();
    
    $scope.setRegionDashboard = function(id,name){
        $rootScope.dashboard.region.id = id;
        $rootScope.dashboard.region.name = name;
        $rootScope.dashboard.area = [];
        $rootScope.dashboard.branch = [];
        $state.go('dashboard');
    };
    
});

App.controller('areasCtrl',function($rootScope,$scope,$http,apiBase,Authorization,$state){
    
    $scope.getAreas = function(region){
        $http({
            method      : "GET",
            url         : apiBase + 'Area?region='+region,
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.areas = R.data.Data;

        }, function error(R) { console.log(R.statusText); });
    };
    $scope.getAreas($rootScope.dashboard.region.id);
    
    $scope.setAreaDashboard = function(id,name){
        $rootScope.dashboard.area.id = id;
        $rootScope.dashboard.area.name = name;
        $rootScope.dashboard.branch = [];
        $state.go('dashboard');
    };
    
});

App.controller('branchsCtrl',function($rootScope,$scope,filterFilter,$http,apiBase,Authorization,$state){
    
    $scope.getBranchs = function(region,area){
        $http({
            method      : "GET",
            url         : apiBase + 'Branch?region='+region+'&area='+area,
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.branchs = R.data.Data;

        }, function error(R) { console.log(R.statusText); });
    };
    $scope.getBranchs($rootScope.dashboard.region.id,$rootScope.dashboard.area.id);
    
    $scope.setBranchDashboard = function(id,name){
        $rootScope.dashboard.branch.id = id;
        $rootScope.dashboard.branch.name = name;
        $state.go('dashboard');
    };
     
});

App.controller('detailCtrl',function($rootScope,$scope,apiBase,$http,Authorization,$stateParams){
    
    $scope.getDetails = function(d){
        
        if (d['date'] == undefined)
            d['date'] = '';
        if (d['region'] == undefined)
            d['region'] = '';
        if (d['area'] == undefined)
            d['area'] = '';
        if (d['branch'] == undefined)
            d['branch'] = '';
        
        $http({
            method      : "GET",
            url         : apiBase + 'MonitoringDetail?date='+d['date']+'&region='+d['region']+'&area='+d['area']+'&branch='+d['branch'],
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.details = R.data.Data;

        }, function error(R) { console.log(R.statusText); });
    };
    $scope.getDetails({
        date    : moment($stateParams.startDate).format('YYYY-MM-DD'),
        region  : $stateParams.region.id,
        area    : $stateParams.area.id,
        branch  : $stateParams.branch.id
    });
    
});





