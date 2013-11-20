(function($) {

	var alertKeyAndValue = function(object) {
		var msg;
		
		for(key in object) {
			msg = msg + key + ' : ' + object[key] + '\n';
		}
	}

	//Models

	var RoutePoint = Backbone.Model.extend({
		defaults: {
			question: 'Question',
			answer: 'Answer'
		}
	});
	
	//Collections
	
	var Route = Backbone.Collection.extend({
		model : RoutePoint
	});
	
	var route = new Route;
	
	//Views
	
	var clearApp = function(el) {
		$(el).empty();
	}
	
	var IndexView = Backbone.View.extend({
		el: $('#ajaApp'),
		
		events: {
			'click button#aja' : 'race',
			'click button#createNewRoutePoint' : 'createNewRoutePoint'
		},
		
		initialize: function() {
			_.bindAll(this, 'render');
			this.render();
		},
		
		render: function() {
			var self = this;
			clearApp(this.el);
			$(this.el).append('<button id="aja">AJA!</button>');
			$(this.el).append('<button id="createNewRoutePoint">Luo uusi reittipiste</button>');
		},
		
		race: function() {
			var routeView = new RouteView;
		},
		
		createNewRoutePoint: function() {
			var createRoutePointView =  new CreateRoutePointView;
		}
		
	
	});
	
	var CreateRoutePointView = Backbone.View.extend({
		el: $('#ajaApp'),
		
		events: {
			'click button#create' : 'createRoutePoint'
		},
		
		initialize: function() {
			_.bindAll(this, 'render');
			this.render();
		},
		
		render: function() {
			var self = this;
			clearApp(this.el);
			$(this.el).append('<input type="text" size="25" id="question" placeholder="Kysymyksesi">');
			$(this.el).append('<input type="text" size="25" id="answer" placeholder="Vastauksesi">');
			$(this.el).append('<button id="create">Luo reittipiste</button>');
		},
		
		createRoutePoint: function() {
			var routePoint = new RoutePoint();
			
			routePoint.set({
				question : $('input#question').val(),
				answer : $('input#answer').val()
			});
			
			route.add(routePoint);
			
			var indexView = new IndexView;
		}
		
	});
	
	var RouteView = Backbone.View.extend({
		el: $('#ajaApp'),
		
		events: {
			'click button#answer' : 'checkAnswer'
		},
		
		initialize: function() {
			
			_.bindAll(this, 'render', 'checkAnswer', 'askQuestion');
			this.collection = route;
			this.render();
		},
		
		render: function() {
			clearApp(this.el);
			var self = this;
			
			$(this.el).append('<h1 id="question"></h1>');
			$(this.el).append('<input type="text" size="25" id="answer" placeholder="Vastauksesi">');
			$(this.el).append('<button id="answer">Anna vastauksesi</button>');
			$(this.el).append('<ul></ul>');
			this.askQuestion(Math.floor(Math.random()*this.collection.length));
		},
		
		
		checkAnswer: function() {
			var guess = $('input#answer').val();
			var answer = this.collection.at(this.counter).get('answer');
			
			if (guess == answer) {
				this.counter = this.counter + 1;
				this.askQuestion(this.counter);
			}
			
			this.clearAnswerField();
		},
		
		clearAnswerField: function() {
			$('input#answer').val('');
		},
		
		askQuestion: function(questionNumber) {
			var routePoint = this.collection.at(questionNumber);
			
			$('h1#question').empty();
			$('h1#question').append(routePoint.get('question'));
		}
	
	});
	
	
	var indexView = new IndexView;

	
})(jQuery);