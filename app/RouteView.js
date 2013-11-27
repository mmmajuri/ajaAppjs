var RouteView = Backbone.View.extend({
	el: $('#ajaApp'),
	
	events: {
	},
	
	initialize: function() {
		var self = this;
		_.bindAll(this, 'render')
		this.render();
	},
	
	render: function() {	
		var template = _.template( $("#routeTemplate").html(), {
			route: route
		});
		this.$el.html(template);
	}
});