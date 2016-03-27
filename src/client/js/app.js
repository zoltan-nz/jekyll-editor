define(['./example-component', 'jquery', './component/button', './tracker'], function(ExampleComponent, $, Button, Tracker) {

	console.info('message', new ExampleComponent('Zoltan').getMessage());

	var $body = $('body');

  // Generate a couple of dummy button
  $body.append(new Button('First'), new Button('Second'), new Button('Third'));
  
  tracker = new Tracker('button watcher');
  
  $('button').each(function(index, button) {
    $(button).on('click', function(e) { tracker.fire(e) });
  });

});