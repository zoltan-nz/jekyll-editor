define(['./track-event'], function(TrackEvent) {
  
  var Tracker = function(name) {
    this.name = name;
    this.trackEvent = new TrackEvent(this.name);
  };
  
  Tracker.prototype = {
    fire: function(e) {
      this.trackEvent.addStep(e.type);  
    }
  };

  return Tracker;
});