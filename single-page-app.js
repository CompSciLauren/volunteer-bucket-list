$(document).ready(function() {
  $(".backButton").hide();

  $(".backButton").click(function() {
    location.reload();
  });

  $(".foodPantries").click(function() {
    loadFoodPantriesScreen();
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

  $(".animalshelters").click(function() {
    loadAnimalSheltersScreen();
  });

  $(".elderly").click(function() {
    loadElderlyScreen();
  });
});

function loadFoodPantriesScreen() {
  $(".backButton").show();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadEnvironmentalScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadHomelessScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadRefugeesScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadAnimalSheltersScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
}

function loadElderlyScreen() {
  $(".backButton").show();
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
}
