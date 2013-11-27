(function($) {

	var alertKeysAndValues = function(object) {
		var msg;
		
		for(key in object) {
			msg = msg + key + ' : ' + object[key] + '\n';
		}
	}
	
	//Views
	
	var AppView = Backbone.View.extend({
		el: $("#ajaApp"),
		
		initialize: function() {
			var routeView = new RouteView;
		}
	});
	
	var appView = new AppView;
	
})(jQuery);