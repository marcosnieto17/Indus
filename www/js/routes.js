angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('ingIndustrial.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('ingIndustrial.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('ingIndustrial.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('ingIndustrial.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('ingIndustrial.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('ingIndustrial', {
    url: '/side-menu21',
    templateUrl: 'templates/ingIndustrial.html',
    controller: 'ingIndustrialCtrl'
  })

  .state('ingIndustrial.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('ingIndustrial.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('ingIndustrial.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('ingIndustrial.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('ingIndustrial.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('ingIndustrial.4AO', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('ingIndustrial.5AO', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('ingIndustrial.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('ingIndustrial.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('ingIndustrial.matemTica', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matemTica.html',
        controller: 'matemTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.fSica', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSica.html',
        controller: 'fSicaCtrl'
      }
    }
  })

  .state('ingIndustrial.quMica', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMica.html',
        controller: 'quMicaCtrl'
      }
    }
  })

  .state('ingIndustrial.LgebraYGeometrAAnalTica', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/LgebraYGeometrAAnalTica.html',
        controller: 'LgebraYGeometrAAnalTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.anLisisMatemTicoI', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anLisisMatemTicoI.html',
        controller: 'anLisisMatemTicoICtrl'
      }
    }
  })

  .state('ingIndustrial.quMicaGeneralEInorgNica', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaGeneralEInorgNica.html',
        controller: 'quMicaGeneralEInorgNicaCtrl'
      }
    }
  })

  .state('ingIndustrial.sistemasDeRepresentaciN', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasDeRepresentaciN.html',
        controller: 'sistemasDeRepresentaciNCtrl'
      }
    }
  })

  .state('ingIndustrial.expresiNOralYEscrita', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('ingIndustrial.informTica', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.fSicaI', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSicaI.html',
        controller: 'fSicaICtrl'
      }
    }
  })

  .state('ingIndustrial.quMicaOrgNica', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaOrgNica.html',
        controller: 'quMicaOrgNicaCtrl'
      }
    }
  })

  .state('ingIndustrial.anLisisMatemTicoII', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anLisisMatemTicoII.html',
        controller: 'anLisisMatemTicoIICtrl'
      }
    }
  })

  .state('ingIndustrial.fSicaII', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSicaII.html',
        controller: 'fSicaIICtrl'
      }
    }
  })

  .state('ingIndustrial.estabilidad', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estabilidad.html',
        controller: 'estabilidadCtrl'
      }
    }
  })

  .state('ingIndustrial.ingles', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingles.html',
        controller: 'inglesCtrl'
      }
    }
  })

  .state('ingIndustrial.cLculoNumRico', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cLculoNumRico.html',
        controller: 'cLculoNumRicoCtrl'
      }
    }
  })

  .state('ingIndustrial.estadStica', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadStica.html',
        controller: 'estadSticaCtrl'
      }
    }
  })

  .state('electrotecnia', {
    url: '/page29',
    templateUrl: 'templates/electrotecnia.html',
    controller: 'electrotecniaCtrl'
  })

  .state('ingIndustrial.mecNicaDeLosFluidos', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mecNicaDeLosFluidos.html',
        controller: 'mecNicaDeLosFluidosCtrl'
      }
    }
  })

  .state('ingIndustrial.sistemasInformTicos', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasInformTicos.html',
        controller: 'sistemasInformTicosCtrl'
      }
    }
  })

  .state('ingIndustrial.economA', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/economA.html',
        controller: 'economACtrl'
      }
    }
  })

  .state('ingIndustrial.conocYEnseDeMat', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conocYEnseDeMat.html',
        controller: 'conocYEnseDeMatCtrl'
      }
    }
  })

  .state('ingIndustrial.termodinMica', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/termodinMica.html',
        controller: 'termodinMicaCtrl'
      }
    }
  })

  .state('ingIndustrial.electrNica', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNica.html',
        controller: 'electrNicaCtrl'
      }
    }
  })

  .state('ingIndustrial.elementosDeMaquinas', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elementosDeMaquinas.html',
        controller: 'elementosDeMaquinasCtrl'
      }
    }
  })

  .state('ingIndustrial.instalacionesElCtricas', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesElCtricas.html',
        controller: 'instalacionesElCtricasCtrl'
      }
    }
  })

  .state('ingIndustrial.tecnologAMecNica', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecnologAMecNica.html',
        controller: 'tecnologAMecNicaCtrl'
      }
    }
  })

  .state('ingIndustrial.maqTRmicasYFrigorFicas', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maqTRmicasYFrigorFicas.html',
        controller: 'maqTRmicasYFrigorFicasCtrl'
      }
    }
  })

  .state('ingIndustrial.contYMontIndustriales', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contYMontIndustriales.html',
        controller: 'contYMontIndustrialesCtrl'
      }
    }
  })

  .state('ingIndustrial.operacionesUnitariasI', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/operacionesUnitariasI.html',
        controller: 'operacionesUnitariasICtrl'
      }
    }
  })

  .state('ingIndustrial.investigaciNOperativa', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/investigaciNOperativa.html',
        controller: 'investigaciNOperativaCtrl'
      }
    }
  })

  .state('ingIndustrial.automatizaciNIndustrial', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/automatizaciNIndustrial.html',
        controller: 'automatizaciNIndustrialCtrl'
      }
    }
  })

  .state('ingIndustrial.operacionesUnitariasII', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/operacionesUnitariasII.html',
        controller: 'operacionesUnitariasIICtrl'
      }
    }
  })

  .state('ingIndustrial.organizaciNIndustrial', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/organizaciNIndustrial.html',
        controller: 'organizaciNIndustrialCtrl'
      }
    }
  })

  .state('ingIndustrial.instalIndustParaServicios', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalIndustParaServicios.html',
        controller: 'instalIndustParaServiciosCtrl'
      }
    }
  })

  .state('ingIndustrial.optimizaciNYControl', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/optimizaciNYControl.html',
        controller: 'optimizaciNYControlCtrl'
      }
    }
  })

  .state('ingIndustrial.seguridadEHigieneIndustrial', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seguridadEHigieneIndustrial.html',
        controller: 'seguridadEHigieneIndustrialCtrl'
      }
    }
  })

  .state('ingIndustrial.legislaciNIndustrial', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/legislaciNIndustrial.html',
        controller: 'legislaciNIndustrialCtrl'
      }
    }
  })

  .state('ingIndustrial.adminDeEmpresas', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adminDeEmpresas.html',
        controller: 'adminDeEmpresasCtrl'
      }
    }
  })

  .state('ingIndustrial.implantaciNIndustrial', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/implantaciNIndustrial.html',
        controller: 'implantaciNIndustrialCtrl'
      }
    }
  })

  .state('ingIndustrial.gestiNAmbiental', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gestiNAmbiental.html',
        controller: 'gestiNAmbientalCtrl'
      }
    }
  })

  .state('ingIndustrial.gestiNDeRRHH', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gestiNDeRRHH.html',
        controller: 'gestiNDeRRHHCtrl'
      }
    }
  })

  .state('ingIndustrial.gestiNDeCalidad', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gestiNDeCalidad.html',
        controller: 'gestiNDeCalidadCtrl'
      }
    }
  })

  .state('ingIndustrial.prCticaProfSupervisada', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaProfSupervisada.html',
        controller: 'prCticaProfSupervisadaCtrl'
      }
    }
  })

  .state('ingIndustrial.trabajoFinal', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('ingIndustrial.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('ingIndustrial.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('ingIndustrial.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});