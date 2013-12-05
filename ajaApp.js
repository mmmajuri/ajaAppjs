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
		
		collection: new Route([
				{id: 1, question: '#5', answer: 'HTFU'},
				{id: 2, question: '2', answer: '3'},
				{id: 3, question: '3', answer: '4'},
				{id: 4, question: '4', answer: '5'},
				{id: 5, question: '5', answer: '6'},
				{id: 6, question: '6', answer: '7'},
			]),
		
		initialize: function() {
			var routeView = new RouteView({collection: this.collection});
		}
	});
	
	var appView = new AppView;
	
})(jQuery);