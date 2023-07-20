let texteAfficher = false
let texteAfficher2 = false
let texteAfficher3 = false

async function planetInfo(planetName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
  const infos = await response.json();
  if (texteAfficher == false) {
      console.log(infos);
    // document.querySelector("#informations")
    let container = document.getElementById("informations");
    container.innerHTML = "";
    container.innerHTML += `<p><strong>${infos.name}</strong></p>`;
    container.innerHTML += `<p>Année: ${infos.sideralOrbit} jours</p>`;
    container.innerHTML += `<p>Jour: ${infos.sideralRotation} heures</p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
    texteAfficher = true
  } else if(texteAfficher) {
    texteAfficher = false;
    const dropdownButton = document.getElementById("dropdownButton");
    const options = dropdownButton.getElementsByTagName("option");

    // Utiliser forEach pour itérer sur les options
    Array.from(options).forEach(function(option) {
      // Ajouter un gestionnaire d'événements "click" à chaque option
      option.addEventListener("click", function() {
        const selectedOption = option.value; // Valeur de l'option sélectionnée
        let container = document.getElementById("informations");
        container.innerHTML = "";
        // Faire quelque chose avec l'option sélectionnée
        // console.log("Option sélectionnée :", selectedOption);
      });
    });
  }
  // console.log(texteAfficher)
}

// vérifier dans le else if si on appui sur le même bouton
// si on appuie sur le même, alors on ne supprime pas/on ne ferme pas ke bouton
// sinon on supprime les infos/ferme le bouton


async function moonInfo(moonName) {
  if (texteAfficher3 == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
    const infos = await response.json();
    let container = document.getElementById("informations");
    container.innerHTML = "";
    // console.log(infos);
    container.innerHTML += `<p><strong>${infos.name}</strong></p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
    texteAfficher3 = true
  } else if (texteAfficher3) {
    texteAfficher3 = false;
    let container = document.getElementById("informations");
    container.innerHTML = "";
  }
}

async function starInfo(starName) {
  if (texteAfficher2 == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
    const infos = await response.json();
    let container = document.getElementById("informations");
    container.innerHTML = "";
    // console.log(infos);
    container.innerHTML += `<p><strong>${infos.name}</strong></p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
    texteAfficher2 = true;
  } else if(texteAfficher2) {
    texteAfficher2 = false;
    let container = document.getElementById("informations");
    container.innerHTML = "";
  }
}

// FONCTION CONCERNANT L'ISS ------------------
const position = async function issInfo() {
  const response = await fetch("http://api.open-notify.org/iss-now.json");
  const infos = await response.json();
  // console.log(infos)
  const positionIss = infos.iss_position
  // console.log(positionIss)
  const latitude = positionIss.latitude
  const longitude = positionIss.longitude
  let marker = L.marker([latitude, longitude]).addTo(map);
  console.log(marker)
}
position();

