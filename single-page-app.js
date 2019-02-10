$(document).ready(function() {
  $(".backButton").hide();

  $(".backButton").click(function() {
    location.reload();
  });

  $(".edtechnology").click(function() {
    loadEdtechnologyScreen();
  });

  $(".environmental").click(function() {
    loadEnvironmentalScreen();
  });

  $(".homeless").click(function() {
    loadHomelessScreen();
  });

  $(".refugees").click(function() {
    loadRefugeesScreen();
  });

  $(".childrenAndYoungPeople").click(function() {
    loadChildrenAndYoungPeopleScreen();
  });

  $(".elderly").click(function() {
    loadElderlyScreen();
  });

  function loadEdtechnologyScreen() {
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  }

  function loadEnvironmentalScreen() {
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  }

  function loadHomelessScreen() {
    alert("entered!");
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  }

  function loadRefugeesScreen() {
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".childrenAndYoungPeople").hide();
    $(".elderly").hide();
  }

  function loadChildrenAndYoungPeopleScreen() {
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".elderly").hide();
  }

  function loadElderlyScreen() {
    $(".searchStateAndLocationUI").css("visibility", "hidden");
    $(".backButton").show();
    $(".edtechnology").hide();
    $(".environmental").hide();
    $(".homeless").hide();
    $(".refugees").hide();
    $(".childrenAndYoungPeople").hide();
  }
});
