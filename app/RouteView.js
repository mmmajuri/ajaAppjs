var RouteView = Backbone.View.extend({
	el: $('#ajaApp'),
	
	template: $("#routeTemplate"),
	
	events: {
	},
	
	initialize: function() {
		var self = this;
		_.bindAll(this, 'render')
		this.render();
	},
	
	render: function() {	
		var template = _.template( $("#routeTemplate").html(), {
			route: this.collection
		});
		this.$el.html(template);
		return this;
	}
});