// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/sortable
// require rails_sortable
//= require bootstrap-sprockets
//= require html.sortable
//= require_tree .

$(document).ready(function() {
  var tab = $("table").eq(0);

  $("tbody>tr").on("click", function() {
    clearTableColor();
    $(this).css("background-color", "lightblue");
    var rows = tab.children("tbody").children("tr");
    var str = $(this).children(".routes").eq(0).text();
    var arr = (str.match(/(\d+)/g));

    if (arr != null && arr!="") {
      for (var x = 0; x < arr.length; x++) {
        var i = parseInt(arr[x], 10);
        var c = $(rows).eq(i);

        c.css("background-color", "pink");
      }
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
