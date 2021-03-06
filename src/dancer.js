var MakeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

MakeDancer.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};
