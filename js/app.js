App = Ember.Application.create();

App.Router.map(function() {
	this.resource('people', function(){
		this.route('edit', {path: '/edit/:id'});
	});
});


var people = 
	[
		{
			id: 1,
			userName: 'Demo1',
			role: 'admin',
			email: 'demo1@example.com'
		},
		{
			id: 2,
			userName: 'Demo2',
			role: 'adminAssistant',
			email: 'demo1@example.com'
		},
		{
			id: 3,
			userName: 'Demo3',
			role: 'deptHead',
			email: 'demo1@example.com'
		},
		{
			id: 4,
			userName: 'Demo4',
			role: 'groupTeam',
			email: 'demo1@example.com'
		},
		{
			id: 5,
			userName: 'Demo5',
			role: 'principal',
			email: 'demo1@example.com'
		},
		{
			id: 6,
			userName: 'Demo6',
			role: 'teacher',
			email: 'demo1@example.com'
		}
	]




App.PeopleRoute = Ember.Route.extend({
	model: function() {
   		return people;
  	}
});

// App.PeopleEditRoute = Ember.Route.extend({
// 	model: function(){
// 		return people;
// 	}
// })

App.PeopleEditController = Ember.Controller.extend({
	model: function(params){
		return people.find(params.id);
	}
})

window.EMBER_INSPECTOR_CONFIG = null;