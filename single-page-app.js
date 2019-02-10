$(document).ready(function() {
  /*$("form1").on("submit", function(e) {
    console.log("wow");
    alert("dasdasdas");
    e.preventDefault();
  });*/
  $(".backButton").hide();

  $(".gotoMaps").click(function() {
    var page = "./googlemap.html";
    alert("test");

    var $googlemap = $("<div></div>")
      .html(
        '<iframe style="border: 0px; " src="' +
          page +
          '" width="100%" height="100%"></iframe>'
      )
      .googlemap({
        autoOpen: false,
        modal: true,
        height: 625,
        width: 500,
        title: "Some title"
      });
    $googlemap.googlemap("open");
  });

  $(".backButton").click(function() {
    location.reload();
  });

  $(".edtechnology").click(function() {
    $(".backButton").show();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  });

  $(".environmental").click(function() {
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  });

  $(".homeless").click(function() {
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();

    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  });

  $(".refugees").click(function() {
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  });

  $(".childrenAndYoungPeople").click(function() {
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".elderly").hide();
  });

  $(".elderly").click(function() {
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
  });
});
