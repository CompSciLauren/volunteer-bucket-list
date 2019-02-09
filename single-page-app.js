$(document).ready(function() {
  /*$("form1").on("submit", function(e) {
    console.log("wow");
    alert("dasdasdas");
    e.preventDefault();
  });*/
  $(".backButton").hide();

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
