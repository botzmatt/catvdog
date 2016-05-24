$(document).ready(function() {
  $("button#grooming").click(function() {
    $("ul#cat").prepend("<li>Your fur reeks</li>");
    $("ul#dog").prepend("<li>Your father smells of elderberries!</li>");
  });
});
