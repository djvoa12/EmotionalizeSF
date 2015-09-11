import Ember from 'ember';

const { $, Component, on } = Ember;

export default Component.extend({
  navScrolled: on('didRender', function() {
    let navbar = '.nav-container';

    $(window).scroll(function() {
      if($(this).scrollTop() > 30) {
        $(navbar).addClass('nav-container__scrolled');
      } else {
        $(navbar).removeClass('nav-container__scrolled');
      }
    });
  })
});
