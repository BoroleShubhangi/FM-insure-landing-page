
$(document).ready(function () {
  $("#toggle_menu").on("click", function () {
    this.classList.toggle("active");
    $("div").find("ul").toggleClass('open');
  });
});
