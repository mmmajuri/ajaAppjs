(function($) {

	var alertKeyAndValue = function(object) {
		var msg;
		
		for(key in object) {
			msg = msg + key + ' : ' + object[key] + '\n';
		}
	}
	
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
	
	var RoutePointView = Backbone.View.extend({
		el: $('#route'),
		
		template: _.template($("#routePoint").html()),
		
		render: function() {
			
		
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
			this.routePoint = new RoutePoint;
		},
		
		render: function() {
			clearApp(this.el);
			var self = this;
			var rand = Math.floor(Math.random()*this.collection.length);
			
			alert('render::' + rand + ' ' + this.collection.length);
			
			$(this.el).append('<h1 id="question"></h1>');
			$(this.el).append('<input type="text" size="25" id="answer" placeholder="Vastauksesi">');
			$(this.el).append('<button id="answer">Anna vastauksesi</button>');
			$(this.el).append('<ul></ul>');
			this.askQuestion(rand);
		},
		
		
		checkAnswer: function() {
			var guess = $('input#answer').val();
			var answer = this.routePoint.get('answer');
			
			alert('checkAnswer::' + guess + ' ' + this.routePoint.get('answer'));
			
			if (guess == answer) {
				this.askQuestion(Math.floor(Math.random()*this.collection.length));
			}
			
			this.clearAnswerField();
		},
		
		clearAnswerField: function() {
			$('input#answer').val('');
		},
		
		askQuestion: function(questionNumber) {
			var routePoint = this.collection.at(questionNumber);
			this.routePoint = routePoint;
			
			alert('askQuestion::' + this.routePoint.get('question') + ' ' + this.routePoint.get('answer'));
			
			$('h1#question').empty();
			$('h1#question').append(routePoint.get('question'));
		}
	
	});
	
	
	var indexView = new IndexView;

	
})(jQuery);