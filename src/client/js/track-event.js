define([], function() {

  var TrackEvent = function(type) {
    this.type = type;
  };
  
  TrackEvent.prototype = {
    counter: 0,
    
    addStep: function() {
      this.counter++;
      console.log(this.type, this.counter);
    }
  };

  return TrackEvent;
});