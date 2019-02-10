$(document).ready(function() {
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
