async function planetInfo(planetName) {
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
}

async function moonInfo(moonName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
  const infos = await response.json();
  var container = document.getElementById("informations");
  container.innerHTML = "";
  // console.log(infos);
  container.innerHTML += `<p>Nom: ${infos.name}</p>`;
  container.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
}

async function starInfo(starName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
  const infos = await response.json();
  var container = document.getElementById("informations");
  container.innerHTML = "";
  // console.log(infos);
  container.innerHTML += `<p>Nom: ${infos.name}</p>`;
  container.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
}
