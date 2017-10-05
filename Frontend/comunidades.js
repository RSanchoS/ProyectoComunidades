$( function() {
  var availableTags = [
    "Andalucia",
    "Aragon",
    "Asturias",
    "Baleares",
    "Canarias",
    "Cantabria",
    "Castilla la Mancha",
    "Castilla y Leon",
    "Cataluña",
    "Valencia",
    "Extremadura",
    "Galicia",
    "La Rioja",
    "Madrid",
    "Murcia",
    "Navarra",
    "Pais Vasco"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );
