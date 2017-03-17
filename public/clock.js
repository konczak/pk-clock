define(function(require) {
  function ClockProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));
    return new TemplateVisType({
      name: 'pkClock', // the internal id of the visualization
      title: 'Clock', // the name shown in the visualize list
      icon: 'fa-clock-o', // the class of the font awesome icon for this
      description: 'Add a digital clock to your dashboards.', // description shown to the user
      requiresSearch: false, // Cannot be linked to a search
      template: require('plugins/pk-clock/clock.html') // Load the template of the visualization
    });
  }

  require('ui/registry/vis_types').register(ClockProvider);
  require('plugins/pk-clock/clock.css');
  
  var module = require('ui/modules').get('pk-clock');
	module.controller('ClockController', function($scope, $timeout) {
	  var setTime = function() {
		$scope.time = Date.now();
		$timeout(setTime, 1000);
	  };
	  setTime();
	});

  return ClockProvider;
});