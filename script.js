/* global $ */

$("#names li").click(
  function () {
    $("#main").html(
      $(this).text()
    );
  }
);
