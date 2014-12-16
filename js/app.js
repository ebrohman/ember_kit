App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
	this.resource('person', function(){
		this.route('edit', {path: '/edit/:id'});
	});
});
var attr = DS.attr;

App.Person = DS.Model.extend({
	userName: attr('string'),
	role: attr('string', {defaultValue: 'admin'}),
	email: attr('string')
});


App.Person.reopenClass({
	FIXTURES: [
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
			email: 'demo2@example.com'
		},
		{
			id: 3,
			userName: 'Demo3',
			role: 'deptHead',
			email: 'demo3@example.com'
		},
		{
			id: 4,
			userName: 'Demo4',
			role: 'groupTeam',
			email: 'demo4@example.com'
		},
		{
			id: 5,
			userName: 'Demo5',
			role: 'principal',
			email: 'demo5@example.com'
		},
		{
			id: 6,
			userName: 'Demo6',
			role: 'teacher',
			email: 'demo6@example.com'
		}
	]
});



App.PersonRoute = Ember.Route.extend({
	model: function() {
   		return this.store.find('person');
  	}
});

App.PersonEditRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('person', params.id);
	},
	actions: {
		update: function(){
			console.log("Updating");
		}
	}
})

App.PersonEditController = Ember.Controller.extend({

});

window.EMBER_INSPECTOR_CONFIG = null;