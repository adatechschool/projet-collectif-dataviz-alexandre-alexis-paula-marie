var texteAfficher = false
var texteAfficher2 = false
var texteAfficher3 = false

async function planetInfo(planetName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
  const infos = await response.json();
  if (texteAfficher == false) {
      console.log(infos);
    // document.querySelector("#informations")
    var container = document.getElementById("informations");
    container.innerHTML = "";
    container.innerHTML += `<p>${infos.name}</p>`;
    container.innerHTML += `<p>Année: ${infos.sideralOrbit} jours</p>`;
    container.innerHTML += `<p>Jour: ${infos.sideralRotation} heures</p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
    texteAfficher = true
  } else if(texteAfficher) {
    texteAfficher = false
    var container = document.getElementById("informations");
    container.innerHTML = "";
  }
  // console.log(texteAfficher)
}

async function moonInfo(moonName) {
  if (texteAfficher3 == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
    const infos = await response.json();
    var container = document.getElementById("informations");
    container.innerHTML = "";
    // console.log(infos);
    container.innerHTML += `<p>${infos.name}</p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
    texteAfficher3 = true
  } else if (texteAfficher3) {
    texteAfficher3 = false;
    var container = document.getElementById("informations");
    container.innerHTML = "";
  }
}

async function starInfo(starName) {
  if (texteAfficher2 == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
    const infos = await response.json();
    var container = document.getElementById("informations");
    container.innerHTML = "";
    // console.log(infos);
    container.innerHTML += `<p>${infos.name}</p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
    texteAfficher2 = true;
  } else if(texteAfficher2) {
    texteAfficher2 = false;
    var container = document.getElementById("informations");
    container.innerHTML = "";
  }
}

// FONCTION CONCERNANT L'ISS ------------------
async function issInfo() {
  const response = await fetch("http://api.open-notify.org/iss-now.json");
  const infos = await response.json();
  console.log(infos)
}
issInfo()

