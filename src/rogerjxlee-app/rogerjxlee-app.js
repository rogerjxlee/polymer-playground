Polymer({
  is: 'rogerjxlee-app',
  ready: function() {
    var sections = ['about', 'services', 'contact'];
    sections.forEach(function(section) {
      console.log(section);
      this.$$('#' + section + '-tab').onclick = function() {
        this.$$('#' + section).scrollIntoView({
          behavior: 'smooth', block: 'start', inline: 'nearest'});
      }.bind(this);
    }, this);
  }
});
