var RoutePointView = Backbone.View.extend({
	events: {
		'click button' : 'checkAnswer'
	},
	
	initialize: function() {
		var self = this;
		_.bindAll(this, 'render', 'checkAnswer');
		this.render();
	},
	
	render: function() {
		var template = _.template( $("#routePointTemplate").html(), {
			routePoint: this.model
		});	
		$(this.el).append(template);
		return this;
	},
	
	checkAnswer: function() {
		var element = 'input#' + this.model.get('id');
		var reply = false;
		var answer = this.model.get('answer');
		var guess = $(element).val();
		
		if (answer == guess) {
			reply = true;
		}
		
		//this.trigger('isAnswerCorrect', reply);
		console.log(reply);
	}

});
