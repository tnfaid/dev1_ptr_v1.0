angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('petroMobile', {
    url: '/page1',
    templateUrl: 'templates/petroMobile.html',
    controller: 'petroMobileCtrl'
  })

  .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroMobile.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.judulBerita', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/judulBerita.html',
        controller: 'judulBeritaCtrl'
      }
    }
  })

    .state('menu.bantuan', {
    url: '/bantuan',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bantuan.html',
        controller: 'bantuanCtrl'
      }
    }
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

  .state('menu.infoProduk', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/infoProduk.html',
        controller: 'infoProdukCtrl'
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

  .state('menu.berita', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/berita.html',
        controller: 'beritaCtrl'
      }
    }
  })

  .state('menu.manajemen', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/manajemen.html',
        controller: 'manajemenCtrl'
      }
    }
  })

  .state('menu.sumberDayaManusia', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sumberDayaManusia.html',
        controller: 'sumberDayaManusiaCtrl'
      }
    }
  })

  .state('menu.lingkunganK3', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lingkunganK3.html',
        controller: 'lingkunganK3Ctrl'
      }
    }
  })

  .state('menu.pupuk', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pupuk.html',
        controller: 'pupukCtrl'
      }
    }
  })

  .state('menu.nonPupuk', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nonPupuk.html',
        controller: 'nonPupukCtrl'
      }
    }
  })

  .state('menu.brosur', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/brosur.html',
        controller: 'brosurCtrl'
      }
    }
  })

  .state('menu.dosisPemupukan', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dosisPemupukan.html',
        controller: 'dosisPemupukanCtrl'
      }
    }
  })

  .state('menu.testimoniProduk', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/testimoniProduk.html',
        controller: 'testimoniProdukCtrl'
      }
    }
  })

  .state('menu.rangkumanKegiatan', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rangkumanKegiatan.html',
        controller: 'rangkumanKegiatanCtrl'
      }
    }
  })

  .state('menu.beritaReportase', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beritaReportase.html',
        controller: 'beritaReportaseCtrl'
      }
    }
  })

  .state('menu.pengumuman', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pengumuman.html',
        controller: 'pengumumanCtrl'
      }
    }
  })

  .state('menu.siaranPers', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/siaranPers.html',
        controller: 'siaranPersCtrl'
      }
    }
  })

  .state('menu.artikel', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artikel.html',
        controller: 'artikelCtrl'
      }
    }
  })

  .state('menu.sistemDistribusi', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemDistribusi.html',
        controller: 'sistemDistribusiCtrl'
      }
    }
  })

  .state('menu.layananPenjualan', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/layananPenjualan.html',
        controller: 'layananPenjualanCtrl'
      }
    }
  })

  .state('menu.kontakPemasaran', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kontakPemasaran.html',
        controller: 'kontakPemasaranCtrl'
      }
    }
  })

  .state('menu.gudangPenyangga', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gudangPenyangga.html',
        controller: 'gudangPenyanggaCtrl'
      }
    }
  })

  .state('menu.tanpaGudangPenyangga', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tanpaGudangPenyangga.html',
        controller: 'tanpaGudangPenyanggaCtrl'
      }
    }
  })

  .state('menu.subsidi', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subsidi.html',
        controller: 'subsidiCtrl'
      }
    }
  })

  .state('menu.nonSubsidi', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nonSubsidi.html',
        controller: 'nonSubsidiCtrl'
      }
    }
  })

  .state('menu.maknaLogo', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maknaLogo.html',
        controller: 'maknaLogoCtrl'
      }
    }
  })

  .state('menu.sejarahPerusahaan', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sejarahPerusahaan.html',
        controller: 'sejarahPerusahaanCtrl'
      }
    }
  })

  .state('menu.visiMisiDanBudayaPerusahaan', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/visiMisiDanBudayaPerusahaan.html',
        controller: 'visiMisiDanBudayaPerusahaanCtrl'
      }
    }
  })

  .state('menu.kapasitasProduksi', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kapasitasProduksi.html',
        controller: 'kapasitasProduksiCtrl'
      }
    }
  })

  .state('menu.fasilitasInfrastruktur', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fasilitasInfrastruktur.html',
        controller: 'fasilitasInfrastrukturCtrl'
      }
    }
  })

  .state('menu.komisaris', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/komisaris.html',
        controller: 'komisarisCtrl'
      }
    }
  })

  .state('menu.direksi', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/direksi.html',
        controller: 'direksiCtrl'
      }
    }
  })

  .state('jumlahKaryawan', {
    url: '/page40',
    templateUrl: 'templates/jumlahKaryawan.html',
    controller: 'jumlahKaryawanCtrl'
  })

  .state('fasilitasPenunjang', {
    url: '/page41',
    templateUrl: 'templates/fasilitasPenunjang.html',
    controller: 'fasilitasPenunjangCtrl'
  })

  .state('anakUsahaUsahaPatungan', {
    url: '/page42',
    templateUrl: 'templates/anakUsahaUsahaPatungan.html',
    controller: 'anakUsahaUsahaPatunganCtrl'
  })

  .state('menu.penghargaanPrestasi', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/penghargaanPrestasi.html',
        controller: 'penghargaanPrestasiCtrl'
      }
    }
  })

  .state('menu.lingkungan', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lingkungan.html',
        controller: 'lingkunganCtrl'
      }
    }
  })

  .state('menu.k3', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/k3.html',
        controller: 'k3Ctrl'
      }
    }
  })

  .state('menu.komiteAudit', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/komiteAudit.html',
        controller: 'komiteAuditCtrl'
      }
    }
  })

  .state('menu.komiteManajemenRisiko', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/komiteManajemenRisiko.html',
        controller: 'komiteManajemenRisikoCtrl'
      }
    }
  })

  .state('menu.profesiPenunjang', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profesiPenunjang.html',
        controller: 'profesiPenunjangCtrl'
      }
    }
  })

  .state('menu.marsPetrokimiaGresik', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/marsPetrokimiaGresik.html',
        controller: 'marsPetrokimiaGresikCtrl'
      }
    }
  })

  .state('menu.videoProfilPerusahaan', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/videoProfilPerusahaan.html',
        controller: 'videoProfilPerusahaanCtrl'
      }
    }
  })

  .state('menu.tanyaJawabGCG', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tanyaJawabGCG.html',
        controller: 'tanyaJawabGCGCtrl'
      }
    }
  })

  .state('menu.ureaZA', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ureaZA.html',
        controller: 'ureaZACtrl'
      }
    }
  })

  .state('menu.sP36ZK', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sP36ZK.html',
        controller: 'sP36ZKCtrl'
      }
    }
  })

  .state('menu.phonskaNPK', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/phonskaNPK.html',
        controller: 'phonskaNPKCtrl'
      }
    }
  })

  .state('menu.pupukSpesifikasiKomoditi', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pupukSpesifikasiKomoditi.html',
        controller: 'pupukSpesifikasiKomoditiCtrl'
      }
    }
  })

  .state('menu.petroganik', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroganik.html',
        controller: 'petroganikCtrl'
      }
    }
  })

  .state('menu.petroBiofertil', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroBiofertil.html',
        controller: 'petroBiofertilCtrl'
      }
    }
  })

  .state('menu.kCLRockPhosphate', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kCLRockPhosphate.html',
        controller: 'kCLRockPhosphateCtrl'
      }
    }
  })

  .state('menu.cementRetarder', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cementRetarder.html',
        controller: 'cementRetarderCtrl'
      }
    }
  })

  .state('menu.bahanKimia', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bahanKimia.html',
        controller: 'bahanKimiaCtrl'
      }
    }
  })

  .state('menu.kapurPertanian', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kapurPertanian.html',
        controller: 'kapurPertanianCtrl'
      }
    }
  })

  .state('menu.petroCas', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroCas.html',
        controller: 'petroCasCtrl'
      }
    }
  })

  .state('menu.petroGladiator', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroGladiator.html',
        controller: 'petroGladiatorCtrl'
      }
    }
  })

  .state('menu.petroHibrid', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroHibrid.html',
        controller: 'petroHibridCtrl'
      }
    }
  })

  .state('menu.petroSeed', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroSeed.html',
        controller: 'petroSeedCtrl'
      }
    }
  })

  .state('menu.petroHiCorn', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroHiCorn.html',
        controller: 'petroHiCornCtrl'
      }
    }
  })

  .state('menu.petroFish', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroFish.html',
        controller: 'petroFishCtrl'
      }
    }
  })

  .state('menu.petroChili', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroChili.html',
        controller: 'petroChiliCtrl'
      }
    }
  })

  .state('menu.petroBiofeed', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroBiofeed.html',
        controller: 'petroBiofeedCtrl'
      }
    }
  })

  .state('menu.petroChick', {
    url: '/page70',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroChick.html',
        controller: 'petroChickCtrl'
      }
    }
  })

  .state('menu.fitRice', {
    url: '/page71',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fitRice.html',
        controller: 'fitRiceCtrl'
      }
    }
  })

  .state('menu.jasa', {
    url: '/page72',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jasa.html',
        controller: 'jasaCtrl'
      }
    }
  })

  .state('menu.testimoniNPKKebomasHorti', {
    url: '/page73',
    views: {
      'side-menu21': {
        templateUrl: 'templates/testimoniNPKKebomasHorti.html',
        controller: 'testimoniNPKKebomasHortiCtrl'
      }
    }
  })

  .state('menu.testimoniNPKKebomas', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/testimoniNPKKebomas.html',
        controller: 'testimoniNPKKebomasCtrl'
      }
    }
  })

  .state('menu.binaLingkungan', {
    url: '/page75',
    views: {
      'side-menu21': {
        templateUrl: 'templates/binaLingkungan.html',
        controller: 'binaLingkunganCtrl'
      }
    }
  })

  .state('menu.kemitraan', {
    url: '/page76',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kemitraan.html',
        controller: 'kemitraanCtrl'
      }
    }
  })

  .state('menu.lolapil', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lolapil.html',
        controller: 'lolapilCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1')


});