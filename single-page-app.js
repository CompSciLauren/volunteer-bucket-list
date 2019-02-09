$(document).ready(function() {
  $(".backButton").hide();

  $(".backButton").click(function() {
    $(".backButton").hide();
    $(".edtechnology").show();
    $(".environmental").show();
    $(".homeless").show();
    $(".refugees").show();
    $(".childrenAndYoungPeople").show();
    $(".elderly").show();
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
