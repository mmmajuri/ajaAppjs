var RouteView = Backbone.View.extend({
	el: $('#ajaApp'),
	
	render: function() {	
		var template = _.template( $("#routeTemplate").html(), {
			route: route, 
			routePointTemplate: _.template($("#routePointTemplate").html())
		});
		this.$el.html(template);
	},
	
	initialize: function() {
		var self = this;
		this.render();
	}
});