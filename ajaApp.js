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
			
		}
		
	
	});
	
	var RouteView = Backbone.View.extend({
		el: $('#ajaApp'),
		
		events: {
			'click button#answer' : 'checkAnswer'
		},
		
		initialize: function() {
			this.counter = 0;
			var routePoint1 = new RoutePoint();
			routePoint1.set({
				question : 'What is your quest?',
				answer : 'AJA!'
			});
			
			var routePoint2 = new RoutePoint();
			routePoint2.set({
				question : 'What is your favourite color?',
				answer : 'Blue'
			});
			
			var routePoint3 = new RoutePoint();
			routePoint3.set({
				question : 'What is the land speed of an unburdened swallow?',
				answer : 'African, or european?'
			});
			
			var routePoint4 = new RoutePoint();
			routePoint4.set({
				question : 'What is your quest?',
				answer : 'AJA!'
			});
			
			var routePoint5 = new RoutePoint();
			routePoint5.set({
				question : 'What is your quest?',
				answer : 'AJA!'
			});
			
			_.bindAll(this, 'render', 'checkAnswer', 'askQuestion');
			this.collection = new Route();
			this.collection.add(routePoint1);
			this.collection.add(routePoint2);
			this.collection.add(routePoint3);
			this.collection.add(routePoint4);
			this.collection.add(routePoint5);
			
			//this.collection.bind('add', this.appendRoutePoint);
			
			this.render();
		},
		
		render: function() {
			clearApp(this.el);
			var self = this;
			
			$(this.el).append('<h1 id="question"></h1>');
			$(this.el).append('<input type="text" size="25" id="answer" placeholder="Vastauksesi">');
			$(this.el).append('<button id="answer">Anna vastauksesi</button>');
			$(this.el).append('<ul></ul>');
			this.askQuestion(this.counter);
/* 			_(this.collection.models).each(function(item) {
				self.appendRoutePoint(item);
			}, this); */
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