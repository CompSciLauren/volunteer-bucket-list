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

function loadHomeScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}

function loadFavoritesScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}

function loadSettingsScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}
