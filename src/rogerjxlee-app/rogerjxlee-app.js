Polymer({
  is: 'rogerjxlee-app',
  ready: function() {
    this.$$('#about-tab').onclick = function() {
      this.$$('#about').scrollIntoView(true);
      console.log('clicked')
    }.bind(this);
    this.$$('#services-tab').onclick = function() {
      this.$$('#services').scrollIntoView(true);
      console.log('clicked')
    }.bind(this);
    this.$$('#contact-tab').onclick = function() {
      this.$$('#contact').scrollIntoView(true);
      console.log('clicked')
    }.bind(this);
  }
});
