// Any custom JavaScript shall be placed in this file only.

// settings button, animate on hover
$(".fa-cog").mouseover(function(e) {
  if (!$(this).hasClass('fa-spin')) {
    $(this).addClass('fa-spin')
  }
}).mouseout(function(e) {
  if ($(this).hasClass('fa-spin')) {
    $(this).removeClass('fa-spin')
  }
});
