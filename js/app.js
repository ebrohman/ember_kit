App = Ember.Application.create();

App.Router.map(function() {
	this.resource('people');
	this.resource('person', {path: '/people/:id'});
});


var people = [
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
	];




App.PeopleRoute = Ember.Route.extend({
  model: function() {
    return people;
  }
});

// App.PersonRoute = Ember.Route.extend({
// 	model: function(){
// 		return 
// 	}
// });


window.EMBER_INSPECTOR_CONFIG = null;