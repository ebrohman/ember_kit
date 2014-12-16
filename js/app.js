App = Ember.Application.create();

App.Router.map(function() {
	this.resource('person');
	this.resource('workplace');
});

App.ApplicationAdapter = DS.FixtureAdapter;

App.Person = DS.Model.extend({
	userName: DS.attr('string'),
	role: DS.attr('string')
});

App.PersonController = Ember.ArrayController.extend({

});

App.Person.reopenClass({
	FIXTURES: [
		{
			id: 1,
			userName: 'Demo1',
			role: 'admin'
		},
		{
			id: 2,
			userName: 'Demo2',
			role: 'adminAssistant'
		},
		{
			id: 3,
			userName: 'Demo3',
			role: 'deptHead'
		},
		{
			id: 4,
			userName: 'Demo4',
			role: 'groupTeam',
		},
		{
			id: 5,
			userName: 'Demo5',
			role: 'principal'
		},
		{
			id: 6,
			userName: 'Demo6',
			role: 'teacher'
		}
	]
});



App.PersonRoute = Ember.Route.extend({
  model: function(role) {
    return this.store.find('person');
  }
});



window.EMBER_INSPECTOR_CONFIG = null;