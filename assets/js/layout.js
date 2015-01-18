(function (root) {
  require.config({
    paths: {
      jquery: 'https://code.jquery.com/jquery-1.11.1.min',
      bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min',
      // 'socket.io': 'https://cdn.socket.io/socket.io-1.2.1',
      // 'sails.io': 'https://rawgit.com/balderdashy/sails.io.js/master/dist/sails.io',
      'sails.io': '/js/dependencies/sails.io',
      vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/0.11.4/vue.min',
      leaflet: 'http://cdn.leafletjs.com/leaflet-0.7.3/leaflet',
      'leaflet.markercluster': 'https://rawgit.com/Leaflet/Leaflet.markercluster/master/dist/leaflet.markercluster',
      'leaflet.heat': 'http://leaflet.github.io/Leaflet.heat/dist/leaflet-heat',
      'leaflet.geosearch': 'https://rawgit.com/smeijer/L.GeoSearch/master/src/js/l.control.geosearch',
      'leaflet.geosearch.provider.openstreetmap': 'https://rawgit.com/smeijer/L.GeoSearch/master/src/js/l.geosearch.provider.openstreetmap',
      moment: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min',
      'twitter-text': 'https://rawgit.com/twitter/twitter-text/master/js/twitter-text',
      'binarysearch': 'https://rawgit.com/mgechev/javascript-algorithms/master/src/searching/binarysearch',
      'mergesort': 'https://rawgit.com/secrettriangle/javascript-algorithms/779c7ec1525e750e50883bd3e1253df983067b20/src/sorting/mergesort',
      'nprogress': 'https://rawgit.com/rstacruz/nprogress/master/nprogress',
    },
    shim: {
      bootstrap: {deps: ['jquery']},
      'leaflet.markercluster': {deps: ['leaflet']},
      'leaflet.heat': {deps: ['leaflet']},
      'leaflet.geosearch': {deps: ['leaflet']},
      'leaflet.geosearch.provider.openstreetmap': {deps: ['leaflet.geosearch']},
      'binarysearch': {exports: 'binarySearch'},
      'mergesort': {exports: 'mergeSort'},
    }
  });

  root.document.dispatchEvent(new Event('diseasetrackReady'));

  require(['jquery', 'bootstrap'], function (jQuery) {
    jQuery(function ($) {
      var $body = $('body').removeClass('no-js').addClass('js');
    });
  });
}(this));
