var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  console.log('bonjour')
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link")
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabName).classList.add("active-tab")
}

var sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-170px";
}

function afficher_cacher() {
  console.log('bonjour')
  bouton = document.getElementById('bouton_texte');
  texte = document.getElementById('texte');
  if (texte.style.display == "block") {
    console.log('au revoir2')
    texte.style.display = "none";
    bouton.innerHTML = 'Voir plus';
  }
  else {
    console.log('au revoir')
    texte.style.display = "block";
    bouton.innerHTML = 'Voir moins';
  }
  return true;
}