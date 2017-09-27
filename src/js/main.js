function navigasi(wrapper, wrapperName, btn) {
  var menuTrigger=$(wrapper);
  $(btn).click(function() {
    menuTrigger.addClass('active');
  });
  menuTrigger.click(function(e) {
    if($(e.target).hasClass(wrapperName)){
      menuTrigger.removeClass('active');
    }
  });
}
$(document).ready(function() {
  navigasi('.md-wrapper','md-wrapper','.btn-dropdown');
  navigasi('.nav-collapse-xs','nav-collapse-xs','.btn-nav');
  $('.close-btn').click(function() {
    $('.nav-collapse-xs').removeClass('active');
  });
});
