var texteAfficher = false

async function planetInfo(planetName) {
  if (texteAfficher == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
    const infos = await response.json();
    console.log(infos);
    // document.querySelector("#informations")
    var container = document.getElementById("informations");
    container.innerHTML = "";
    container.innerHTML += `<p>Nom: ${infos.name}</p>`;
    container.innerHTML += `<p>Période de révolution autour du soleil: ${infos.sideralOrbit} jours</p>`;
    container.innerHTML += `<p>Période de rotation sur son axe: ${infos.sideralRotation} heures</p>`;
    container.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
    texteAfficher = true
  } else if(texteAfficher) {
    texteAfficher = false
    var container = document.getElementById("informations");
    container.innerHTML = "";
  }
  // console.log(texteAfficher)
}

async function moonInfo(moonName) {
  if (texteAfficher == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
    const infos = await response.json();
    var container = document.getElementById("informations");
    container.innerHTML = "";
    // console.log(infos);
    container.innerHTML += `<p>Nom: ${infos.name}</p>`;
    container.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
    texteAfficher = true
  } else if (texteAfficher) {
    texteAfficher = false;
    var container = document.getElementById("informations");
    container.innerHTML = "";
  }
}

async function starInfo(starName) {
  if (texteAfficher == false) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
    const infos = await response.json();
    var container = document.getElementById("informations");
    container.innerHTML = "";
    // console.log(infos);
    container.innerHTML += `<p>Nom: ${infos.name}</p>`;
    container.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
    texteAfficher = true;
  } else if(texteAfficher) {
    texteAfficher = false;
    var container = document.getElementById("informations");
    container.innerHTML = "";
  }
}
