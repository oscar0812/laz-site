$(document).ready(function() {
  var tab = $("table").eq(0);

  $("tbody>tr").on("click", function() {
    clearTableColor();
    $(this).css("background-color", "lightblue");
    var rows = tab.children("tbody").children("tr");
    var str = $(this).children(".routes").eq(0).text();
    var arr = (str.match(/(\d+)/g));

    for (var x = 0; x < arr.length; x++) {
      var i = parseInt(arr[x], 10);
      var c = $(rows).eq(i);

      c.css("background-color", "pink");
    }
  });

  $("body").on("click", function(event) {
    var isChild = isChildOfElement(event, "tbody>tr");

    if (isChild)
      return;
    clearTableColor();
  })

  var isChildOfElement = function(event, selector) {
    if (event.originalEvent.path) {
      return event.originalEvent.path[0].closest(selector) !== null;
    }

    return event.originalEvent.originalTarget.closest(selector) !== null;
  }

  function clearTableColor() {
    var rows = tab.children("tbody").children("tr");
    rows.each(function(i, row) {
      $(row).css("background-color", "");
    });
  }
});
