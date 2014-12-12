App = Ember.Application.create();

App.Router.map(function() {
	this.route('git');
	this.route('person');
});

App.ApplicationAdapter = DS.FixtureAdapter;

App.Person = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string')
});


App.Person.reopenClass({
	FIXTURES: [
		{
			id: 1,
			firstName: 'Eric',
			lastName: 'Brohman'
		},
		{
			id: 2,
			firstName: 'Ted',
			lastName: 'Stevens'
		}
	]
});



App.PersonRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  }
});


App.GitRoute = Ember.Route.extend({
	model: function(){
		return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls')
			.then(function(data){
				return data.splice(0, 3);
			});
	}
});

window.EMBER_INSPECTOR_CONFIG = null;