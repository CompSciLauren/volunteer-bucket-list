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
  location.reload();
}

function loadFavoritesScreen() {
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}

function loadSettingsScreen() {
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
  $(".animalShelters").hide();
}
