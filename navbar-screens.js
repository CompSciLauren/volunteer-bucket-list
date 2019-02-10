$(document).ready(function() {
  $(".homeScreen").click(function() {
    loadHomeScreen();
  });

  $(".favoritesScreen").click(function() {
    loadFavoritesScreen();
  });

  $(".settingsScreen").click(function() {
    loadSettingsScreen();
  });
});

function switchDayNightMode() {
  if (nightMode) {
    $("body").css("background-color", "#221853");
    $("label").css("color", "white");
    nightMode = false;
  } else {
    $("body").css("background-color", "white");
    $("label").css("color", "black");
    nightMode = true;
  }
}

// main load functions for each screen on navbar
function loadHomeScreen() {
  location.reload();
  // $("#settingsScreenOptions").hide();

  // $(".foodPantries").show();
  // $(".environmental").show();
  // $(".homeless").show();
  // $(".refugees").show();
  // $(".elderly").show();
  // $(".animalShelters").show();
}

function loadFavoritesScreen() {
  $("#settingsScreenOptions").hide();
  $("#favoritesScreenOptions").show();

  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}

function loadSettingsScreen() {
  $("#settingsScreenOptions").show();
  $("#favoritesScreenOptions").hide();

  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}
