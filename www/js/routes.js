angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('berita', {
    url: '/page2',
    templateUrl: 'templates/berita.html',
    controller: 'beritaCtrl'
  })

  .state('menu.pemasaran', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pemasaran.html',
        controller: 'pemasaranCtrl'
      }
    }
  })

  .state('menu.laporan', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/laporan.html',
        controller: 'laporanCtrl'
      }
    }
  })

  .state('menu.profil', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profil.html',
        controller: 'profilCtrl'
      }
    }
  })

  .state('menu.tataKelola', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tataKelola.html',
        controller: 'tataKelolaCtrl'
      }
    }
  })

  .state('menu.produk', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produk.html',
        controller: 'produkCtrl'
      }
    }
  })

  .state('menu.cSR', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cSR.html',
        controller: 'cSRCtrl'
      }
    }
  })

  .state('menu.tautan', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tautan.html',
        controller: 'tautanCtrl'
      }
    }
  })

  .state('menu.fAQs', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAQs.html',
        controller: 'fAQsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});