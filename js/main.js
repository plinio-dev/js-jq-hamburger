// Mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS


// seleziono gli elementi del DOM e li inserisco in delle variabili
var openMenu = $(".header-right a:last-child");
var hamburgerMenu = $(".hamburger-menu");
var closeMenu = $(".close");

// apro l'hamburgher menu al click
openMenu.click(
  function() {
    hamburgerMenu.show("swing");
  }
);

// chiudo l'hamburgher menu al click
closeMenu.click(
  function() {
    hamburgerMenu.hide("swing");
  }
);
