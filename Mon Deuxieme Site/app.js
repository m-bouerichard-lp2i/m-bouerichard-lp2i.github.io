// On récupère le bouton et le compteur
let button = document.getElementById("clickButton");
let counter = document.getElementById("counter");

// On initialise le compteur
let count = 0;

// Fonction qui s'exécute à chaque clic
button.addEventListener("click", function() {
    count++;
    counter.textContent = count; // Met à jour le texte du compteur
});
