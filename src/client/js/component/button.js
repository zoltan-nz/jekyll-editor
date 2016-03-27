define([], function() {

  return function(id) {
    this.id = id;

    return (new String("<button id='" + this.id + "'>" + this.id + "</button>"));
  };

});