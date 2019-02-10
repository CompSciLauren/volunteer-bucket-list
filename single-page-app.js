$(document).ready(function() {
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

  $("#favoritesScreenOptions").hide();
  $("#settingsScreenOptions").hide();

  $("#favoritesScreenOptions").click(function() {
    loadfavoritesScreenOptions();
  });

  $("#settingsScreenOptions").click(function() {
    loadSettingsScreenOptions();
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

  $(".animalShelters").click(function() {
    loadAnimalSheltersScreen();
  });

  $(".elderly").click(function() {
    loadElderlyScreen();
  });
});

function loadFoodPantriesScreen() {
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadEnvironmentalScreen() {
  $(".foodPantries").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadHomelessScreen() {
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadRefugeesScreen() {
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".animalShelters").hide();
  $(".elderly").hide();
}

function loadAnimalSheltersScreen() {
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".elderly").hide();
}

function loadElderlyScreen() {
  $(".foodPantries").hide();
  $(".environmental").hide();
  $(".homeless").hide();
  $(".refugees").hide();
  $(".animalShelters").hide();
}
