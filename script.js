// code pour résoudre les problèmes des boutons, pas encore validé
function toggleAccordion(sectionNumber) {
  var content = document.querySelector("boutons");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
// code pour résoudre les problèmes des boutons, pas encore validé

async function planetInfo(planetName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
  const infos = await response.json();
  const container = document.getElementById("informations");

  container.innerHTML = "";

  container.innerHTML += `<p><strong>${infos.name}</strong></p>`;
  container.innerHTML += `<p>Année: ${infos.sideralOrbit} jours</p>`;
  container.innerHTML += `<p>Jour: ${infos.sideralRotation} heures</p>`;
  container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
}

// vérifier dans le else if si on appui sur le même bouton
// si on appuie sur le même, alors on ne supprime pas/on ne ferme pas ke bouton
// sinon on supprime les infos/ferme le bouton


async function moonInfo(moonName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
  const infos = await response.json();
  const container = document.getElementById("informations");

  container.innerHTML = "";

  container.innerHTML += `<p><strong>${infos.name}</strong></p>`;
  container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
}

async function starInfo(starName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
  const infos = await response.json();
  const container = document.getElementById("informations");

  container.innerHTML = "";

  container.innerHTML += `<p><strong>${infos.name}</strong></p>`;
  container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
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

issInfo()

position();
