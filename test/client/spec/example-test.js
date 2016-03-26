
define(['src/client/js/example-component'], function(ExampleComponent) {
	describe('a suite of tests', function() {
		it('a single test', function() {
			assert.equal('Hello World', new ExampleComponent().getMessage());
		});
	});
});
