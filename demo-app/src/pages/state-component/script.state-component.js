'use strict';

var html = require('raw!./view.state-component.html');

module.exports = {
  template: html,
  data: {
    state: false
  },
  methods: {
    changeState: function() {
      this.state = true;
      setTimeout(function() {
        this.state = false;
      }.bind(this), 2000);
    }
  }
};
