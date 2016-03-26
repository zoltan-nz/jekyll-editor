define([], function() {

	var ExampleComponent = function(name) {
		if (name === undefined) {
			this.name = 'World';
		} else {
			this.name = name;
		}
	};

	ExampleComponent.prototype = {
		getMessage: function() {
			return 'Hello ' + this.name;
		}
	};

	return ExampleComponent;
});