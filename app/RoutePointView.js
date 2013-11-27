var RoutePointView = Backbone.View.extend({
	el: $('#route'),
	events: {
		'click guess.answer' : 'checkAnswer'
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
		this.$el.append(template);
	},
	
	checkAnswer: function() {
		var reply = false;
		var answer = this.model.get('answer');
		var guess = $(this.el + 'input#guess').val();
		
		if (answer == guess) {
			reply = true;
		}
		
		this.trigger('isAnswerCorrect', reply);
		alert(reply);
	}

});
