/* global $ */

$('#names li').on(
  'click',
  function () {
    $('#main').html(
      $(this).text()
    )
  }
)
