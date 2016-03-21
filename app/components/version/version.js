'use strict';

angular.module('myApp.version', [
  'hsdbApp.version.interpolate-filter',
  'hsdbApp.version.version-directive'
])

.value('version', '0.1');
